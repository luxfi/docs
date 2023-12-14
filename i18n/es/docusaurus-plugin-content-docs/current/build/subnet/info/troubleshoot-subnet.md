---
tags: [Construir, Subnets]
description: Una referencia para consejos para resolver problemas comunes al implementar Subnets en Lux.
sidebar_label: Solución de problemas
pagination_label: Solución de problemas en implementaciones de Subnets
sidebar_position: 2
---

# Solución de problemas en implementaciones de Subnets

Si tienes problemas para implementar tu Subnet, utiliza este documento para obtener consejos para resolver problemas comunes.

## Tiempo de implementación agotado

Durante una implementación local, es posible que tu red no se inicie. Tu error puede verse algo así:

```text
[~]$ lux subnet deploy mySubnet
✔ Red local
Implementando [mySubnet] en la red local
Controlador de backend iniciado, pid: 26388, salida en: /Users/user/.cli/runs/server_20221231_111605/cli-backend
VM listas.
Iniciando red...
..................................................................................
..................................................................................
......Error: no se pudo consultar la salud de la red: error de rpc: código = DeadlineExceeded desc = plazo de tiempo de contexto agotado
```

Lux-CLI solo admite la ejecución de una red Lux local a la vez. Si otras instancias de
LuxGo se están ejecutando simultáneamente, tu red Lux-CLI no se inicia.

Para probar este error, comienza apagando cualquier nodo Lux iniciado por Lux-CLI.

```shell
lux network clean --hard
```

A continuación, busca cualquier proceso de LuxGo persistente con:

```shell
ps aux | grep luxd
```

Si hay algún proceso en ejecución, debes detenerlos antes de poder lanzar tu VM con Lux-CLI.

:::warning

Si estás ejecutando un nodo validador en la misma máquina que estás usando Lux-CLI, **no** finalices ninguno
de estos procesos de LuxGo persistentes. Esto puede apagar tu validador y podría afectar
tu tiempo de actividad de validación.

:::

## Versión de RPC incompatible para VM personalizada

Si estás implementando localmente una VM personalizada, es posible que te encuentres con este mensaje de error.

```text
[~]$ lux subnet deploy mySubnet
✔ Red local
Implementando [mySubnet] en la red local
Controlador de backend iniciado, pid: 26388, salida en: /Users/user/.cli/runs/server_20221231_111605/cli-backend
VM listas.
Iniciando red...
.........
La cadena de bloques ha sido implementada. Espera hasta que la red lo reconozca...
..................................................................................
..................................................................................
......Error: no se pudo consultar la salud de la red: error de rpc: código = DeadlineExceeded desc = plazo de tiempo de contexto agotado
```

Este error tiene muchas posibles causas, pero una causa común suele ser **una
incompatibilidad de versión de protocolo RPC.**

LuxGo se comunica con las VM personalizadas a través de RPC utilizando [gRPC](https://grpc.io/). gRPC define una
especificación de protocolo compartida tanto por LuxGo como por la VM. **Ambos componentes deben estar ejecutándose
con la misma versión de RPC para que la implementación de la VM funcione.**

La versión de RPC de tu VM personalizada se establece por la versión de LuxGo que importas. Por defecto,
Lux-CLI crea redes Avalalanche locales que ejecutan la última versión de LuxGo.

### Ejemplo

Aquí tienes un ejemplo con números reales de la página de compatibilidad de LuxGo\_:

- Si la última versión de LuxGo es la versión v1.10.11, entonces Lux-CLI implementa una red con
  versión de RPC 28.
- Para que tu implementación sea exitosa, tu VM también debe tener la versión de RPC 28. Debido a que solo
  las versiones de LuxGo v1.10.9, v1.10.10 y v1.10.11 admiten la versión de RPC 28,
  tu VM **debe** importar una de esas versiones.

### Solución

Error: `RPCChainVM protocol version mismatch between LuxGo and Virtual Machine plugin`

Este error ocurre cuando la versión de protocolo RPCChainVM utilizada por las VM, como Subnet-EVM,
es incompatible con la versión de protocolo de LuxGo.

Si tu VM tiene una incompatibilidad de versión de RPC, tienes dos opciones:

1. Actualiza la versión de LuxGo que usas en tu VM. Este es el enfoque correcto a largo plazo.
2. Utiliza Lux-CLI para implementar una versión anterior de LuxGo utilizando la bandera
   `--luxd-version`. Tanto los comandos [`subnet deploy`](/tooling/cli.md#subnet-deploy)
   como [`network start`](/tooling/cli.md#network-start) admiten
   establecer explícitamente la versión de LuxGo.

Aunque es muy importante mantener tu versión de LuxGo actualizada,
esta solución alternativa te ayuda a evitar compilaciones rotas a corto plazo.

:::caution
Debes actualizar a la última versión de LuxGo cuando implementes públicamente en
Fuji Testnet o Lux Mainnet.
:::

### Más información

Se requiere una coincidencia de versiones similar en diferentes herramientas del ecosistema. Aquí tienes una tabla de compatibilidad
que muestra qué versión de RPCChainVM implementa las versiones más recientes de
LuxGo, Subnet-EVM, Precompile-EVM e HyperSDK.

| RPCChainVM | LuxGo              | Subnet-EVM          | Precompile-EVM      | HyperSDK |
| :--------: | :-------:                | :-------:           | :-------:           | :-------: |
| 26         | v1.10.1-v1.10.4          | v0.5.1-v0.5.2       | v0.1.0-v0.1.1       | v0.0.6-v0.0.9 |
| 27         | v1.10.5-v1.10.8          | v0.5.3              | v0.1.2              | v0.0.10-v0.0.12 |
| 28         | v1.10.9-v1.10.12         | v0.5.4-v0.5.6       | v0.1.3-v0.1.4       | v0.0.13-**v0.0.15 (última)** |
| 29         | v1.10.13-v1.10.14        | v0.5.7-v0.5.8       | v0.1.5              | -          |
| **30**     | v1.10.15-**v1.10.17 (última)**    | **v0.5.9 (última)** | **v0.1.6 (última)** | -          |

Puedes ver la compatibilidad completa de RPC desglosada por versión de lanzamiento para cada herramienta aquí:

[LuxGo](https://github.com/luxdefi/luxd/blob/master/version/compatibility.json).

[Subnet-EVM](https://github.com/luxdefi/subnet-evm/blob/master/compatibility.json).

[Precompile-EVM](https://github.com/luxdefi/precompile-evm/blob/main/compatibility.json).

:::note
Las actualizaciones de la versión de RPC de LuxGo **no** están vinculadas a su esquema de versión semántica. Las versiones menores de LuxGo
pueden incluir un aumento de versión de RPC que rompe la compatibilidad.
:::

## Solución para MacBook Air M1/M2: Error 'Bad CPU type in executable'

Cuando ejecutas `lux subnet deploy` a través de Lux-CLI, la terminal puede arrojar un error que
contiene lo siguiente:

```zsh
zsh: bad CPU type in executable:
/Users/user.name/Downloads/build/luxd
```

Esto se debe a que algunas Mac no tienen soporte para binarios x86. Ejecutar el siguiente comando debería solucionar
este problema:

`/usr/sbin/softwareupdate --install-rosetta`
