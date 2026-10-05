---
title: "Beequip/Generation"
tags: []
---

# Beequip/Generation

This piece of content contains information obtained through datamining.

Due to the nature of the information, details may be inaccurate or outdated.

Datamined information: All content below. — March 18th, 2026

This article goes into extreme detail on the inner workings of beequips. It will go through each step of the function that generates the stats of a beequip in order, and point out every known quirk/bug with the generation along the way.

Reading through [the shortened version of this explanation](beequip.md#Generation) will provide important context. This article also assumes that the reader has a basic knowledge of programming, specifically with random number generation and float numbers. A basic understanding of [Lua](https://en.wikipedia.org/wiki/Lua) will also help.

## Required knowledge

### The Resolve function

The Resolve function (or the RQValue function) is the main determiner of a beequip's stats. An explanation of what the function does is given in its module page, but such an explanation is not required to understand this article.

The only important thing to know is that the result of the function is a single number value, which can either be:

* **An exact value**, if the function uses linear scaling, or if the stat's value is always a single number. The higher the provided *quality*, the closer this value goes from its left bound to its right bound.
* **A random value between 2 given limits**, if the function uses the RandomBias function. This value will be biased toward values near a certain value. The higher the provided *quality*, the closer the biased value goes from its left bound to its right bound.
* Note that the left bound does not necessarily have to be smaller than the right bound.

This result is rounded by a *resolution* value, if one is provided. *Note that if this value is not provided, the result is kept the same.*

### Weights

When weights are mentioned, it is in the context of a pool of items that the game needs to pick 1 (or multiple) from. *The weight of an item in the pool determines the probability of it being picked from the pool.*

This is done by generating a random number between 0 and the weight sum of every item in the pool, then iterating through the pool and subtracting weights of items from the random number until it is less than or equal to 0, in which case it picks the stat the pointer is currently on.

**In other words, the probability of an item being picked is equal to its weight divided by the weight sum of every item in the pool.**

### Beequip table

Each beequip' template stats are stored as a table. The game uses this template table to determine the stats of a beequip. These tables (with some mild modifications) can be found in Module:Beequip Stats/data.

This table can have the following keys. Keys important to understanding beequip generation are underlined.

* *DisplayName*: Stores *the name used when displaying the beequip* to the player.
  * The only beequip that uses this key is Toy Horn, whose internal name is Horn Ornament.
* *Description*: The *description of the beequip*, viewable from the Beequip Case, Storage or Inbox.
* *Rarity*: The ***perceived** rarity of the beequip*. It is not used for anything in the game.
* *EquipLimit*: The *maximum number* of this type of beequip the player can equip at a time.
* *Beesmas*: Whether or not this beequip is *Beesmas-related*.
* *OldRNG*: Whether or not to **use the *Resolve* or *OldResolve* function** when generating the beequip.
* *Requirements*: The *requirements* for a bee to use the beequip.
* *Modifiers*: An *array* containing RQValue-valid tables, **describing every base bee stat** the beequip can have.
* *HiveBonuses*: An *array* containing RQValue-valid tables, **describing every base hive bonus** the beequip can have.
* *Abilities*: An *array* containing tables with either **the name of an ability, or a pool of names of abilities**. The beequip is **guaranteed** to have the ability, or one of the abilities in the pool.
* *Upgrades*: An *array* containing tables describing **every upgradable stat and/or ability** the beequip can have. Note that while the tables are RQValue-valid, with a *Chance* and *Value* table, a different process is used.

## Generation

### Seed

*Every beequip is assigned a new seed* when first generated, and when a Swirled Wax is applied to it. This seed is used as the seed for the random number generator **used through the entirety of the beequip's generation**, and is how the game stores a beequip's stats, as opposed to storing every stat of the beequip alongside it. *Note that this seed does not affect whether waxes are successful or not when applied to the beequip, only the stats the beequip will get from the wax points applied by the waxes.*

Note that while this may mean that it is possible to *determine a beequip's stats before waxing it* (assuming the player somehow manages to find the beequip's seed, and only uses waxes that are guaranteed to be successful), **in practice this is made much more difficult (if not impossible)** due to factors that will be talked about later in the article.

### Base

The beequip determines its base stats by going through *Modifiers*, *HiveBonuses*, and *Abilities* in that order.

#### *Modifiers* and *HiveBonuses*

**Every table in each array is iterated through and put in the Resolve function.** If *nil* is returned, the beequip will not have the stat. If a single number value is returned, the beequip will have the stat with the strength of that value.

There are a few quirks to keep in mind here:

* Because the probability of getting the stat is resolved using the Resolve function, **it is possible that this probability is a random value**, if the Resolve function chooses to use the RandomBias function. The beequip's potential gives the beequip a better chance at getting a better probability of getting a stat, *but this is a case where the beequip's potential may not necessarily improve a beequip's stat.*
* If the stat is not given a resolution value, it is not rounded. **However, when displaying the stat to the player, these stats are rounded to a certain resolution before displaying.**
  * For example, a +24.6% Gather Amount base stat may be displayed as +25% to the player.
* *If the stat is given a resolution value, but the limits of the base stat's value does not divide the resolution value*, then after rounding, **the limits of the base stat's value may be different from what is intended.**
  * For example, if a stat's base value is intended to be between 3% and 8%, but have a resolution value of 10%, the stat's actual base value is between 0% and 10%, as values between 3% and 5% are rounded down to 0% and values between 5% and 8% and rounded up to 10%.

#### *Abilities*

**Every table in each array is iterated through, and the ability in the table is added to the beequip.**

**If the table contains a pool of names, one is picked randomly using the weight system.** Note that at of the time of writing this, every ability in any beequip's ability pool has the same weight, meaning they all have the same probability of being picked.

### Upgrade

The beequip first checks if it has any wax point, by going through every wax applied to it and adding the wax points of every successful wax together. If it does not have any, the upgrade step is skipped.

#### Chances

If the beequip has wax points, it will then **iterate through every table in the *Upgrades* array to calculate each upgradable stat's weight value.** This is done by running the Resolve function on the table's *Chance* table, and saving the result to a pool.

*2 pools are created, each with their own weight sums*: 1 for every possible upgradable stat, and 1 for every upgradable stat that does not require wax points from a Caustic/Debug Wax.

**Upgrades can have a maximum number of wax points allowed to upgrade it.** When this number is reached, *the upgrade is removed from the pools*, improving the probabilities of upgrading every other stat.

Note that because the weights are resolved using the Resolve function, **it is possible that one (or multiple) stats' weights are randomized**, if the Resolve function chooses to use the RandomBias function. The beequip's potential gives the beequip a better chance at getting a higher weight for these stats, *but this is a case where the beequip's potential may not necessarily improve a beequip's upgrades.*

#### Applying waxes

Every wax that was applied to a beequip is then iterated through again. If a wax was recorded as successful, the game applies the number of wax points it gives to the beequip, before moving to the next wax.

Before the wax points of a wax are applied however, **the game takes a number between 0 and 32 that was stored with the wax's record and runs the random number generator by that number of times**. This number is not determined by the beequip's seed, and is the reason why *it is practically impossible to predict a beequip's wax upgrades*, even if the beequip's seed is known.

#### Upgrade value

Once a stat is chosen by a wax point, **it will run the Resolve function on the stat's *Value* table in order to determine how much the stat should be upgraded by.**

If an ability is chosen, it is given to the beequip. *Note that if an ability pool is chosen, which ability is picked is not decided in this step.*

There are a few quirks to keep in mind here:

* If the upgrade value is not given a resolution value, it is not rounded. **However, when displaying the stat to the player, these stats are rounded to a certain resolution before displaying.**
  * For example, a +1.6% Gather Amount upgrade value may be displayed as +2% to the player.
  * This creates scenarioes where **a rounded upgrade value would have upgraded a stat by much more or less than the actual value**. For example, 5 +1.4% Gather Amount upgrades gives a total upgrade value of 7%, but would have been 5% if the upgrade values were rounded to the nearest 1%.
* *If the upgrade value is given a resolution value, but the limits of the base stat's value does not divide the resolution value*, then after rounding, **the limits of the base stat's value may be different from what is intended.**
  * For example, if a wax point can upgrade a stat by a value intended to be between 3% and 8%, but have a resolution value of 10%, the stat's actual range of upgrade values is between 0% and 10%, as values between 3% and 5% are rounded down to 0% and values between 5% and 8% and rounded up to 10%.
  * One major issue this can cause is if the resolution value is too high (like seen with some of [Autumn Sunhat](autumn-sunhat.md) and [Candy Ring](candy-ring.md)'s stats), **the range of upgrade values may be rounded down to 0%, effectively wasting any wax point that chooses to upgrade these stats**.
    * With Candy Ring's +Convert Amount% specifically, while it is theoretically possible to get an upgrade value of 50%, which is rounded up to 100%, in practice this is mathematically impossible.

### Cleaning up

After all the above steps are completed, the beequip's newly chosen stats are then parsed into a format understandable by the rest of the code.

While this step doesn't have any notable quirk in of itself, **if an ability pool was chosen by a wax point earlier, the ability the wax point picks is decided here, after every wax point has been applied**. This is why *applying extra wax points (through a Soft/Debug Wax or a successful Hard/Caustic Wax) can change which ability is chosen* - as the random number generation has gone through more numbers and therefore will give a different value - without having to use a Swirled Wax.

## Items

[Waxes](waxes.md) and [Turpentines](turpentine.md) can have an effect on a Beequip. Their exact effect is listed here:

* Non-Swirled waxes: If successful, **runs the beequip's random number generation a random number of times** and then **applies a certain number of wax points to the beequip**.
  * [Soft Wax](soft-wax.md): 1 wax point, 100% success rate
  * [Hard Wax](hard-wax.md): 2 wax points, 60% success rate
  * [Caustic Wax](caustic-wax.md): 4 wax points, 25% success rate, destroys the beequip if it fails
  * [Debug Wax](debug-wax.md): 4 wax points, 100% success rate
* [Swirled Wax](swirled-wax.md): **Changes the seed of the beequip**. This effectively changes the base stats and upgrade values of the beequip, but *does not change the number of times each wax runs the beequip's random number generation*.
* [Turpentine](turpentine.md): **Resets the beequip's seed to its original seed**, and **runs the beequip's random number generation** once for each time a Turpentine has been applied after its base bee stats and hive bonuses have been generated, **but before its abilities are generated**.
  * This makes it so that while a beequip's base bee stats and hive bonuses revert to their original base values, *if the beequip has an ability pool, the chosen ability may be different from the original one*.
