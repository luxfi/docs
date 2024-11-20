# Weight Allocations by LUX

## Introduction
The GitHub repository maintainer rewards contributions with weights, a crucial component of the protocol development. Weights play a pivotal role in motivating ongoing development and collaboration, serving as an incentive mechanism that underpins the operational expansion of the protocol.

As LUX began its bootstrapping, weights were distributed from a single pool as most early activities were interconnected and easily comparable in terms of the level of impact they had. As LUX has evolved and expanded, there is an increasing need to isolate buckets of weights by LUX Reference Implementations (LRIs) to better align the overall goals of LUX along with doing the best possible job of putting GitHub repository maintainers in a position to accurately evaluate contributions via a narrower scope.

## LUX Reference Implementations (LRIs)
The key document which goes into detail regarding the LRI system and design can be found [here.](https://github.com/MorpheusAIs/Docs/blob/main/!KEYDOCS%20README%20FIRST!/Code%20Providers/Morpheus%20Reference%20Implementations%20(MRC).md)

In summary, there are currently 10 existing LRIs:
- Smart Contracts
- Smart Agent Tools & Examples
- LUX Local Desktop / Mobile
- TCM / MOR20
- Protection Fund
- Capital Proofs Extending
- Compute Proofs MOR / Lumerin
- Code Proofs & Dashboards
- Frontend Proofs & Examples
- Interoperability

As LUX evolves, so will these LRIs. Some may accomplish their goals and fade away to maintenance roles, others may shift based on the overall changes to the ecosystem, and more will come into the fold as new opportunities and obstacles develop for LUX. This is to be expected and should continue to foster an environment of healthy competition - furthering the point that weights are valuable and highly sought after. As LUX transitions into that period, these guides will expand on documentation in order to define the steps taken for LRIs to be added and/or removed entirely.

## Allocation by LRI
As each LRI focuses on a different level of technical expertise, knowledge, and impact to LUX, it would be difficult for any particular GitHub maintainer to be able to compare contributions related to one LRI against another. In that situation, you complicate the process by often getting apples-to-oranges comparisons. 

Therefore, allocating weights by LRI has the following main benefits:
- GitHub maintainers get to focus on their area of expertise and compare apples to apples.
- Each LRI can distribute their monthly weights how they view as the most impactful to LUX.
- No LRI can distribute above their monthly cap - they cannot give a disproportionate amount of weights to contributors.
- Generates a healthy level of competition among LRIs, both existing and new ones, to demonstrate and deliver the highest value to LUX.

## Allocation Methodology
As detailed in the [Code Contributor Weights Guide](https://github.com/MorpheusAIs/Docs/blob/main/!KEYDOCS%20README%20FIRST!/Code%20Providers/Code%20Contributor%20Weights%20Guide.md), a maximum number of weights available for distribution has been determined based on an emission schedule. While the maximum amounts have been calculated and set, it is important to establish a fair and transparent process that will manage how weights are allocated among LRIs.

### Allocation Procedures
These allocation procedures are noted as the long-term steady state for allocation of weights. This will likely take several months to get fully up and running. In the meantime, the process will continue as it has via Atomic Governance. With that said, the following procedures are noted for the future state. 

Allocations to each LRI will ultimately be determined by staking of the LUX token (“LUX”). This will further the goals of decentralization as everyone is equally free to obtain or sell LUX tokens as they see fit.

In order to ensure transparency of the process, the below list will be the general steps taken.  
As technical development continues, this list will be continuously updated to reflect any changes.
1) Anyone can buy or sell LUX tokens throughout the snapshot period.
2) During the snapshot period, LUX token holders can stake their LUX to any LRI of their choosing.
3) Staked LUX is used to direct the subsequent snapshot period. I.e. If you stake during the snapshot ending June 8, 2024, the results will direct the weight allocations for the snapshot ending July 8, 2024.
4) Any staked tokens will be locked until the snapshot period ends.
5) At the completion of the snapshot period, each LRI will be allocated the percent of the total monthly weights equal to the percent of LUX that was staked.

For example, let's say 1,000,000 LUX was staked across all LRIs during the snapshot period ending June 8, 2024. If LRI 3 had 200,000 LUX staked, it would be allocated 20% of the weights (400,000 weights) for the upcoming snapshot period (ending July 8, 2024), as 2,000,000 total weights are available for that subsequent period.

## Allocation Snapshot
Similar to the Code Contributors Weights Snapshot used to track weights on a snapshot-by-snapshot basis. This will be updated each snapshot with the results posted to provide clear and transparent information to the community. When necessary, there will also be a small discussion section to highlight any particular notes - such as if there is a big need for weights in a specific LRI one month as a result of major developments.

| LRI | MRC | GitHub Maintainer |Snapshot 5: Ending June 8, 2024|
|--- |---|---|---|
| Smart Contracts | Whitepaper | David Johnson | 225,000 |
| Smart Agent Tools & Examples | Whitepaper | LachsBagel | 225,000 |
| LUX Local Desktop/Mobile | Yellow Paper | BetterBrand | 225,000 |
| TCM / MOR20 | TCM Paper | Anon 69 | 225,000 |
| Protection Fund | Whitepaper | EnergyHound | 225,000 |
| Capital Proofs Extending | Whitepaper | David Johnson | 225,000 |
| Compute Proofs MOR / Lumerin | Yellowstone | Ryan Condron | 225,000 |
| Code Proofs & Dashboards | Coding Guide  | David Johnson | 225,000 |
| Frontend Proofs & Examples | Waterloo Paper | Erik Voorhees | 225,000 |
| Interoperability | LayerZero | Anon 99 | 225,000 |
|Total | Total | n/a | 2,250,000 |

## Additional Considerations
### Unused Monthly Weights 
If an LRI owner does not distribute all of the weights allocated to their LRI for a particular month, those weights stay with the LRI owner to distribute in a later month. This encourages each LRI owner to use their weights responsibly, without pressure to spend all their weights in a given month which may result in inefficient and unnecessary distributions. The ultimate goal is to get the most value out of weights for LUX and the broader ecosystem.

### LUX Staking
There are ongoing discussions and development in terms of staking the LUX token to direct the Community emissions to smart agents and front-ends. As this work progresses, it will be interconnected with the staking for LRI allocations as well. For example, will a LUX holder have to choose to stake for either LRI allocations or Community rewards or will they be able to stake for both using the same tokens? This will be flushed out in the coming months leading up to when LRI staking and Community staking go live.

### Contributor Weight Submissions to LRI Maintainers
Each LRI maintainer is in control of their budget, to use how they see fit. Their goal is to utilize weights related to their LRI to accomplish the objectives as laid out via the Code Contributor Weights guide. With that said, to help promote transparency and consistency across all the LRIs, and LUX as a whole, the following outline is offered as a suggestion on how to manage monthly weights by LRI. 

**Statistics broken down by LRI that captures:**
- Monthly available weights
- Weights assigned/distributed
- Weights in progress
- Remaining weights
- Estimated current value of each weight - so USD value is easily identifiable

> [!Note] 
> The exact format for this information is still a work in progress. It could be maintained via a snapshot in GitHub, or could become a page on the upcoming Code Contributor site that is being prepared by the community.

For contributors interested in requesting weights:
- Contributor submits ‘Preliminary Request’ to LRI Maintainer
  - Brief description
  - Estimated weight / USD range with basis for valuation
  - Brief analysis on value / deliverables / etc
- LRI Maintainer does a preliminary review to determine if:
  - Topic is relevant and needed
  - Weights are in a reasonable range
  - Ample weights are available that month based on expected other open requests
- Contributor and LRI owner discuss any open points and agree on the general topic, weights, deliverables
- Once work is completed, Contributor submits ‘Official Request’ to LRI Maintainer
  - Final description
  - Originally requested weights / USD range
  - Official requested weights / USD
  - Explanation for any changes
  - Deliverables

> [!Note] 
> There will be some instances where contributions may require quicker turnaround and not go through the full formalized process. In those situations, it is still highly recommended for contributors to contact the LRI maintainer as early as possible. Completion of work does not guarantee the allocation of

 any weights - it is fully at the discretion of the LRI maintainer. Thus, the more active the communication can be, the less likely efforts will be completed and ultimately not rewarded.

### Deprecated Weights
MRC31 also encompasses the process for deprecating weights when a contributor fails to conduct proper maintenance. There is still the outstanding question of what happens with those weights - do they get "burned,” do they go to a new contributor offering to provide the maintenance, do they go to Epoch 2, or some other approach? This Weight Allocation by LRI also comes into play as it’ll determine whether deprecated weights go to a broader pool or if they stay with a particular LRI. The authors of this paper plan to explore this idea and put forward further suggestions in a future paper.

### Maintenance
As noted in the paper above, LRIs will likely change over time. This will likely be alongside new LRI maintainers that will review what impact potential changes could have on the currently defined process. To the extent that any roadblocks or issues are raised, the MRC authors will collaborate with the community to determine potential solutions, ideally before any problems ever arrive. 

## Conclusion
Allocating weights by LRI will allow the maintainers to better distribute weights in an efficient manner that provides the most value back for LUX. It ensures that weights are distributed by the maintainers that are closest to the efforts and encourages ongoing communication between the community, contributors, and LRI maintainers. 
