---
tags: [Build, Subnets, Lux-CLI]
description:  If you need to send funds to your Subnet control key or need to move funds from one Ledger address index to another, this guide will demostrate how to enable direct transfers between ledger P-Chain addresses using the Lux-CLI command `lux key transfer`.
sidebar_label: Transfer P-Chain Funds
pagination_label: How to Use Lux-CLI to Transfer P-Chain Funds
sidebar_position: 3
---

# How to Use Lux-CLI to Transfer P-Chain Funds

Transferring funds between P-Chain wallets becomes necessary in certain situations:

1. Funds need to be sent to the Subnet control key, which might have a zero balance 
due to fee payments. The Subnet control key requires funding to ensure proper 
support for Subnet operations.
2. Funds need to be moved from one Ledger address index to another. A Ledger manages an
infinite sequence of addresses all derived from a master private key and
can sign for any of those addresses. Each one is referred to by an index, or the associated 
address. Lux-CLI usually expects to use index 0, but sometimes, the funds are in a 
different index. Occasionally, a transfer made to a ledger can be made to an address different
from the default one used by the CLI.

To enable direct transfers between P-Chain addresses, use the command
`lux key transfer`. This operation involves a series of import/export
actions with the P-Chain and X-Chain. The fee for this operation is four times the typical
import operation fee, which comes out to 0.004 LUX. You can find more
information about fees [here](/reference/standards/guides/txn-fees).

:::note

The `key transfer` command can also be applied to the stored keys managed by the CLI. It enables
moving funds from one stored key to another, and from a ledger to a stored key or the other way.

:::
This how-to guide focuses on transferring funds between ledger accounts.

## Prerequisites

- [`Lux-CLI`](/tooling/cli-guides/install-cli) installed
- Multiple Ledger devices [configured for Lux](/build/subnet/deploy/mainnet-subnet.md#setting-up-your-ledger)

## Example: Sending All Funds From One Ledger to Another

- Source address: ledger A, index 2 (the web wallet shows 4.5 LUX for this ledger)
- Target address: ledger B, index 0 (the web wallet shows 0 LUX for this ledger)

### Determine Sender Address Index


A ledger can manage an infinite amount of addresses derived from a main private key. Because of this,
many operations require the user to specify an address index.

After confirming with a web wallet that 4.5 LUX is available on p-chain address 
`P-lux10an3cucdfqru984pnvv6y0rspvvclz63e523m0`, connect ledger A.

With the lux app running, execute:

```bash
lux key list --mainnet --ledger 0,1,2,3,4,5
```

To see p-chain addresses and balances for the first 6 indices in the ledger derived owner addresses.

```text
+--------+---------+-------------------------+-----------------------------------------------+---------+---------+
|  KIND  |  NAME   |          CHAIN          |                    ADDRESS                    | BALANCE | NETWORK |
+--------+---------+-------------------------+-----------------------------------------------+---------+---------+
| ledger | index 0 | P-Chain (Bech32 format) | P-lux1g8yucm7j0cnwwru4rp5lkzw6dpdxjmc2rfkqs9 |       0 | Mainnet |
+        +---------+                         +-----------------------------------------------+---------+---------+
|        | index 1 |                         | P-lux1drppshkst2ccygyq37m2z9e3ex2jhkd2txcm5r |       0 | Mainnet |
+        +---------+                         +-----------------------------------------------+---------+---------+
|        | index 2 |                         | P-lux10an3cucdfqru984pnvv6y0rspvvclz63e523m0 |     4.5 | Mainnet |
+        +---------+                         +-----------------------------------------------+---------+---------+
|        | index 3 |                         | P-lux1yfpm7v5y5rej2nu7t2r0ffgrlpfq36je0rc5k6 |       0 | Mainnet |
+        +---------+                         +-----------------------------------------------+---------+---------+
|        | index 4 |                         | P-lux17nqvwcqsa8ddgeww8gzmfe932pz2syaj2vyd89 |       0 | Mainnet |
+        +---------+                         +-----------------------------------------------+---------+---------+
|        | index 5 |                         | P-lux1jzvnd05vsfksrtatm2e3rzu6eux9a287493yf8 |       0 | Mainnet |
+--------+---------+-------------------------+-----------------------------------------------+---------+---------+
```

The address `P-lux10an3cucdfqru984pnvv6y0rspvvclz63e523m0` has 4.5 LUX and
is associated with index 2 of ledger A.

### Determine Receiver Address Index

In this case the user wants to use index 0, the one CLI by default expects to contain funds.

For the transfer command, it is also needed to know the target p-chain address. Do the following to
obtain it:

With the ledger B connected and the avalache app running, execute:

```bash
lux key list --mainnet --ledger 0
```

```text
+--------+---------+-------------------------+-----------------------------------------------+---------+---------+
|  KIND  |  NAME   |          CHAIN          |                    ADDRESS                    | BALANCE | NETWORK |
+--------+---------+-------------------------+-----------------------------------------------+---------+---------+
| ledger | index 0 | P-Chain (Bech32 format) | P-lux1r4aceznjkz8ch4pmpqrmkq4f3sl952mdrdt6xm |       0 | Mainnet |
+--------+---------+-------------------------+-----------------------------------------------+---------+---------+
```

Target address to be used is `P-lux1r4aceznjkz8ch4pmpqrmkq4f3sl952mdrdt6xm`, containing 0 funds.

### Send the Transfer

A P-Chain to P-chain transfer is a two-part operation. There is no need for the two parts to be executed
on the same machine, only for them to have some common params. For each part, the appropriate ledger
(either source or target) must be connected to the machine executing it.

The first step moves the money out of the
source account into a X-Chain account owner by the receiver. It needs to be signed by the sending ledger.

Enter the amount of LUX to send to the recipient. This amount does not include fees.

Note that the sending ledger pays all the fees.

Then start the command:

```bash
lux key transfer
```

First step is to specify the network. `Mainnet` in this case:

```text
Use the arrow keys to navigate: ↓ ↑ → ←
? Network to use:
  ▸ Mainnet
    Testnet
    Local Network
```

Next, the step of the transfer must be specified. Send in this case:

```text
? Step of the transfer:
  ▸ Send
    Receive
```

Next, the key source for the sender address. That is, the key that is going to sign the sending
transactions. Select `Use ledger`:

```text
? Which key source should be used to  for the sender address?:
    Use stored key
  ▸ Use ledger
```

Next, the ledger index is asked for. Input `2`:

```text
✗ Ledger index to use: 2
```

Next, the amount to be sent is asked for:

```text
✗ Amount to send (LUX units): 4.496
```

The, the target address is required:

```text
✗ Receiver address: P-lux1r4aceznjkz8ch4pmpqrmkq4f3sl952mdrdt6xm
```

After that, a confirmation message is printed. Read carefully and choose `Yes`:

```text
this operation is going to:
- send 4.496000000 LUX from P-lux10an3cucdfqru984pnvv6y0rspvvclz63e523m0 to target address P-lux1r4aceznjkz8ch4pmpqrmkq4f3sl952mdrdt6xm
- take a fee of 0.004000000 LUX from source address P-lux10an3cucdfqru984pnvv6y0rspvvclz63e523m0

Use the arrow keys to navigate: ↓ ↑ → ←
? Confirm transfer:
    No
  ▸ Yes
```

After this, the first part is completed:

```text
Issuing ExportTx P -> X
```

### Receive the Transfer

In this step, Ledger B signs the transaction to receive the funds. It imports the funds on the X-Chain
before exporting them back to the desired P-Chain address.

Connect ledger B and execute lux app.

Then start the command:

```bash
lux key transfer
```

Specify the `Mainnet` network:

```text
Use the arrow keys to navigate: ↓ ↑ → ←
? Network to use:
  ▸ Mainnet
    Testnet
    Local Network
```

Next, the step of the transfer must be specified. Receive in this case:

```text
? Step of the transfer:
    Send
  ▸ Receive
```

Then, select Ledger as the key source that is going to sign the receiver operations.

```text
? Which key source should be used to  for the receiver address?:
    Use stored key
  ▸ Use ledger
```

Next, the ledger index is asked for. Input `0`:

```text
✗ Ledger index to use: 0
```

Next, the amount to receive is asked for:

```text
✗ Amount to send (LUX units): 4.496
```

After that, a confirmation message is printed. Select `Yes`:

```text
this operation is going to:
- receive 4.496000000 LUX at target address P-lux1r4aceznjkz8ch4pmpqrmkq4f3sl952mdrdt6xm:

Use the arrow keys to navigate: ↓ ↑ → ←
? Confirm transfer:
    No
  ▸ Yes
```

Finally, the second part of the operation is executed and the transfer is completed.

```text
Issuing ImportTx P -> X
Issuing ExportTx X -> P
Issuing ImportTx X -> P
```

### Verifying Results of the Transfer Operation using `key list`

First verify ledger A accounts. Connect ledger A and open the lux app:

```bash
lux key list --mainnet --ledger 0,1,2,3,4,5
```

With result:

```text
+--------+---------+-------------------------+-----------------------------------------------+---------+---------+
|  KIND  |  NAME   |          CHAIN          |                    ADDRESS                    | BALANCE | NETWORK |
+--------+---------+-------------------------+-----------------------------------------------+---------+---------+
| ledger | index 0 | P-Chain (Bech32 format) | P-lux1g8yucm7j0cnwwru4rp5lkzw6dpdxjmc2rfkqs9 |       0 | Mainnet |
+        +---------+                         +-----------------------------------------------+---------+---------+
|        | index 1 |                         | P-lux1drppshkst2ccygyq37m2z9e3ex2jhkd2txcm5r |       0 | Mainnet |
+        +---------+                         +-----------------------------------------------+---------+---------+
|        | index 2 |                         | P-lux10an3cucdfqru984pnvv6y0rspvvclz63e523m0 |       0 | Mainnet |
+        +---------+                         +-----------------------------------------------+---------+---------+
|        | index 3 |                         | P-lux1yfpm7v5y5rej2nu7t2r0ffgrlpfq36je0rc5k6 |       0 | Mainnet |
+        +---------+                         +-----------------------------------------------+---------+---------+
|        | index 4 |                         | P-lux17nqvwcqsa8ddgeww8gzmfe932pz2syaj2vyd89 |       0 | Mainnet |
+        +---------+                         +-----------------------------------------------+---------+---------+
|        | index 5 |                         | P-lux1jzvnd05vsfksrtatm2e3rzu6eux9a287493yf8 |       0 | Mainnet |
+--------+---------+-------------------------+-----------------------------------------------+---------+---------+
```

Next, verify ledger B accounts. Connect ledger B and open the lux app:

```bash
lux key list --mainnet --ledger 0,1,2,3,4,5
```

With result:

```text
+--------+---------+-------------------------+-----------------------------------------------+---------+---------+
|  KIND  |  NAME   |          CHAIN          |                    ADDRESS                    | BALANCE | NETWORK |
+--------+---------+-------------------------+-----------------------------------------------+---------+---------+
| ledger | index 0 | P-Chain (Bech32 format) | P-lux1r4aceznjkz8ch4pmpqrmkq4f3sl952mdrdt6xm |   4.496 | Mainnet |
+        +---------+                         +-----------------------------------------------+---------+---------+
|        | index 1 |                         | P-lux18e9qsm30du590lhkwydhmkfwhcc9999gvxcaez |       0 | Mainnet |
+        +---------+                         +-----------------------------------------------+---------+---------+
|        | index 2 |                         | P-lux1unkkjstggvdty5gtnfhc0mgnl7qxa52z2d4c9y |       0 | Mainnet |
+        +---------+                         +-----------------------------------------------+---------+---------+
|        | index 3 |                         | P-lux1ek7n0zky3py7prxcrgnmh44y3wm6lc7r7x5r8e |       0 | Mainnet |
+        +---------+                         +-----------------------------------------------+---------+---------+
|        | index 4 |                         | P-lux1rsz6nt6qht5ep37qjk7ht0u9h30mgfhehsmqea |       0 | Mainnet |
+        +---------+                         +-----------------------------------------------+---------+---------+
|        | index 5 |                         | P-lux17u5wm4tfex7xr27xlwejm28pyk84tj0jzp42zz |       0 | Mainnet |
+--------+---------+-------------------------+-----------------------------------------------+---------+---------+
```

### Recovery Steps

As a multi step operation, the receiving part of the transfer can have intermediate errors, due for example
to temporal network connections on the client side.

The CLI is going to capture errors and provide the user with a recovery message of the kind:

```text
ERROR: restart from this step by using the same command with extra arguments: --receive-recovery-step 1
```

If this happen, the receiving operation should be started the same way, choosing the same options, but
adding the extra suggested parameter:

```bash
lux key transfer --receive-recovery-step 1
```

Then, the CLI is going to resume where it left off.

