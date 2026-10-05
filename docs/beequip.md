---
title: "Beequip"
tags: ["Items", "Beequips", "Inventory"]
---

# Beequip

![Beequip](img/Beequip.png){ align=right width=150 }

This piece of content contains information obtained through datamining.

Due to the nature of the information, details may be inaccurate or outdated.

Datamined information: How Beequips work internally. — March 18th, 2026



A **beequip** is a type of inventory item that can be worn by [bees](bees.md). When equipped to a bee, they alter its stats and can also give bonuses to the hive. Beequips can only be given to bees that are at or above the level of the beequip. Some beequips can only be given to certain bees or types of bees - for example, the [Bubble Light](bubble-light.md) requires a bee with an energy [mutation](mutation.md).

## Beequip Case



When a beequip is obtained, they are initially stored in a **Beequip Case**. Beequips in a case can be given to bees by dragging the beequip to a hive slot, or moved between the case, storage, and inbox.

The Beequip Case is obtained when the player first talks to [Dapper Bear](dapper-bear.md) at his [shop](dapper-bear-s-shop.md). The player starts off with five slots but can obtain additional slots from [Dapper Bear](dapper-bear.md)'s quests and [Bee Bear](bee-bear.md)'s quests during Beesmas 2020, with the total amount of slots being 15 beequips.

Opening the Beequip Case allows the player to see all equipped Beequips on everyone's hives, albeit they can only interact with their own hive. Holding or clicking on an equipped Beequip in the case will cause said Beequip that is currently on a hive slot to enlarge and sway, highlighting it's location. Directly reviewing a beequip from the hive slot will not cause this effect.

## Beequip Storage





If all the slots of the beequip case are filled, or if the player have not gotten a Beequip Case, Beequips are moved to the Beequip Storage, located near the [Dandelion Field](dandelion-field.md), or the [Public Sticker Board](public-sticker-board.md) in the Hive Hub. Beequips in the storage *cannot* be given to bees.

By default, the storage has 10 slots. However, the player can purchase 90 additional slots, for a max total of 100, with a total of 123,500 tickets. Additional slots could have been obtained by completing some of Bee Bear's quests during Beesmas 2020.

If both the storage and case are full, the beequips are stored in the Beequip Inbox. The inbox can store the player's 25 most recent beequips, but they have a 48-hour time limit before being discarded automatically. If the player doesn't want a certain beequip in the inbox to be deleted, they can empty a slot in the case, and then they can keep the beequip.

Permanent beequips can be stored in the 'Permanents' section of the Beequip Storage without taking up any space. However, those special beequips will still require a case slot in order to be equipped to a bee. Currently, there are no permanent beequips, since the ones that used to be (the [Reindeer Antlers](reindeer-antlers.md) and [Festive Wreath](festive-wreath.md)) were made normal beequips, with Onett saying that he might get rid of the permanent beequip feature.

<table class="sortable article-table mw-collapsible mw-collapsed">
<caption>Extra storage slots
</caption>
<tbody><tr>
<th><img alt="Ticket" height="35" src="img/Ticket.png" width="35"/><a href="ticket.html"><span class="color-template color-template-ticket color-template-background-clip">Tickets</span></a>
</th>
<th>Total storage
</th></tr>
<tr>
<td>100
</td>
<td>15
</td></tr>
<tr>
<td>250
</td>
<td>20
</td></tr>
<tr>
<td>450
</td>
<td>25
</td></tr>
<tr>
<td>800
</td>
<td>30
</td></tr>
<tr>
<td>1,250
</td>
<td>35
</td></tr>
<tr>
<td>1,850
</td>
<td>40
</td></tr>
<tr>
<td>2,550
</td>
<td>45
</td></tr>
<tr>
<td>3,400
</td>
<td>50
</td></tr>
<tr>
<td>4,400
</td>
<td>55
</td></tr>
<tr>
<td>5,550
</td>
<td>60
</td></tr>
<tr>
<td>6,800
</td>
<td>65
</td></tr>
<tr>
<td>8,250
</td>
<td>70
</td></tr>
<tr>
<td>9,800
</td>
<td>75
</td></tr>
<tr>
<td>11,550
</td>
<td>80
</td></tr>
<tr>
<td>13,400
</td>
<td>85
</td></tr>
<tr>
<td>15,450
</td>
<td>90
</td></tr>
<tr>
<td>17,650
</td>
<td>95
</td></tr>
<tr>
<td>20,000
</td>
<td>100
</td></tr>
<tr>
<th colspan="2">Total: <img alt="Ticket" height="25" src="img/Ticket.png" width="25"/>123,500 <a href="ticket.html"><span class="color-template color-template-ticket color-template-background-clip">Tickets</span></a>
</th></tr></tbody></table>

## Generation

*This section gives a short explanation of how a Beequip generates its stats. For a more in-depth explanation, visit [the linked subarticle](beequip-generation.md). (incomplete)*

### Potential

Beequips have a potential that can range from 0-5 stars. The potential of a beequip **cannot** change.

When displayed, the potential will round to the nearest star (nearest half-circle in Dapper Bear's Shop).

Generally, the higher the potential a beequip has:

* the better the probability of the beequip having better base stats,
* the easier it is to get rarer stats when upgrading the beequip with [waxes](waxes.md),
* and the better the probability of a wax upgrade giving more stats.

### Base Stats

When a beequip is first generated, or when a [Swirled Wax](swirled-wax.md) is applied to it, it is given a new set of base stats.

Each possible stat on the beequip has a chance of being in this new set of base stats, with either an exact value, or a value between 2 pre-determined limits that is biased to values near a value that may increase with the beequip's potential.

Usually, the better the beequip's potential is, the more likely the beequip is to have the base stat, and the base stat is more likely to have a higher value. However, due to some quirks with the generation, this may not be the case, and the probability of the beequip having the base stat is randomized.

Interally, this process is done using a complex function. For more information on how this function works, visit the linked module page. For more information on how this function is used, visit [the linked subsection.](beequip-generation.md#Base)

*Note that the base stats are not dependent on [Caustic Waxes](caustic-wax.md), so it is possible to have an otherwise Caustic-only stat on a beequip as its base stats.*

### Waxes

Main article: [Waxes](waxes.md)

When a wax is applied successfully, it gives the beequip a number of **wax points**. Each wax point can upgrade exactly 1 of the beequip's stat. Swirled Waxes do not give any wax points, but it rerolls every wax point that has been applied to the beequip.

The amount of wax points a wax can give is given by the below table:

<table class="article-table">
<tbody><tr>
<th>Wax
</th>
<th>Wax points
</th></tr>
<tr>
<td><img alt="Soft Wax" height="35" src="img/Soft_Wax.png" width="35"/><a href="soft-wax.html"><span class="color-template color-template-soft-wax">Soft Wax</span></a>
</td>
<td>1
</td></tr>
<tr>
<td><img alt="Hard Wax" height="35" src="img/Hard_Wax.png" width="35"/><a href="hard-wax.html"><span class="color-template color-template-hard-wax">Hard Wax</span></a>
</td>
<td>2
</td></tr>
<tr>
<td><img alt="Caustic Wax" height="35" src="img/Caustic_Wax.png" width="35"/><a href="caustic-wax.html"><span class="color-template color-template-caustic-wax">Caustic Wax</span></a> / <img alt="Debug Wax" height="35" src="img/Debug_Wax.png" width="35"/><a href="debug-wax.html"><span class="color-template color-template-debug-wax">Debug Wax</span></a>
</td>
<td>4
</td></tr>
<tr>
<td><img alt="Swirled Wax" height="35" src="img/Swirled_Wax.png" width="35"/><a href="swirled-wax.html"><span class="color-template color-template-swirled-wax color-template-background-clip">Swirled Wax</span></a>
</td>
<td>0
</td></tr></tbody></table>

Every upgradable stat on a beequip has a weight value. The probability of a wax point upgrading a stat is equal to its weight value divided by the sum of all upgradable stats' weight values. This weight value may increase with the beequip's potential.

When a wax point upgrades a stat, it will upgrade the stat by either an exact value, or a value between 2 pre-determined ranges, biased to values near a value that increases with the beequip's potential.

A stat may only be upgraded a certain number of times. When a stat reaches its maximum number of upgrades, it is removed from the pool, improving the probabilities of upgrading all other stats.

Usually, the better the beequip's potential is, the more likely the wax point is to choose rarer stats, and the wax point is more likely to upgrade the chosen stat by a higher amount. However, due to some quirks with the generation, this may not be the case, and the probability of a wax point picking a stat is randomized.

Interally, this process is done using a complex function. For more information on how this function works, visit the linked module page. For more information on how this function is used, visit [the linked subsection.](beequip-generation.md#Upgrade)

## Beequips

*Certain features on articles may be non-functional due to FANDOM's discontinued support of TabViews. Please visit each article separately for a better experience.*

### Non-Event

Non-Event beequips were added on April 1, 2022, and can be obtained from planters (the Dandelion Field has a much higher chance of dropping beequips than other fields).

<tabview>
Thimble
Sweatband
Bandage
Thumbtack
Camo Bandana
Bottle Cap
Kazoo
Smiley Sticker
Whistle
Charm Bracelet
Paperclip
Beret
Bang Snap
Bead Lizard
Pink Shades
Lei
Demon Talisman
Camphor Lip Balm
Autumn Sunhat
Rose Headband
Pink Eraser
Candy Ring
</tabview>

### Beesmas

Beesmas Beequips were added during Beesmas 2020 and are only obtainable during Beesmas events, but can still be used year-round.

<tabview>
Elf Cap
Single Mitten
Warm Scarf
Peppermint Antennas
Beesmas Top
Pinecone
Icicles
Beesmas Tree Hat
Bubble Light
Snow Tiara
Snowglobe
Reindeer Antlers
Toy Horn
Paper Angel
Toy Drum
Lump Of Coal
Poinsettia
Electric Candle
Festive Wreath
</tabview>
