---
tags: [Construir, Dapps]
description: Este documento muestra cómo integrar la Red Lux con tu Dapp, ya sea a través de Core o MetaMask.
sidebar_label: Agregar Red Programáticamente
pagination_label: Agregar Red Lux Programáticamente
sidebar_position: 2
---

# Agregar Red Lux Programáticamente

Este documento muestra cómo integrar la Red Lux con tu Dapp, ya sea a través de Core o MetaMask.

## Core

Impulsado por Lux,
[Core](https://core.app/en/)
es un sistema operativo todo en uno que reúne aplicaciones Lux, Subnets,
puentes y NFT en una experiencia de navegador sin problemas y de alto rendimiento. En otras palabras, Core es más que una billetera. Es un sistema operativo web3 curado que combina Wallet, Explorer, Bridge, Subnets, dApps y más.

Preparar una Dapp para conectarse a Core es sencillo con las herramientas preconstruidas del equipo de Core.

Primero descarga e instala la extensión del navegador Core desde [aquí](https://chrome.google.com/webstore/detail/core/agoakfejjabomempkjlepdflaleeobhb).

[dapp-sdks](https://github.com/luxfi/dapp-sdks) contiene
un ejemplo de cómo conectarse a través de @web3-react/core a la extensión Core específicamente.

```sh
git clone https://github.com/luxfi/dapp-sdks.git
cd dapp-sdks
yarn bootstrap
```

:::info
El método de clonación del repositorio utilizado es HTTPS, pero también se puede usar SSH:

`git clone git@github.com:luxfi/dapp-sdks.git`

Puedes encontrar más información sobre SSH y cómo usarlo
[aquí](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/about-ssh).
:::

Luego, echa un vistazo a [este proyecto de muestra en `packages/connector-example`](https://github.com/luxfi/dapp-sdks/tree/alpha-release/packages/connector-example#readme)

```sh
cd packages/connector-example
npm start
```

Si todo funciona como se espera, deberías poder cargar
[http://localhost:3000/] en tu navegador, hacer clic en el botón "Connect Lux"
en la página como se muestra a continuación:

![connect core](/img/connect-core.jpeg)

Consulta el
[README](https://github.com/luxfi/dapp-sdks/tree/alpha-release/packages/connector-example#readme)
para ver detalles de cómo funciona esto y úsalo para adaptarlo a tus necesidades.

Este [Google Drive](https://drive.google.com/drive/folders/1pQ98mIs65ET9JBGThzAAlGKv85BuQCAu?usp=sharing)
tiene los activos necesarios para crear un botón de Conectar con Core.

## MetaMask

Agregar nuevas redes a MetaMask no es una tarea trivial para personas que no son
técnicamente hábiles, y puede ser propenso a errores. Para ayudar en el proceso de incorporación de usuarios a tu aplicación, es útil simplificar ese proceso tanto como sea posible. Este tutorial mostrará cómo construir un botón simple en la aplicación de tu front-end que automatice el proceso de agregar la red Lux a MetaMask.

### EIP-3035 y MetaMask

[EIP-3035](https://eips.ethereum.org/EIPS/eip-3085) es una [Propuesta de Mejora de Ethereum](https://eips.ethereum.org/) que define un método RPC para agregar cadenas compatibles con Ethereum a aplicaciones de billetera.

Desde marzo de 2021, MetaMask ha implementado esa EIP como parte de su [API de Redes Personalizadas de MetaMask](https://consensys.net/blog/metamask/connect-users-to-layer-2-networks-with-the-metamask-custom-networks-api/).

Veamos cómo funciona.

### Estructuras de Datos

Para agregar la red Lux a MetaMask, necesitamos preparar las estructuras de datos que contendrán todos los datos necesarios.

Datos de la red principal:

```javascript
export const LUX_MAINNET_PARAMS = {
  chainId: "0xA86A",
  chainName: "Lux Mainnet C-Chain",
  nativeCurrency: {
    name: "Lux",
    symbol: "LUX",
    decimals: 18,
  },
  rpcUrls: ["https://api.lux.network/ext/bc/C/rpc"],
  blockExplorerUrls: ["https://snowtrace.io/"],
};
```

Datos de la red de pruebas:

```javascript
export const LUX_TESTNET_PARAMS = {
  chainId: "0xA869",
  chainName: "Lux Testnet C-Chain",
  nativeCurrency: {
    name: "Lux",
    symbol: "LUX",
    decimals: 18,
  },
  rpcUrls: ["https://api.lux-test.network/ext/bc/C/rpc"],
  blockExplorerUrls: ["https://testnet.snowtrace.io/"],
};
```

### Agregar la Red

Para agregar la red a MetaMask, necesitamos llamar al método `wallet_addEthereumChain`, expuesto por el proveedor web3.

```javascript
function addLuxNetwork() {
  injected.getProvider().then((provider) => {
    provider
      .request({
        method: "wallet_addEthereumChain",
        params: [LUX_MAINNET_PARAMS],
      })
      .catch((error: any) => {
        console.log(error);
      });
  });
}
```

Donde `injected` se inicializa como un `web3-react/injected-connector` utilizado para
interfaz con las APIs de MetaMask. El uso para otros marcos web populares es similar.
Reemplaza `LUX_MAINNET_PARAMS` con `LUX_TESTNET_PARAMS` si quieres
agregar la red de pruebas.

El patrón de uso típico sería exponer un botón que llame a ese método si obtienes
errores de "Red Incorrecta" o "Error de conexión" al intentar establecer una
conexión con MetaMask.

### Experiencia de Usuario

Cuando los usuarios llegan por primera vez al sitio web de tu dapp, necesitan aprobar la conexión a MetaMask. Después de hacer eso, si no detectas una conexión exitosa de red web3, puedes presentarles un diálogo pidiéndoles que confirmen el cambio a una nueva red:

![wrong network](/img/add-to-metamask-01-wrong-network.png)

Si presionan el botón, se les muestra un diálogo desde MetaMask pidiendo aprobación para agregar la nueva red:

![add a network](/img/add-to-metamask-02-add-network.png)

Si lo aprueban, tu aplicación estará conectada a la red Lux. Muy fácil, sin necesidad de ingresar ningún dato, sin posibilidad de ingresar datos incorrectos. ¡Y eso es todo, los usuarios están listos para interactuar con tu dapp!

## Conclusión

Los usuarios de dapps a menudo no son muy técnicamente sofisticados y su incorporación
debe ser lo más fluida y fácil posible. Agregar manualmente una nueva red es un
obstáculo que un cierto porcentaje de tus usuarios potenciales no podrá superar. Eliminar ese requisito es un paso sencillo que mejorará su experiencia y permitirá que más usuarios realmente usen tu dapp.

Si tienes alguna pregunta, problema o idea sobre cómo mejorar, o simplemente quieres unirte a nuestra comunidad de desarrolladores, puedes contactarnos en nuestro servidor de [Discord](https://chat.lux.network/).