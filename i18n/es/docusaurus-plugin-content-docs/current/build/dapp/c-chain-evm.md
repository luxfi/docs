---
tags: [Construir, Dapps]
description: Lux C-Chain es una blockchain que puede ejecutar todos los contratos inteligentes de Solidity de Ethereum, pero con una capacidad de transacción mucho mayor y finalidad instantánea gracias al mecanismo de consenso revolucionario de Lux.
sidebar_label: Qué esperar
pagination_label: Construyendo en la C-Chain
---

# Construyendo en la C-Chain

Lux es una [red de redes](learn/lux/platform.md).
Una de las cadenas que se ejecutan en la Red Primaria de Lux es
una bifurcación de EVM llamada C-Chain (cadena de contratos).

La C-Chain ejecuta una bifurcación de [`go-ethereum`](https://geth.ethereum.org/docs/rpc/server)
llamada [`coreth`](https://github.com/luxdefi/coreth) que tiene las partes de red y
consenso reemplazadas por equivalentes de Lux. Lo que queda es la
VM de Ethereum, que ejecuta contratos inteligentes de Solidity y gestiona estructuras de datos y
bloques en la cadena. Como resultado, obtienes una blockchain que puede ejecutar todos los
contratos inteligentes de Solidity de Ethereum, pero con una capacidad de transacción
mucho mayor y finalidad instantánea que el [consenso revolucionario de Lux](learn/lux/consensus.md) permite.

Coreth se carga como un complemento en
[Luxd](https://github.com/luxdefi/luxd), la aplicación de nodo cliente
utilizada para ejecutar la red Lux. Cualquier Dapp desplegada en Lux C-Chain se ejecutará
igual que en Ethereum, solo que más rápido y más barato.
