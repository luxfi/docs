# Genesis Flow: CLI -> Netrunner -> Node -> EVM

## Critical Investigation Summary

**Date**: 2025-12-27  
**Scope**: CLI (`/Users/z/work/lux/cli`) and Netrunner (`/Users/z/work/lux/netrunner`)  
**Finding**: `stateRoot` and `genesisHash` are NOT stored in genesis JSON - they are computed by EVM at runtime.

---

## 1. Genesis Structure Overview

The main genesis.json contains **three genesis configurations**:

```
genesis.json (main)
├── networkID: 1 (mainnet) | 2 (testnet) | ...
├── allocations: [...] (P-Chain initial allocations)
├── initialStakers: [...] (validators)
├── cChainGenesis: "{...}" (C-Chain genesis as JSON STRING)
└── startTime, message, etc.
```

**Key Point**: `cChainGenesis` is embedded as an **escaped JSON string**, not a nested object.

---

## 2. Genesis Source Files

### 2.1 Canonical Genesis Package

**Location**: `/Users/z/work/lux/genesis/configs/`

```
genesis/configs/
├── configs.go           # Main loader with GetCanonicalGenesisBytes()
├── mainnet/
│   ├── network.json     # Network params (networkID, allocations, etc.)
│   ├── pchain.json      # P-Chain validators
│   └── cchain.json      # C-Chain genesis (raw JSON)
├── testnet/
├── devnet/
└── custom/
```

**`configs.go` key function**:
```go
func GetCanonicalGenesisBytes(networkID uint32) ([]byte, error) {
    // Returns pre-serialized bytes to avoid JSON re-serialization
    // which would cause "db contains invalid genesis hash" errors
    switch networkID {
    case constants.MainnetID:
        return mainnetFS.ReadFile("mainnet/genesis.json")
    case constants.TestnetID:
        return testnetFS.ReadFile("testnet/genesis.json")
    // ...
    }
}
```

### 2.2 Netrunner Default Genesis

**Location**: `/Users/z/work/lux/netrunner/network/default/genesis.json`

This is the fallback genesis used for local/devnet when no canonical genesis exists.

---

## 3. Flow Diagram

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           USER COMMAND                                       │
│   lux network start --mainnet    OR    lux chain deploy <name>              │
└──────────────────────────────────┬──────────────────────────────────────────┘
                                   │
                                   ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                         CLI (cmd/networkcmd/start.go)                        │
│                                                                              │
│  1. Parse flags (--mainnet, --testnet, etc.)                                │
│  2. Build globalNodeConfig:                                                  │
│     {                                                                        │
│       "network-id": 1,                                                       │
│       "db-type": "badgerdb",                                                 │
│       "api-admin-enabled": true,   <-- ADMIN API ENABLED HERE               │
│       "track-chains": "..."                                                  │
│     }                                                                        │
│  3. Create gRPC client to netrunner                                         │
│  4. Call client.Start() with options                                        │
└──────────────────────────────────┬──────────────────────────────────────────┘
                                   │ gRPC
                                   ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                    NETRUNNER SERVER (server/network.go)                      │
│                                                                              │
│  createConfig() function:                                                    │
│                                                                              │
│  switch networkID {                                                          │
│  case MainnetID:                                                             │
│      cfg = local.NewCanonicalMainnetConfig(execPath, numNodes)              │
│      // Uses genesis/configs.GetCanonicalGenesisBytes(1)                    │
│  case TestnetID:                                                             │
│      cfg = local.NewCanonicalTestnetConfig(execPath, numNodes)              │
│      // Uses genesis/configs.GetCanonicalGenesisBytes(2)                    │
│  default:                                                                    │
│      cfg = local.NewDefaultConfig(execPath)                                 │
│      // Uses embedded network/default/genesis.json                          │
│  }                                                                           │
└──────────────────────────────────┬──────────────────────────────────────────┘
                                   │
                                   ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│               NETRUNNER LOCAL (local/genesis_config.go)                      │
│                                                                              │
│  newCanonicalConfig() function:                                              │
│                                                                              │
│  1. genesisBytes := configs.GetCanonicalGenesisBytes(networkID)             │
│     // Returns RAW BYTES - no re-serialization!                             │
│                                                                              │
│  2. Load validator keys from genesis/configs/keys/                          │
│                                                                              │
│  3. Build network.Config{                                                    │
│         Genesis: string(genesisBytes),  <-- Genesis as string               │
│         NodeConfigs: [...],             <-- Per-node configs                │
│     }                                                                        │
└──────────────────────────────────┬──────────────────────────────────────────┘
                                   │
                                   ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                   NETRUNNER LOCAL (local/network.go)                         │
│                                                                              │
│  NewNetwork() function:                                                      │
│                                                                              │
│  1. Create node directories:                                                 │
│     ~/.lux/runs/{network}/run_{timestamp}/node{i}/                          │
│                                                                              │
│  2. Write genesis.json to each node:                                         │
│     node{i}/genesis.json  <-- Same genesis for all nodes                    │
│                                                                              │
│  3. Write node config:                                                       │
│     node{i}/config.json                                                      │
│                                                                              │
│  4. Write chain configs:                                                     │
│     node{i}/chainConfigs/C/config.json                                      │
│                                                                              │
│  5. Start luxd processes with:                                              │
│     --genesis-file={node}/genesis.json                                      │
│     --config-file={node}/config.json                                        │
│     --chain-config-dir={node}/chainConfigs                                  │
└──────────────────────────────────┬──────────────────────────────────────────┘
                                   │
                                   ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                          LUXD NODE                                           │
│                                                                              │
│  1. Load genesis.json from --genesis-file                                   │
│                                                                              │
│  2. Parse main genesis:                                                      │
│     - Extract networkID, allocations, initialStakers                        │
│     - Extract cChainGenesis as JSON string                                  │
│                                                                              │
│  3. Initialize chains:                                                       │
│     - P-Chain: Uses allocations, initialStakers                             │
│     - X-Chain: Uses xChainGenesis (if present)                              │
│     - C-Chain: Passes cChainGenesis string to EVM plugin                    │
└──────────────────────────────────┬──────────────────────────────────────────┘
                                   │
                                   ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                         EVM PLUGIN (coreth/evm)                              │
│                                                                              │
│  1. Receive cChainGenesis JSON string from luxd                             │
│                                                                              │
│  2. Parse into Genesis struct (core/genesis.go):                            │
│     type Genesis struct {                                                    │
│         Config     *params.ChainConfig                                       │
│         Nonce      uint64                                                    │
│         Timestamp  uint64                                                    │
│         ExtraData  []byte                                                    │
│         GasLimit   uint64                                                    │
│         Difficulty *big.Int                                                  │
│         Alloc      GenesisAlloc                                              │
│         // NOTE: NO stateRoot or genesisHash fields!                        │
│     }                                                                        │
│                                                                              │
│  3. COMPUTE stateRoot from Alloc:                                           │
│     - Create state trie                                                      │
│     - Apply all allocations (balances, code, storage)                       │
│     - Compute Merkle root = stateRoot                                       │
│                                                                              │
│  4. COMPUTE genesisHash:                                                    │
│     - Build genesis block header with computed stateRoot                    │
│     - Hash header = genesisHash                                             │
│                                                                              │
│  5. Write genesis block to database                                         │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Where stateRoot/genesisHash Are Lost (They Aren't!)

### 4.1 The Misconception

`stateRoot` and `genesisHash` are **NOT stored** in genesis.json because they are **computed values**, not input values.

### 4.2 How They Work

```
                    INPUT                           COMPUTED
           ┌──────────────────┐            ┌──────────────────────┐
           │   genesis.json   │            │   Genesis Block      │
           │                  │            │                      │
           │  - config        │            │  - stateRoot         │
           │  - alloc         │──────────▶ │  - genesisHash       │
           │  - timestamp     │  COMPUTE   │  - header fields     │
           │  - gasLimit      │            │                      │
           │  - extraData     │            │                      │
           └──────────────────┘            └──────────────────────┘
```

### 4.3 When genesisHash Mismatch Occurs

**Problem**: If you:
1. Re-serialize genesis.json (field order changes)
2. Modify any alloc entry (balances, code, storage)
3. Change any header field (timestamp, gasLimit, extraData)

**Result**: Different stateRoot → Different genesisHash → "db contains invalid genesis hash" error

### 4.4 Solution: Genesis Hash Override (EVM Feature)

The EVM plugin at `/Users/z/work/lux/evm/core/genesis.go` supports override fields:

```go
type Genesis struct {
    // ... standard fields ...
    
    // Override fields for block import compatibility
    GenesisHash *common.Hash `json:"genesisHash,omitempty"`
    StateRoot   *common.Hash `json:"stateRoot,omitempty"`
}
```

When these are set:
- `toBlock()` uses `StateRoot` override (bypasses state computation)
- `Commit()` uses `GenesisHash` override (bypasses hash computation)

---

## 5. Admin API Configuration

### 5.1 How Admin API Is Enabled

**CLI sets in globalNodeConfig**:
```go
// cmd/networkcmd/start.go
globalNodeConfig := fmt.Sprintf(`{
    "network-id": %d,
    "db-type": "badgerdb",
    "api-admin-enabled": true,  // <-- HERE
    "track-chains": %q
}`, cfg.networkID, trackChainsValue)
```

### 5.2 How It Flows to Nodes

1. CLI creates `globalNodeConfig` JSON string
2. gRPC sends to netrunner via `client.WithGlobalNodeConfig()`
3. Netrunner writes to `node{i}/config.json`
4. luxd reads config and enables admin API

### 5.3 Verification

```bash
# Check if admin API is enabled
curl -X POST http://127.0.0.1:9650/ext/admin \
  -H 'Content-Type: application/json' \
  -d '{"jsonrpc":"2.0","method":"admin.getChainAliases","params":{"chain":"C"},"id":1}'
```

---

## 6. admin_importChain Support

### 6.1 CLI Implementation

**Location**: `/Users/z/work/lux/cli/cmd/chaincmd/import.go`

```go
func callAdminImportChain(rpcEndpoint, filePath string) (bool, error) {
    req := map[string]interface{}{
        "jsonrpc": "2.0",
        "method":  "admin_importChain",
        "params":  []string{filePath},
        "id":      1,
    }
    // POST to RPC endpoint
}
```

### 6.2 Usage

```bash
# Import blocks to C-Chain
lux chain import --rlp /path/to/blocks.rlp --rpc http://127.0.0.1:9650/ext/bc/C/rpc
```

### 6.3 Known Issue: Import Persistence

**Problem**: Blocks imported via `admin_importChain` do not persist across network restarts.

**Root Cause**: 
- Blocks are written to BadgerDB
- But "last accepted block" pointer is NOT updated in consensus layer
- On restart, chain initializes from genesis

**Status**: Investigating fix in coreth/subnet-evm.

---

## 7. Chain Deploy Flow

### 7.1 Command

```bash
lux chain deploy <chainName> --mainnet|--testnet
```

### 7.2 Flow

```
┌────────────────────────────────────────────────────────────────┐
│                    CLI (cmd/chaincmd/deploy.go)                │
│                                                                │
│  1. Load genesis from ~/.lux/chains/{name}/genesis.json       │
│  2. Load sidecar from ~/.lux/chains/{name}/sidecar.json       │
│  3. Validate EVM genesis format                                │
│  4. Call DeployToLocalNetwork() via gRPC                       │
└────────────────────────────────┬───────────────────────────────┘
                                 │ gRPC
                                 ▼
┌────────────────────────────────────────────────────────────────┐
│                    NETRUNNER                                    │
│                                                                │
│  1. Receive subnet creation request                            │
│  2. Create subnet on P-Chain                                   │
│  3. Create blockchain with provided genesis                    │
│  4. Track blockchain on all validators                         │
│  5. Write chain config to nodes                                │
└────────────────────────────────┬───────────────────────────────┘
                                 │
                                 ▼
┌────────────────────────────────────────────────────────────────┐
│                    LUXD NODES                                   │
│                                                                │
│  1. Receive blockchain creation from P-Chain                   │
│  2. Load EVM plugin for chain                                  │
│  3. Initialize chain with provided genesis                     │
│  4. Start processing blocks                                    │
└────────────────────────────────────────────────────────────────┘
```

---

## 8. File Reference

| Component | File | Purpose |
|-----------|------|---------|
| CLI | `cmd/networkcmd/start.go` | Network start command |
| CLI | `cmd/chaincmd/deploy.go` | Chain deploy command |
| CLI | `cmd/chaincmd/import.go` | Block import command |
| Netrunner | `server/network.go` | gRPC server, config creation |
| Netrunner | `local/network.go` | Local network management |
| Netrunner | `local/genesis_config.go` | Genesis config factories |
| Netrunner | `network/genesis.go` | Genesis loading/parsing |
| Netrunner | `network/default/genesis.json` | Default genesis template |
| Genesis | `configs/configs.go` | Canonical genesis loader |
| Genesis | `configs/mainnet/*.json` | Mainnet genesis files |
| EVM | `core/genesis.go` | Genesis struct, state computation |

---

## 9. Summary

1. **Genesis is stored as JSON** with cChainGenesis embedded as a string
2. **stateRoot/genesisHash are NOT in genesis.json** - they are computed by EVM
3. **Admin API is enabled** via `api-admin-enabled: true` in node config
4. **admin_importChain exists** in CLI at `cmd/chaincmd/import.go`
5. **Genesis hash mismatch** occurs when genesis is re-serialized or modified
6. **Solution**: Use genesis hash override fields in EVM genesis

---

*Document generated from investigation of CLI and Netrunner codebases.*
