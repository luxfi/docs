---
tags: [Nodes]
description: This tutorial demonstrates how to set up infrastructure to monitor an instance of Luxd.
sidebar_label: Upgrade
pagination_label: Upgrade Your Luxd Node
sidebar_position: 3
---

# Upgrade Your Luxd Node

## Backup Your Node

Before upgrading your node, it is recommended you backup your staker files which
are used to identify your node on the network. In the default installation, you
can copy them by running following commands:

```text
cd
cp ~/.luxd/staking/staker.crt .
cp ~/.luxd/staking/staker.key .
```

Then download `staker.crt` and `staker.key` files and keep them somewhere safe
and private. If anything happens to your node or the machine node runs on, these
files can be used to fully recreate your node.

If you use your node for development purposes and have keystore users on your
node, you should back up those too.

## Node Installed Using the Installer Script

If you installed your node using the [installer script](/nodes/run/with-installer/installing-luxd.md), to upgrade your
node, just run the installer script again.

```text
./luxd-installer.sh
```

It will detect that you already have Luxd installed:

```text
Luxd installer
---------------------
Preparing environment...
Found 64bit Intel/AMD architecture...
Found Luxd systemd service already installed, switching to upgrade mode.
Stopping service...
```

It will then upgrade your node to the latest version, and after it's done, start
the node back up, and print out the information about the latest version:

```text
Node upgraded, starting service...
New node version:
lux/1.1.1 [network=mainnet, database=v1.0.0, commit=f76f1fd5f99736cf468413bbac158d6626f712d2]
Done!
```

And that is it, your node is upgraded to the latest version.

If you installed your node manually, proceed with the rest of the tutorial.

## Stop the Old Node Version

After the backup is secured, you may start upgrading your node. Begin by
stopping the currently running version.

### Node Running from Terminal

If your node is running in a terminal stop it by pressing `ctrl+c`.

### Node Running as a Service

If your node is running as a service, stop it by entering:

`sudo systemctl stop luxd.service`

(your service may be named differently, `lux.service`, or similar)

### Node Running in Background

If your node is running in the background (by running with `nohup`, for example)
then find the process running the node by running `ps aux | grep lux`.
This will produce output like:

```text
ubuntu  6834  0.0  0.0   2828   676 pts/1    S+   19:54   0:00 grep lux
ubuntu  2630 26.1  9.4 2459236 753316 ?      Sl   Dec02 1220:52 /home/ubuntu/build/luxd
```

In this example, second line shows information about your node. Note the process
id, in this case, `2630`. Stop the node by running `kill -2 2630`.

Now we are ready to download the new version of the node. You can either
download the source code and then build the binary program, or you can download
the pre-built binary. You don’t need to do both.

Downloading pre-built binary is easier and recommended if you're just looking to
run your own node and stake on it.

Building the node [from source](/nodes/maintain/upgrade-your-luxd-node.md#build-from-source) is recommended if
you're a developer looking to experiment and build on Lux.

## Download Pre-Built Binary

If you want to download a pre-built binary instead of building it yourself, go
to our [releases page](https://github.com/luxfi/node/releases), and
select the release you want (probably the latest one.)

:::info

If you have a node, you can subscribe to the
[lux notify service](./notify.md) with your node ID
to be notified about new releases.

In addition, or if you don't have a node ID, you can get release notifications from github.
To do so, you can go to our
[repository](https://github.com/luxfi/node) and look on the top-right
corner for the **Watch** option. After you click on it, select **Custom**,
and then **Releases**. Press **Apply** and it is done.

:::

Under `Assets`, select the appropriate file.

For MacOS:  
Download: `luxd-macos-<VERSION>.zip`  
Unzip: `unzip luxd-macos-<VERSION>.zip`  
The resulting folder, `luxd-<VERSION>`, contains the binaries.

For Linux on PCs or cloud providers:  
Download: `luxd-linux-amd64-<VERSION>.tar.gz`  
Unzip: `tar -xvf luxd-linux-amd64-<VERSION>.tar.gz`  
The resulting folder, `luxd-<VERSION>-linux`, contains the binaries.

For Linux on Arm64-based computers:  
Download: `luxd-linux-arm64-<VERSION>.tar.gz`  
Unzip: `tar -xvf luxd-linux-arm64-<VERSION>.tar.gz`  
The resulting folder, `luxd-<VERSION>-linux`, contains the binaries.

You are now ready to run the new version of the node.

### Running the Node from Terminal

If you are using the pre-built binaries on MacOS:

```zsh
./luxd-<VERSION>/build/luxd
```

If you are using the pre-built binaries on Linux:

```zsh
./luxd-<VERSION>-linux/luxd
```

Add `nohup` at the start of the command if you want to run the node in the background.

### Running the Node as a Service

If you're running the node as a service, you need to replace the old binaries with the new ones.

`cp -r luxd-<VERSION>-linux/* <DIRECTORY_WITH_OLD_BINARIES>`

and then restart the service with `sudo systemctl start luxd.service`.

## Build from Source

First clone our GitHub repo (you can skip this step if you’ve done this before):

```zsh
git clone https://github.com/luxfi/node.git
```

:::info
The repository cloning method used is HTTPS, but SSH can be used too:

`git clone git@github.com:luxfi/node.git`

You can find more about SSH and how to use it
[here](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/about-ssh).
:::

Then move to the Luxd directory:

```zsh
cd luxd
```

Pull the latest code:

```zsh
git pull
```

NOTE: if the master branch has not been updated with the latest release tag, you
can get to it directly via first running `git fetch --all --tags` and then `git
checkout --force tags/<tag>` (where `<tag>` is the latest release tag; for
example `v1.3.2`) instead of `git pull`. Note that your local copy will be in a
'detached HEAD' state, which is not an issue if you do not make changes to the
source that you want push back to the repository (in which case you should check
out to a branch and to the ordinary merges). Note also that the `--force` flag
will disregard any local changes you might have.

Check that your local code is up to date. Do:

```text
git rev-parse HEAD
```

and check that the first 7 characters printed match the Latest commit field on our [GitHub](https://github.com/luxfi/node).

NOTE: if you used the `git checkout tags/<tag>` then these first 7 characters
should match commit hash of that tag.

Now build the binary:

```zsh
./scripts/build.sh
```

This should print:

```zsh
Build Successful
```

You can check what version you’re running by doing:

```zsh
./build/luxd --version
```

You can run your node with:

```zsh
./build/luxd
```
