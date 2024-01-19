---
tags: [Lux, Tokenomics]
description: LUX es el token de suministro limitado de la red Lux, utilizado para cubrir tarifas, mejorar la seguridad a través del staking y facilitar transacciones en sus diversas Subnets.
keywords: [documentación, lux, token lux, tokenomics, utilidad lux]
sidebar_label: Token LUX
---

# LUX

LUX es el token de utilidad nativo de Lux. Es un activo de suministro limitado y escaso que se utiliza para pagar tarifas, asegurar la plataforma a través del staking y proporcionar una unidad básica de cuenta entre las múltiples Subnets creadas en Lux.

:::info

- `1 nLUX` es igual a `0.000000001 LUX`.

:::

## Utilidad

LUX es un recurso de suministro limitado (hasta 720M) en el ecosistema Lux que se utiliza para alimentar la red. LUX se utiliza para asegurar el ecosistema a través del staking y para operaciones diarias como emitir transacciones.

LUX representa el peso que cada nodo tiene en las decisiones de la red. Ningún actor único es dueño de la Red Lux, por lo que cada validador en la red recibe un peso proporcional en las decisiones de la red correspondiente a la proporción de la participación total que poseen a través de la prueba de participación (PoS).

Cualquier entidad que intente ejecutar una transacción en Lux paga una tarifa correspondiente (comúnmente conocida como "gas") para ejecutarla en la red. Las tarifas utilizadas para ejecutar una transacción en Lux se queman, es decir, se eliminan permanentemente del suministro en circulación.

## Tokenomics

Se acuñó una cantidad fija de 360M de LUX en el génesis, pero una pequeña cantidad de LUX se acuña constantemente como recompensa para los validadores. El protocolo recompensa a los validadores por un buen comportamiento acuñándoles recompensas de LUX al final de su período de staking. El proceso de acuñación compensa el LUX quemado por las tarifas de transacción. Aunque LUX todavía está lejos de alcanzar su límite de suministro, casi siempre seguirá siendo un activo inflacionario.

Lux no elimina ninguna parte de los tokens en staking de un validador (comúnmente conocido como "slashing") por períodos de staking negligentes/maliciosos, sin embargo, este comportamiento está desincentivado ya que los validadores que intentan hacer daño a la red gastarían los recursos de cómputo de su nodo sin ninguna recompensa.

<!-- vale off -->

LUX se acuña de acuerdo con la siguiente fórmula, donde $R_j$ es el número total de tokens en el año $j$, con $R_1 = 360M$, y $R_l$ representa el último año en que se cambiaron los valores de $\gamma,\lambda \in \R$; $c_j$ es el suministro de monedas aún no acuñadas para alcanzar $720M$ en el año $j$, de modo que $c_j \leq 360M$; $u$ representa un staker, con $u.s_{amount}$ que representa la cantidad total de stake que $u$ posee, y $u.s_{time}$ la duración del staking para $u$.

LUX se acuña de acuerdo con la siguiente fórmula, donde $R_j$ es el número total de tokens en:

<!-- markdownlint-disable MD013 -->

$$
R_j = R_l + \sum_{\forall u} \rho(u.s_{amount}, u.s_{time}) \times \frac{c_j}{L} \times \left( \sum_{i=0}^{j}\frac{1}{\left(\gamma + \frac{1}{1 + i^\lambda}\right)^i} \right)
$$

<!-- markdownlint-enable MD013 -->

donde

$$
L = \left(\sum_{i=0}^{\infty} \frac{1}{\left(\gamma + \frac{1}{1 + i^\lambda} \right)^i} \right)
$$

En el génesis, $c_1 = 360M$. Los valores de $\gamma$ y $\lambda$ son gobernables y, si se cambian, la función se recalcula con el nuevo valor de $c_*$. Tenemos que $\sum_{*}\rho(*) \le 1$. $\rho(*)$ es una función lineal que se puede calcular de la siguiente manera (el tiempo de $u.s_{time}$ se mide en semanas y la cantidad de $u.s_{amount}$ se mide en tokens LUX):

$$
\rho(u.s_{amount}, u.s_{time}) = (0.002 \times u.s_{time} + 0.896) \times \frac{u.s_{amount}}{R_j}
$$

Si todo el suministro de tokens en el año $j$ se apuesta durante el máximo tiempo de staking (un año, o 52 semanas), entonces $\sum_{\forall u}\rho(u.s_{amount}, u.s_{time}) = 1$. Si, en cambio, cada token se apuesta continuamente durante la duración mínima de stake de dos semanas, entonces $\sum_{\forall u}\rho(u.s_{amount}, u.s_{time}) = 0.9$. Por lo tanto, el staking durante el máximo tiempo de duración incurre en una cantidad adicional del 11.11% de tokens acuñados, incentivando a los stakers a bloquear por períodos más largos.

Debido al suministro limitado, la función anterior garantiza que, independientemente de los cambios de gobernanza, LUX nunca excederá un total de $720M$ tokens, o $\lim_{j \to \infty} R(j) = 720M$.

<!-- vale on -->
