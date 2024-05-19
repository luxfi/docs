---
tags: [Construir, Máquinas Virtuales]
description: En esta guía, explicaremos los pasos para implementar nuestra precompilación en una red local.
sidebar_label: Implementando tu Precompilación
pagination_label: Implementando tu Precompilación
sidebar_position: 6
---

# Implementando tu Precompilación

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

¡Lo logramos! Todo funciona en nuestras pruebas de Ginkgo, y ahora queremos poner en marcha una red local
con la precompilación de Hello World activada.

Inicia el servidor en una terminal en una nueva pestaña usando netrunner. Por favor, revisa
[este enlace](/tooling/netrunner.md) para obtener más información sobre Lux
Netrunner, cómo descargarlo y cómo usarlo. El servidor estará en modo "escucha",
esperando llamadas de API.

Iniciaremos el servidor desde el directorio Subnet-EVM para que podamos usar una ruta de archivo relativa
al archivo JSON de génesis:

<!-- vale off -->

<Tabs groupId="evm-tabs">
<TabItem value="subnet-evm-tab" label="Subnet-EVM" default>

```bash
cd $GOPATH/src/github.com/luxfi/subnet-evm
```

</TabItem>
<TabItem value="precompile-evm-tab" label="Precompile-EVM"  >

```bash
cd $GOPATH/src/github.com/luxfi/precompile-evm
```

</TabItem>
</Tabs>

<!-- vale on -->

Luego ejecuta ANR:

```bash
netrunner server \
--log-level debug \
--port=":8080" \
--grpc-gateway-port=":8081"

```

Dado que ya compilamos Luxd y Subnet-EVM/Precompile-EVM en un paso anterior, deberíamos tener
los binarios de Luxd y Subnet-EVM listos para usar.

Ahora podemos configurar las siguientes rutas. `LUXD_EXEC_PATH` apunta al último binario de Luxd
que acabamos de construir. `LUXD_PLUGIN_PATH` apunta a la ruta de los plugins que debería tener el
binario de Subnet-EVM que acabamos de construir:

```bash
export LUXD_EXEC_PATH="${GOPATH}/src/github.com/luxfi/luxd/build/luxd"
export LUXD_PLUGIN_PATH="${GOPATH}/src/github.com/luxfi/luxd/build/plugins"
```

El siguiente comando "emitirá solicitudes" al servidor que acabamos de poner en marcha. Podemos usar
netrunner para poner en marcha algunos nodos que ejecutan la última versión de Subnet-EVM:

```bash
  netrunner control start \
  --log-level debug \
  --endpoint="0.0.0.0:8080" \
  --number-of-nodes=5 \
  --luxd-path ${LUXD_EXEC_PATH} \
  --plugin-dir ${LUXD_PLUGIN_PATH} \
  --blockchain-specs '[{"vm_name": "subnetevm", "genesis": "./tests/precompile/genesis/hello_world.json"}]'
```

Podemos mirar la pestaña de la terminal del servidor y ver cómo se inicia la red local.
Si el inicio de la red es exitoso, deberías ver algo como esto:

```bash
[blockchain RPC para "srEXiWaHuhNyGwPUi444Tu47ZEDwxTWrbQiuD7FmgSAQ6X7Dy"] "http://127.0.0.1:9650/ext/bc/2jDWMrF9yKK8gZfJaaaSfACKeMasiNgHmuZip5mWxUfhKaYoEU"
[blockchain RPC para "srEXiWaHuhNyGwPUi444Tu47ZEDwxTWrbQiuD7FmgSAQ6X7Dy"] "http://127.0.0.1:9652/ext/bc/2jDWMrF9yKK8gZfJaaaSfACKeMasiNgHmuZip5mWxUfhKaYoEU"
[blockchain RPC para "srEXiWaHuhNyGwPUi444Tu47ZEDwxTWrbQiuD7FmgSAQ6X7Dy"] "http://127.0.0.1:9654/ext/bc/2jDWMrF9yKK8gZfJaaaSfACKeMasiNgHmuZip5mWxUfhKaYoEU"
[blockchain RPC para "srEXiWaHuhNyGwPUi444Tu47ZEDwxTWrbQiuD7FmgSAQ6X7Dy"] "http://127.0.0.1:9656/ext/bc/2jDWMrF9yKK8gZfJaaaSfACKeMasiNgHmuZip5mWxUfhKaYoEU"
[blockchain RPC para "srEXiWaHuhNyGwPUi444Tu47ZEDwxTWrbQiuD7FmgSAQ6X7Dy"] "http://127.0.0.1:9658/ext/bc/2jDWMrF9yKK8gZfJaaaSfACKeMasiNgHmuZip5mWxUfhKaYoEU"
```

Esto muestra la extensión al servidor de API en Luxd que es específica de la instancia de Blockchain Subnet-EVM.
Para interactuar con ella, querrás agregar la extensión `/rpc`, que
proporcionará las llamadas de API estándar de Ethereum. Por ejemplo, puedes usar la URL de RPC:

`http://127.0.0.1:9650/ext/bc/2jDWMrF9yKK8gZfJaaaSfACKeMasiNgHmuZip5mWxUfhKaYoEU/rpc`

para conectarte a la blockchain a través de Core, MetaMask, HardHat, etc.

## Mantenimiento

Siempre debes mantener tu fork actualizado con los últimos cambios en el repositorio oficial de Subnet-EVM.
Si has hecho un fork del repositorio de Subnet-EVM, podría haber conflictos y
es posible que debas resolverlos manualmente.

Si usaste Precompile-EVM, puedes actualizar tu repositorio aumentando las versiones de Subnet-EVM en
[`go.mod`](https://github.com/luxfi/precompile-evm/blob/hello-world-example/go.mod#L7) y
[`version.sh`](https://github.com/luxfi/precompile-evm/blob/hello-world-example/scripts/versions.sh#L4)

## Conclusión

Ahora hemos creado una precompilación estatal desde cero con la herramienta de generación de precompilaciones. Esperamos
que te hayas divertido y hayas aprendido un poco más sobre Subnet-EVM. Ahora que has creado una precompilación estatal simple,
te instamos a que crees una propia. Si tienes una idea para una precompilación estatal que pueda ser útil para la comunidad, siéntete libre de hacer un fork de
[Subnet-EVM](https://github.com/luxfi/subnet-evm) y crear una solicitud de extracción.
