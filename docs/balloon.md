---
title: "Balloon"
tags: ["Mechanics", "Items", "Inventory", "Consumables", "Balloons"]
---

# Balloon

**Balloons** are items that hold [pollen](pollen.md) for players and bring it back to the [hive](hive.md) to convert into [honey](honey.md) later. There are 6 types of balloons: pink, red, white, black, blue and gold. [Pink](pink-balloon.md), [red](red-balloon.md), [white](white-balloon.md), and [black](black-balloon.md) balloons are summoned with [items](items.md). Blue and gold balloons are summoned by [Buoyant Bee](buoyant-bee.md)'s abilities. The balloons return to the hive after reaching full capacity or after reaching their time limit. Capacity and time limit depends on the balloon type.

## In Fields

Balloons float around the [field](fields.md), similar to Clouds, and cast a 5-tile radius shadow on flowers underneath them. Pollen collected from these flowers is absorbed by the balloons above them. If multiple balloons have control over the same flower, the pollen is absorbed by the balloon with the lowest pollen amount in it. Balloons cannot absorb pollen from other players.

The pollen in balloons can also be increased by Buoyant Bee's [Inflate Balloons](ability-tokens.md#Inflate_Balloons) ability, though this can only happen 10 times maximum per balloon.

Standing underneath any player's balloon grants a stack of the [Balloon Aura](buffs-debuffs.md#From_Ability_Tokens) buff. Each balloon the player is in radius of gives 1 stack of the buff, capping at x10 Balloon Aura. Each stack gives x1.02 pollen and +2% honey from tokens, capping at x1.2 pollen and +20% honey from tokens.

Gifted [Frogs](ability-tokens.md#Summon_Frog) from [Gifted](gifted-bee.md) [Tadpole Bee](tadpole-bee.md), the [Tide Popper](tide-popper.md)'s waves and [Windy Bee](windy-bee.md)'s [Tornado](ability-tokens.md#Tornado) can also convert some pollen in the player's balloon into honey tokens. If the balloon is returning to the hive, it can still be converted from, and will drop its tokens around its last location on the field.

When a [surprise party](ability-tokens.md#Surprise_Party) activates, all balloons (regardless of color) will generate random ability tokens for a few seconds. These can be white and blue boost tokens, buzz and blue bombs, marks, Haste, Token Link, and Melody tokens. The boost tokens spawned seem to be based off the primary color of the field.

## Hive Balloon

When a balloon reaches the player's hive, it becomes part of the "Hive Balloon". The Hive Balloon will float in place, waiting to be converted. Once the player begins converting, their [bees](bees.md) will first convert anything in their [bag](items.md#Bags) before beginning to convert the hive balloon.

The hive balloon grants [Balloon Blessing](buffs-debuffs.md#From_Ability_Tokens) when fully converted, which grants [Capacity](system-page.md#Capacity) and [Honey at Hive](system-page.md#Honey_At_Hive). The buffs given increase as the pollen needed for another stack increases. It takes 10 trillion pollen stored in the Hive Balloon to reach the maximum stack (x100) of Balloon Blessing, which grants x4 Capacity and x2.5 Honey at Hive. When granting the buff, it displays " 🎈The hive balloon granted you x{stacks} of Balloon Blessing! "

If the blessing of hive balloon is lower than what the player currently has, fully converting it will instead refresh their balloon blessing timer, with the message " 🎈The hive balloon refreshed your Balloon Blessing! ".

Pollen in the hive balloon will begin to deplete depending on how big it is relative to the player's capacity. The slowest it will shrink is 20% per hour, and the fastest it will shrink is 99.99% in 10 minutes (if it contains over 100x the player's capacity). Keep in mind that this does not happen all at once, but rather gradually overtime until it reaches a sustainable level of pollen.

## Gold Balloon

Gold balloons are able to buff [bubbles](passive-abilities.md#Gathering_Bubbles) that they pass over, turning them into [gold bubbles](passive-abilities.md#Gathering_bubbles). Gold bubbles collect 1.5x more pollen, contribute 50% more time to [Bubble Bloat](buffs-debuffs.md#From_Passives) and have a 25% chance to create a honey token equal to the amount of pollen the bubble collected.

## Balloon Stats

<table class="article-table">
<tbody><tr>
<th>
</th>
<th style="text-align:center"><div id="Pink_Balloon"><a href="pink-balloon.html">Pink Balloon</a><br/><img alt="Pink Balloon" src="img/Pink_Balloon.png" width="40"/></div>
</th>
<th style="text-align:center"><div id="Red_Balloon"><a href="red-balloon.html">Red Balloon</a><br/><img alt="Red Balloon" src="img/Red_Balloon.png" width="40"/></div>
</th>
<th style="text-align:center"><div id="White_Balloon"><a href="white-balloon.html">White Balloon</a><br/><img alt="White Balloon" src="img/White_Balloon.png" width="40"/></div>
</th>
<th style="text-align:center"><div id="Black_Balloon"><a href="black-balloon.html">Black Balloon</a><br/><img alt="Black Balloon" src="img/Black_Balloon.png" width="40"/></div>
</th>
<th style="text-align:center"><div id="Blue_Balloon">Blue Balloon</div>
</th>
<th style="text-align:center">Gold Balloon
</th></tr>
<tr>
<td><b>Count</b><br/>(How many can be on the field at once)
</td>
<td>1 per player
</td>
<td>1 per player
</td>
<td>1 per player
</td>
<td>1 per player
</td>
<td>Unlimited
</td>
<td>Unlimited
</td></tr>
<tr>
<td><b>Capacity</b><br/>
<p>(How much pollen the balloon can hold)
</p>
</td>
<td>Player's Capacity x1
</td>
<td>Player's Capacity x5
</td>
<td>Player's Capacity x10
</td>
<td>Player's Capacity x25
</td>
<td>Player's Capacity<br/>x0.1666...
</td>
<td>x1.25 Blue Balloon (From own bee)<br/>Player's Capacity x0.05 (1/20) (From another player)
</td></tr>
<tr>
<td><b>Time Limit</b><br/>(How long before the balloon returns to the hive)
</td>
<td>3 minutes
</td>
<td>3 minutes
</td>
<td>5 minutes
</td>
<td>5 minutes
</td>
<td>20 seconds (+2 per level)
</td>
<td>20 seconds (+2 per level)
<div style="clear:both"></div> 20 seconds (From another player)
</td></tr>
<tr>
<td><b>Boost</b><br/>(How much pollen is boosted when going into the balloon)
</td>
<td>x2
</td>
<td>+10% (+20% if red) (assumed)
</td>
<td>+10% (+20% if white) (assumed)
</td>
<td>x4
</td>
<td>+10% (+20% if blue)
</td>
<td>Unknown (increases with level)
</td></tr>
<tr>
<td><b>Obtainment</b> (How each balloon is obtained)
</td>
<td>Drop from <a href="mobs.html">Mobs</a>
</td>
<td>Drop from <a href="mobs.html">Mobs</a>
</td>
<td>Drop from <a href="mobs.html">Mobs</a>
</td>
<td>Drop from <a href="mobs.html">Mobs</a>
</td>
<td>Summoned by <a href="buoyant-bee.html">Buoyant Bee's</a> <a href="ability-tokens.html#Inflate_Balloons">Inflate Balloons</a>
</td>
<td>Summoned by <a href="gifted-bee.html">Gifted</a> Buoyant Bee's Inflate Balloons or <a href="ability-tokens.html#Surprise_Party">Surprise Party</a>
</td></tr></tbody></table>

## Audio

The sounds Inflate Balloons make.

## Trivia

* If a balloon of any color is used and the player leaves the game, the balloon will disappear.
* Balloons are the only non-limited/event items that aren't in crafting recipes. They also cannot be donated.
* No matter what color balloon is used, when it arrives at the hive it will always turn blue.
* Balloons are currently only obtainable through quests and mobs.
* When converting at the hive, it is possible to glitch the Balloon Blessing. When converting the balloon, wait for the balloon to disappear, but leave the hive before it is finished converting. This will make the game put back the balloon in the hive with the same Balloon Blessing, yet give the Balloon Blessing buff, effectively duplicating the balloon.
* It is possible to get multiple "🎈The hive balloon refreshed your Balloon Blessing!" messages in 1 hive conversion as long as there are new balloons coming to the hive at the correct time.
