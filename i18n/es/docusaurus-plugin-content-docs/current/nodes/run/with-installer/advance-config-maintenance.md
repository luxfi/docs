---
tags: [Nodos]
description: En este tutorial, aprenderás sobre opciones avanzadas de configuración de nodos Lux y tareas de mantenimiento.
sidebar_label: Configuración y Mantenimiento del Nodo
sidebar_position: 3
---

# Configuración y Mantenimiento del Nodo

## Configuración Avanzada del Nodo

Sin argumentos adicionales, el script instala el nodo en una configuración más común.
Pero el script también habilita varias opciones avanzadas para ser configuradas,
a través de los mensajes en la línea de comandos. A continuación se muestra una lista de opciones avanzadas
y su uso:

- `admin` - se habilitará la [API de Administración](/reference/luxd/admin-api.md)
- `archival` - desactiva la poda de la base de datos y preserva el historial completo de transacciones
- `state-sync` - si se usa `on`, se utiliza state-sync para la C-Chain, si se usa `off`, se
  utiliza la reproducción regular de transacciones para el arranque; state-sync es mucho más rápido, pero
  no tiene datos históricos
- `db-dir` - se utiliza para proporcionar la ruta completa a la ubicación donde se almacenará la base de datos
- `fuji` - el nodo se conectará a la red de prueba Fuji en lugar de la Mainnet
- `index` - se habilitará la [API de Índice](/reference/luxd/index-api.md)
- `ip` - utiliza los argumentos `dynamic`, `static`, o ingresa una IP deseada directamente para ser
  utilizada como la IP pública que el nodo anunciará a la red
- `rpc` - utiliza los argumentos `any` o `local` para seleccionar cualquier interfaz de red o la interfaz de red local
  que se utilizará para escuchar llamadas RPC
- `version` - instala una versión específica del nodo, en lugar de la última. Consulta
  [aquí](#usando-una-versión-anterior) para ver el uso.

:::note
Ten en cuenta que configurar las opciones `index` y `archival` en un nodo existente
requerirá un arranque nuevo para recrear la base de datos.
:::

La forma de uso completa del script se puede mostrar ingresando:

```bash
./luxd-installer.sh --help
```

### Instalación Automatizada

Si deseas utilizar el script en un entorno automatizado donde no puedes ingresar
los datos en los mensajes, debes proporcionar al menos las opciones `rpc` e `ip`.
Por ejemplo:

```bash
./luxd-installer.sh --ip 1.2.3.4 --rpc local
```

### Ejemplos de Uso

- Para ejecutar un nodo Fuji con indexación habilitada y IP estática autodetectada:

  ```bash
  ./luxd-installer.sh --fuji --ip static --index
  ```

- Para ejecutar un nodo Mainnet de archivo con IP dinámica y base de datos ubicada en `/home/node/db`:

  ```bash
  ./luxd-installer.sh --archival --ip dynamic --db-dir /home/node/db
  ```

- Para usar state-sync de C-Chain para arrancar rápidamente un nodo Mainnet, con IP dinámica y solo RPC local:

  ```bash
  ./luxd-installer.sh --state-sync on --ip dynamic --rpc local
  ```

- Para reinstalar el nodo usando la versión del nodo 1.7.10 y usar una IP específica y solo RPC local:

  ```bash
  ./luxd-installer.sh --reinstall --ip 1.2.3.4 --version v1.7.10 --rpc local
  ```

## Configuración del Nodo

El archivo que configura la operación del nodo es `~/.luxd/configs/node.json`. Puedes
editarlo para agregar o cambiar opciones de configuración. La documentación de
las opciones de configuración se puede encontrar
[aquí](/nodes/configure/luxd-config-flags.md). La configuración puede verse
así:

```json
{
  "public-ip-resolution-service": "opendns",
  "http-host": ""
}
```

Ten en cuenta que el archivo de configuración debe ser un archivo `JSON` formateado correctamente, por lo que
los interruptores se formatean de manera diferente que en la línea de comandos, así que no ingreses opciones
como `--public-ip-resolution-service=opendns` sino como en el ejemplo anterior.

El script también crea un archivo de configuración vacío de C-Chain, ubicado en
`~/.luxd/configs/chains/C/config.json`. Al editar ese archivo, puedes
configurar la C-Chain, como se describe en detalle
[aquí](/nodes/configure/chain-config-flags.md).

## Usando una Versión Anterior

El script de instalación también se puede utilizar para instalar una versión de LuxGo que no sea la última versión.

Para ver una lista de versiones disponibles para la instalación, ejecuta:

```bash
./luxd-installer.sh --list
```

Imprimirá una lista, algo como esto:

```text
Instalador de LuxGo
---------------------
Versiones disponibles:
v1.3.2
v1.3.1
v1.3.0
v1.2.4-arm-fix
v1.2.4
v1.2.3-signed
v1.2.3
v1.2.2
v1.2.1
v1.2.0
```

Para instalar una versión específica, ejecuta el script con `--version` seguido de la
etiqueta de la versión. Por ejemplo:

```bash
./luxd-installer.sh --version v1.3.1
```

:::warning

Ten en cuenta que no todas las versiones de LuxGo son compatibles. Generalmente deberías ejecutar
la última versión. Ejecutar una versión que no sea la última puede hacer que tu nodo
no funcione correctamente y, para los validadores, no recibir una recompensa de staking.

:::

Gracias al miembro de la comunidad [Jean Zundel](https://github.com/jzu) por la
inspiración y la ayuda para implementar el soporte para instalar versiones de nodo que no son las últimas.

## Reinstalación y Actualización del Script

El script de instalación se actualiza de vez en cuando, con nuevas características y
capacidades agregadas. Para aprovechar las nuevas características o para recuperarse de
modificaciones que hicieron que el nodo fallara, es posible que desees reinstalar el nodo. Para hacer
eso, obtén la última versión del script de la web con:

```bash
wget -nd -m https://raw.githubusercontent.com/luxdefi/docs/master/scripts/luxd-installer.sh
```

Después de que el script se haya actualizado, ejecútalo nuevamente con la bandera de configuración `--reinstall`:

```bash
./luxd-installer.sh --reinstall
```

Esto eliminará el archivo de servicio existente y ejecutará el instalador desde cero,
como si se hubiera iniciado por primera vez. Ten en cuenta que la base de datos y el NodeID se
dejarán intactos.

## Eliminación de la Instalación del Nodo

Si deseas eliminar la instalación del nodo de la máquina, puedes ejecutar el
script con la opción `--remove`, así:

```bash
./luxd-installer.sh --remove
```

Esto eliminará el servicio, el archivo de definición del servicio y los binarios del nodo. No
eliminará el directorio de trabajo, la definición del ID del nodo o la base de datos del nodo. Para
eliminar también esos, puedes escribir:

```bash
rm -rf ~/.luxd/
```

:::warning
¡Ten en cuenta que esto es irreversible y la base de datos y el ID del nodo se eliminarán!
:::

## ¿Qué Sigue?

¡Eso es todo, estás ejecutando un nodo LuxGo! ¡Felicitaciones! Háznoslo saber en nuestro [Twitter](https://twitter.com/luxdefi),
[Telegram](https://t.me/luxdefi) o [Reddit](https://t.me/luxdefi)!

Si estás en una red residencial (IP dinámica), no olvides configurar el reenvío de puertos. Si estás en un proveedor de servicios en la nube, estás listo para continuar.

Ahora puedes [interactuar con tu nodo](/reference/standards/guides/issuing-api-calls.md), [apostar tus tokens](/nodes/validate/what-is-staking.md), o mejorar tu instalación configurando
[monitoreo del nodo](/nodes/maintain/setting-up-node-monitoring.md) para obtener una mejor
visión de lo que está haciendo tu nodo. Además, es posible que desees usar nuestra [Colección de Postman](/tooling/luxd-postman-collection/setup.md) para emitir comandos más
fácilmente a tu nodo.

Finalmente, si aún no lo has hecho, es una buena idea [hacer una copia de seguridad](/nodes/maintain/node-backup-and-restore.md)
de archivos importantes en caso de que alguna vez necesites restaurar tu nodo en una máquina diferente.

Si tienes alguna pregunta o necesitas ayuda, no dudes en contactarnos en nuestro servidor de [Discord](https://chat.lux.network/).
