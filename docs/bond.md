---
title: "Bond"
tags: ["Mechanics"]
---

# Bond

![Bond](img/Bond.png){ align=right width=150 }



**Bond** is a [mechanic](mechanics.md) that is equivalent to the leveling system found in many other games. When [bees](bees.md) have a high enough bond with the player, they will level up, gaining the following boosts per level above 1:

* +5% [gather amount](stats.md#Gather_Amount).
* +10% [conversion amount](stats.md#Production_Amount).
* +5% [energy](energy.md).
* +3% [movespeed](stats.md#Speed).

Bond can be checked at any time by clicking on the bee's [hive slot](hive-slot.md) and it will show the bee's bond and [stats](stats.md).

A bee will automatically gain bond when collecting [pollen](pollen.md) in a [field](fields.md). When collecting pollen, each bee type has different opinions of each field and either likes, is neutral toward, or dislikes any given field. If a bee has a sad [emoticon](emoticons.md) over its head, it means that the bee does not like that field and will gain only minimal bond from collecting pollen in that field. If it has a happy emoticon instead, it likes the field and will gain extra bond. If it doesn't have an emoticon at all, it's neutral towards that field and will gain the usual amount of bond. Bees can be fed [treats](treats.md) to increase the bee's bond by 10, 25, 50, 100, 250, 500, or 1000 depending on the type of treat the bee is fed. If the player feeds a bee its favorite treat, it will gain double the amount of bond it would otherwise get, as well as having a very low chance to become [gifted](gifted-bee.md) or [mutated](mutation.md). Bond is also rewarded from defeating [mobs](mobs.md) and collecting a [Puppy Love](ability-tokens.md#Puppy_Love) token from [Puppy Bee](puppy-bee.md).

The amount of bond a bee can get from [treats](treats.md) can also be increased via the gifted [Puppy Bee's](puppy-bee.md) ability, giving a 20% boost to all bond, and one of the [Moon Amulet's](moon-amulet.md) abilities to increase bond by 10% from treats. The [Reindeer antler beequip](reindeer-antlers.md) also gives a 3% boost to all bond when equipped on the Puppy Bee. Having these buffs combined will give the player a total of a 33% boost to all bond for their bees, the max the player can achieve within the game.

A bee's bond does **not** reset after a level up; however, the information window only shows the bond required for the next level, so it can appear as if the bond went down to zero. (This is why when feeding a bee a treat, the server message on the lower right of the screen and the chat will have a different number than the bee information window.) A bee's rarity does not affect how much bond it needs to level up. Both a [Common](bees-common.md) and [Mythic bee](bees-mythic.md) at level 1 would require 10 bonds to level up. Bond does not diminish when using [Royal Jellies](royal-jelly.md) or replacing it with an [egg](egg.md).

Mobs also have levels, which affects whether a bee will hit, or miss its attack. If the bee has the same or a higher level than the mob, it is guaranteed to hit. If the bee is one level lower than the mob, it has a 50% chance to hit the mob. If the bee is two levels down, it only has a 25% chance to hit, and so on.

The formula to calculate the chance of hitting a mob is: \(1/[2^{(monsterlevel-beelevel)}]\)

The maximum level a bee can achieve is 25. It is generally difficult to reach levels above 20, but if a bee reaches the maximum level, the bee will still gain bond.

## Bee Levels

<table border="0" cellpadding="1" cellspacing="1" class="fandom-table article-table" style="height: 200px; width: 100%;">
<tbody><tr>
<th rowspan="2">Level
</th>
<th rowspan="2">Bond required for level
</th>
<th colspan="7"><img alt="Honey" height="35" src="img/Honey.png" width="35"/><a href="honey.html"><span class="color-template color-template-honey">Honey</span></a> cost for level (assuming each <img alt="Treat" height="35" src="img/Treat.png" width="35"/><a href="treat.html"><span class="color-template color-template-treat">Treat</span></a> is priced at 10K honey)
</th></tr>
<tr>
<th><b>Base</b>
</th>
<th>With Moon Amulet Max <b>(+10% BFT)</b>
</th>
<th>With Gifted Puppy Bee <b>(+20% BFT)</b>
</th>
<th>Both <b>(+30% BFT)</b>
</th>
<th>Base cost for 50 bees
</th>
<th>Cost for 50 bees with Gifted Puppy Bee <b>(+20% BFT)</b>
</th>
<th>Cost for 50 bees with Both <b>(+30% BFT)</b>
</th></tr>
<tr>
<td>1
</td>
<td>0
</td>
<td><b>0</b>
</td>
<td>0
</td>
<td>0
</td>
<td>0
</td>
<td><b>0</b>
</td>
<td><b>0</b>
</td>
<td><b>0</b>
</td></tr>
<tr>
<td>2
</td>
<td>10
</td>
<td><b><span style="border-bottom:1px dotted;" title="10,000">10K</span></b>
</td>
<td><span style="border-bottom:1px dotted;" title="9,091">9.09K</span>
</td>
<td><span style="border-bottom:1px dotted;" title="8,333">8.33K</span>
</td>
<td><span style="border-bottom:1px dotted;" title="7,692">7.69K</span>
</td>
<td><b>500K</b>
</td>
<td><b>416.7K</b>
</td>
<td><b>384.6K</b>
</td></tr>
<tr>
<td>3
</td>
<td>40
</td>
<td><b><span style="border-bottom:1px dotted;" title="40,000">40K</span></b>
</td>
<td><span style="border-bottom:1px dotted;" title="36,364">36.4K</span>
</td>
<td><span style="border-bottom:1px dotted;" title="33,333">33.3K</span>
</td>
<td><span style="border-bottom:1px dotted;" title="30,769">30.8K</span>
</td>
<td><b>2M</b>
</td>
<td><b>1.667M</b>
</td>
<td><b>1.538M</b>
</td></tr>
<tr>
<td>4
</td>
<td>200
</td>
<td><b><span style="border-bottom:1px dotted;" title="200,000">200K</span></b>
</td>
<td><span style="border-bottom:1px dotted;" title="181,818">182K</span>
</td>
<td><span style="border-bottom:1px dotted;" title="166,667">167K</span>
</td>
<td><span style="border-bottom:1px dotted;" title="153,846">154K</span>
</td>
<td><b>10M</b>
</td>
<td><b>8.333M</b>
</td>
<td><b>7.692M</b>
</td></tr>
<tr>
<td>5
</td>
<td>750
</td>
<td><b><span style="border-bottom:1px dotted;" title="750,000">750K</span></b>
</td>
<td><span style="border-bottom:1px dotted;" title="681,818">682K</span>
</td>
<td><span style="border-bottom:1px dotted;" title="625,000">625K</span>
</td>
<td><span style="border-bottom:1px dotted;" title="576,923">577K</span>
</td>
<td><b>37.5M</b>
</td>
<td><b>31.25M</b>
</td>
<td><b>28.846M</b>
</td></tr>
<tr>
<td>6
</td>
<td>4,000
</td>
<td><b><span style="border-bottom:1px dotted;" title="4,000,000">4M</span></b>
</td>
<td><span style="border-bottom:1px dotted;" title="3,636,364">3.64M</span>
</td>
<td><span style="border-bottom:1px dotted;" title="3,333,333">3.33M</span>
</td>
<td><span style="border-bottom:1px dotted;" title="3,076,923">3.08M</span>
</td>
<td><b>200M</b>
</td>
<td><b>166.667M</b>
</td>
<td><b>153.846M</b>
</td></tr>
<tr>
<td>7
</td>
<td>15,000
</td>
<td><b><span style="border-bottom:1px dotted;" title="15,000,000">15M</span></b>
</td>
<td><span style="border-bottom:1px dotted;" title="13,636,364">13.6M</span>
</td>
<td><span style="border-bottom:1px dotted;" title="12,500,000">12.5M</span>
</td>
<td><span style="border-bottom:1px dotted;" title="11,538,462">11.5M</span>
</td>
<td><b>750M</b>
</td>
<td><b>625M</b>
</td>
<td><b>576.923M</b>
</td></tr>
<tr>
<td>8
</td>
<td>60,000
</td>
<td><b><span style="border-bottom:1px dotted;" title="60,000,000">60M</span></b>
</td>
<td><span style="border-bottom:1px dotted;" title="54,545,455">54.5M</span>
</td>
<td><span style="border-bottom:1px dotted;" title="50,000,000">50M</span>
</td>
<td><span style="border-bottom:1px dotted;" title="46,152,846">46.2M</span>
</td>
<td><b>3B</b>
</td>
<td><b>2.5B</b>
</td>
<td><b>2.308B</b>
</td></tr>
<tr>
<td>9
</td>
<td>270,000
</td>
<td><b><span style="border-bottom:1px dotted;" title="270,000,000">270M</span></b>
</td>
<td><span style="border-bottom:1px dotted;" title="245,454,545">245M</span>
</td>
<td><span style="border-bottom:1px dotted;" title="225,000,000">225M</span>
</td>
<td><span style="border-bottom:1px dotted;" title="207,692,308">208M</span>
</td>
<td><b>13.5B</b>
</td>
<td><b>11.25B</b>
</td>
<td><b>10.385B</b>
</td></tr>
<tr>
<td>10
</td>
<td>450,000
</td>
<td><b><span style="border-bottom:1px dotted;" title="450,000,000">450M</span></b>
</td>
<td><span style="border-bottom:1px dotted;" title="409,090,909">409M</span>
</td>
<td><span style="border-bottom:1px dotted;" title="375,000,000">375M</span>
</td>
<td><span style="border-bottom:1px dotted;" title="346,153,846">346M</span>
</td>
<td><b>22.5B</b>
</td>
<td><b>18.75B</b>
</td>
<td><b>17.308B</b>
</td></tr>
<tr>
<td>11
</td>
<td>1,200,000
</td>
<td><b><span style="border-bottom:1px dotted;" title="1,200,000,000">1.2B</span></b>
</td>
<td><span style="border-bottom:1px dotted;" title="1,090,909,091">1.09B</span>
</td>
<td><span style="border-bottom:1px dotted;" title="1,000,000,000">1B</span>
</td>
<td><span style="border-bottom:1px dotted;" title="923,076,923">923M</span>
</td>
<td><b>60B</b>
</td>
<td><b>50B</b>
</td>
<td><b>46.154B</b>
</td></tr>
<tr>
<td>12
</td>
<td>2,000,000
</td>
<td><b><span style="border-bottom:1px dotted;" title="2,000,000,000">2B</span></b>
</td>
<td><span style="border-bottom:1px dotted;" title="1,818,181,818">1.82B</span>
</td>
<td><span style="border-bottom:1px dotted;" title="1,666,666,667">1.67B</span>
</td>
<td><span style="border-bottom:1px dotted;" title="1,538,461,538">1.54B</span>
</td>
<td><b>100B</b>
</td>
<td><b>83.333B</b>
</td>
<td><b>76.923B</b>
</td></tr>
<tr>
<td>13
</td>
<td>4,000,000
</td>
<td><b><span style="border-bottom:1px dotted;" title="4,000,000,000">4B</span></b>
</td>
<td><span style="border-bottom:1px dotted;" title="3,636,363,636">3.64B</span>
</td>
<td><span style="border-bottom:1px dotted;" title="3,333,333,333">3.33B</span>
</td>
<td><span style="border-bottom:1px dotted;" title="3,076,923,077">3.08B</span>
</td>
<td><b>200B</b>
</td>
<td><b>166.667B</b>
</td>
<td><b>153.846B</b>
</td></tr>
<tr>
<td>14
</td>
<td>7,000,000
</td>
<td><b><span style="border-bottom:1px dotted;" title="7,000,000,000">7B</span></b>
</td>
<td><span style="border-bottom:1px dotted;" title="6,363,636,364">6.36B</span>
</td>
<td><span style="border-bottom:1px dotted;" title="5,833,333,333">5.83B</span>
</td>
<td><span style="border-bottom:1px dotted;" title="5,384,615,385">5.38B</span>
</td>
<td><b>350B</b>
</td>
<td><b>291.667B</b>
</td>
<td><b>269.231B</b>
</td></tr>
<tr>
<td>15
</td>
<td>15,000,000
</td>
<td><b><span style="border-bottom:1px dotted;" title="15,000,000,000">15B</span></b>
</td>
<td><span style="border-bottom:1px dotted;" title="13,636,363,636">13.6B</span>
</td>
<td><span style="border-bottom:1px dotted;" title="12,500,000,000">12.5B</span>
</td>
<td><span style="border-bottom:1px dotted;" title="11,538,461,538">11.5B</span>
</td>
<td><b>750B</b>
</td>
<td><b>625B</b>
</td>
<td><b>576.923B</b>
</td></tr>
<tr>
<td>16
</td>
<td>120,000,000
</td>
<td><b><span style="border-bottom:1px dotted;" title="120,000,000,000">120B</span></b>
</td>
<td><span style="border-bottom:1px dotted;" title="109,090,909,091">109B</span>
</td>
<td><span style="border-bottom:1px dotted;" title="100,000,000,000">100B</span>
</td>
<td><span style="border-bottom:1px dotted;" title="92,307,692,308">92.3B</span>
</td>
<td><b>6T</b>
</td>
<td><b>5T</b>
</td>
<td><b>4.615T</b>
</td></tr>
<tr>
<td>17
</td>
<td>450,000,000
</td>
<td><b><span style="border-bottom:1px dotted;" title="450,000,000,000">450B</span></b>
</td>
<td><span style="border-bottom:1px dotted;" title="409,090,909,091">409B</span>
</td>
<td><span style="border-bottom:1px dotted;" title="375,000,000,000">375B</span>
</td>
<td><span style="border-bottom:1px dotted;" title="346,153,846,154">346B</span>
</td>
<td><b>22.5T</b>
</td>
<td><b>18.75T</b>
</td>
<td><b>17.308T</b>
</td></tr>
<tr>
<td>18
</td>
<td>1,900,000,000
</td>
<td><b><span style="border-bottom:1px dotted;" title="1,900,000,000,000">1.9T</span></b>
</td>
<td><span style="border-bottom:1px dotted;" title="1,727,272,727,273">1.72T</span>
</td>
<td><span style="border-bottom:1px dotted;" title="1,583,333,333,333">1.58T</span>
</td>
<td><span style="border-bottom:1px dotted;" title="1,461,538,461,538">1.46T</span>
</td>
<td><b>95T</b>
</td>
<td><b>79.167T</b>
</td>
<td><b>73.077T</b>
</td></tr>
<tr>
<td>19
</td>
<td>7,500,000,000
</td>
<td><b><span style="border-bottom:1px dotted;" title="7,500,000,000,000">7.5T</span></b>
</td>
<td><span style="border-bottom:1px dotted;" title="6,818,181,818,181">6.82T</span>
</td>
<td><span style="border-bottom:1px dotted;" title="6,250,000,000,000">6.25T</span>
</td>
<td><span style="border-bottom:1px dotted;" title="5,769,230,769,230">5.77T</span>
</td>
<td><b>375T</b>
</td>
<td><b>312.5T</b>
</td>
<td><b>288.462T</b>
</td></tr>
<tr>
<td>20
</td>
<td>15,000,000,000
</td>
<td><b><span style="border-bottom:1px dotted;" title="15,000,000,000,000">15T</span></b>
</td>
<td><span style="border-bottom:1px dotted;" title="13,636,363,636,364">13.6T</span>
</td>
<td><span style="border-bottom:1px dotted;" title="12,500,000,000,000">12.5T</span>
</td>
<td><span style="border-bottom:1px dotted;" title="11,538,461,538,462">11.5T</span>
</td>
<td><b>750T</b>
</td>
<td><b>625T</b>
</td>
<td><b>576.923T</b>
</td></tr>
<tr>
<td>21
</td>
<td>475,000,000,000
</td>
<td><b><span style="border-bottom:1px dotted;" title="475,000,000,000,000">475T</span></b>
</td>
<td><span style="border-bottom:1px dotted;" title="431,818,181,818,182">432T</span>
</td>
<td><span style="border-bottom:1px dotted;" title="395,833,333,333,333">396T</span>
</td>
<td><span style="border-bottom:1px dotted;" title="365,384,615,384,615">365T</span>
</td>
<td><b>23.75Qd</b>
</td>
<td><b>19.792Qd</b>
</td>
<td><b>18.27Qd</b>
</td></tr>
<tr>
<td>22
</td>
<td>4,500,000,000,000
</td>
<td><b><span style="border-bottom:1px dotted;" title="4,500,000,000,000,000">4.5Qd</span></b>
</td>
<td><span style="border-bottom:1px dotted;" title="4,090,909,090,909,091">4.09Qd</span>
</td>
<td><span style="border-bottom:1px dotted;" title="3,750,000,000,000,000">3.75Qd</span>
</td>
<td><span style="border-bottom:1px dotted;" title="3,461,538,461,538,462">3.46Qd</span>
</td>
<td><b>225Qd</b>
</td>
<td><b>187.5Qd</b>
</td>
<td><b>173.1Qd</b>
</td></tr>
<tr>
<td>23
</td>
<td>95,000,000,000,000
</td>
<td><b><span style="border-bottom:1px dotted;" title="95,000,000,000,000,000">95Qd</span></b>
</td>
<td><span style="border-bottom:1px dotted;" title="86,363,636,363,636,364">86.4Qd</span>
</td>
<td><span style="border-bottom:1px dotted;" title="79,166,666,666,666,667">79.2Qd</span>
</td>
<td><span style="border-bottom:1px dotted;" title="73,076,923,076,923,077">73.1Qd</span>
</td>
<td><b>4.75Qn</b>
</td>
<td><b>3.958Qn</b>
</td>
<td><b>3.654Qn</b>
</td></tr>
<tr>
<td>24
</td>
<td>900,000,000,000,000
</td>
<td><b><span style="border-bottom:1px dotted;" title="900,000,000,000,000,000">900Qd</span></b>
</td>
<td><span style="border-bottom:1px dotted;" title="818,181,818,181,818,181">818Qd</span>
</td>
<td><span style="border-bottom:1px dotted;" title="750,000,000,000,000,000">750Qd</span>
</td>
<td><span style="border-bottom:1px dotted;" title="692,307,692,307,692,307">692Qd</span>
</td>
<td><b>45Qn</b>
</td>
<td><b>37.5Qn</b>
</td>
<td><b>34.62Qn</b>
</td></tr>
<tr>
<td>25
</td>
<td>9,000,000,000,000,000
</td>
<td><b><span style="border-bottom:1px dotted;" title="9,000,000,000,000,000,000">9Qn</span></b>
</td>
<td><span style="border-bottom:1px dotted;" title="8,181,818,181,818,181,818">8.18Qn</span>
</td>
<td><span style="border-bottom:1px dotted;" title="7,500,000,000,000,000,000">7.5Qn</span>
</td>
<td><span style="border-bottom:1px dotted;" title="6,923,076,923,076,923,076">6.92Qn</span>
</td>
<td><b>450Qn</b>
</td>
<td><b>375Qn</b>
</td>
<td><b>346.2Qn</b>
</td></tr></tbody></table>

Alternatively, you can use this formula to determine the cost to level up your bees: \((\tfrac{10(BondForNextLevel)(NumberOfBees)}{BondFromTreats}-TreatsInInventory)\times 10000\)

You can also use this [calculator](https://www.desmos.com/calculator/k4utvtdloz).

  
Note that the sound is slightly faster in-game.

## Gallery

### Bee Wings

* Level 1 Bee wings do not exist, as the wings will have no decal.

## Trivia

* The maximum Bond from Treats currently possible is 133%: 100% as a base, 20% from Gifted [Puppy Bee's](puppy-bee.md) Hive Bonus, 10% from Moon Amulet and 3% from the [Reindeer Antlers](reindeer-antlers.md) Beequip.
* [Temporary bees](bees.md#Summoned_Bees) can still be leveled up.
* Prior to the 2018-11-25 update, the bee information page always showed the bee's total bond, not the current bond-to-next-level.
* Leveling a full hive of 50 bees from level 0 to level 25 would cost 500Qn [Honey](honey.md) (500 quintillion) honey in treats.
  * With the maximum Bond from Treats currently possible (133%), this cost could be reduced to about 376Qn [Honey](honey.md) (376 quintillion) honey in treats.

