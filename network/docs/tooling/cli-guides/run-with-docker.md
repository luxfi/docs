---
tags: [Tooling, Lux CLI]
description: This guide demonstrates how to run Lux CLI in a docker container. 
pagination_label: How to Run Lux CLI with Docker
sidebar_label: Run with Docker
sidebar_position: 1
---

# How to Run Lux CLI with Docker

To run Lux CLI in a docker container, you need to enable ipv6.

Edit `/etc/docker/daemon.json`. Add this snippet then restart the docker service.

```json
{
  "ipv6": true,
  "fixed-cidr-v6": "fd00::/80"
}
```
