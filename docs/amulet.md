---
title: "Amulet"
tags: ["Pages with broken file links", "Amulet", "Mechanics", "Items", "Accessories"]
---

# Amulet

This piece of content contains information obtained through datamining.

Due to the nature of the information, details may be inaccurate or outdated.

Datamined information: How Amulets are generated. — December 19th, 2024

<figure class="thumb" style="width: 246px" typeof="mw:File/Thumb">  <figcaption class="thumbcaption"> <p class="caption">The scheme for the Ant Amulet.</p> </figcaption> </figure>

An **amulet** is an item introduced in the [2018-07-11 update](updates.md#2018-07-11). They grant several [buffs](buffs-debuffs.md) to the player and/or their [bees](bees.md), and can be obtained by completing certain special challenges.

## Obtaining

Collecting an amulet will bring up a table with the old and new amulets' stats, and the option to keep the old amulet or replace it. The scheme on the left shows an example table, with the player's amulet type as well as other rewards. If the player has obtained the amulet from the Ant Challenge or Stick Bug Challenge, their score will be shown above the rewards.

Clicking "**Keep Old**" will cause the player to keep their current amulet and clicking "**Replace**" will cause the player to receive a confirmation message asking if they want to replace it. If the player has agreed to replace their amulet after the confirmation message, the player's old amulet will be replaced with the new one. **This cannot be reversed**. Note that the drops will still be received even if the player didn't replace their amulet. If two or more tables are shown, the previous table(s) are closed, and the newest table is displayed. As of the [2020-06-06 update](updates.md#2020-06-06), a confirmation message will now pop up if the player tries to replace an amulet if they already had that type of amulet, and, as of the [2021-12-26 update](updates.md#2021-12-26), disconnecting while a recently generated amulet is undecided gives the player another chance to choose upon going back in a server.

## Generation

Amulets are generated with a given quality, which changes based on doing certain actions (for example, different scores yield proportionally different qualities, with a limit). Increasing the quality of an amulet will improve the probability of getting a better amulet. Note that this does not eliminate the possibility of getting a worse amulet.

Details of how this works are provided below. For the raw data of every amulet, see Module:Amulet Stats/data.

### Choosing Stats

An amulet's stats can be split into multiple stat groups. When an amulet is generated, it picks out a number of stats from each group to put on the amulet. Some stat groups will only appear with a certain probability.

After a stat is picked, it checks if it has a probability of appearing (different from the probability of the stat group it's in); if it does, it may randomly remove itself from the amulet based on the probability. This is why some amulets may have a lower number of stats than expected.

As of currently, this process is not influenced by the amulet's quality.

### Getting Stat Strength

Picked stats on an amulet go through a process to determine its strength, before the amulet is given to the player. The strength of the stats are influenced by the amulet's quality, by placing a heavy bias at a certain value that increases with the amulet's quality, making it so the stat's strength are more likely to be near that bias.

More specifically:

* Every stat have a *bias* table, which consists of 2 values, dubbed *biasQuality* and *biasDirect* respectively.
  * A higher *biasQuality* makes it so the amulet's quality have a bigger effect on the stat's bias, and vice versa.
  * A higher *biasDirect* directly affects the stat's bias, regardless of the amuelet's quality.
  * The default value for both variables (assuming one isn't assigned by the game) is 1.
* The bias is calculated by the formula: 

  b
  i
  a
  s
  =
  m
  i
  n
  V
  a
  l
  u
  e
  +
  (
  m
  a
  x
  V
  a
  l
  u
  e
  −
  m
  i
  n
  V
  a
  l
  u
  e
  )
  ×
  b
  i
  a
  s
  D
  i
  r
  e
  c
  t
  ×

  q
  u
  a
  l
  i
  t
  y

  max
  (
  1
  ,
  b
  i
  a
  s
  Q
  u
  a
  l
  i
  t
  y
  ×
  (
  1
  −
  q
  u
  a
  l
  i
  t
  y
  )
  )
  {\displaystyle bias=minValue+(maxValue-minValue)\times biasDirect\times {\frac {quality}{\max(1,biasQuality\times (1-quality))}}}
  , where *minValue* and *maxValue* are the minimum and maximum possible values of the stat's strength.

After that, the RandomBias function is called with the following paramenters, and the result is rounded to the stat's resolution interval to give the stat's strength:  
`randomBias(minValue, maxValue, bias, 1)`  
For more information on how this function works, see the designated module page.

## Amulets

*Certain features on articles may be non-functional due to FANDOM's discontinued support of TabViews. Please visit each article separately for a better experience.*
<tabview>
King Beetle Amulet
Star Amulet
Ant Amulet
Moon Amulet
Shell Amulet
Stick Bug Amulet
Cog Amulet
</tabview>

## Gallery

<div class="wikia-gallery wikia-gallery-caption-below wikia-gallery-position-left wikia-gallery-spacing-medium wikia-gallery-border-small wikia-gallery-captions-left wikia-gallery-caption-size-medium" data-seq-no="0" hash="cd6d29f70319ecffa33c04daf914c83b" id="gallery-0"><div class="wikia-gallery-caption"></div><div class="wikia-gallery-item" style="width:187px; "><div class="thumb" style="height:187px;"><div class="gallery-image-wrapper accent" id="Equipnewamulet-png" style="position: relative; height:185px; width:185px;"><span style="line-height: 1;">Equipnewamulet.png</span></div></div><div class="lightbox-caption" style="width:185px;">The confirmation message that appears when the player wants to replace their amulet.</div></div><div class="wikia-gallery-item" style="width:187px; "><div class="thumb" style="height:187px;"><div class="gallery-image-wrapper accent" id="Amulet_disconnection_message-png" style="position: relative; height:185px; width:185px;"><span style="line-height: 1;">Amulet disconnection message.png</span></div></div><div class="lightbox-caption" style="width:185px;">The message that appears when a player joins a server after disconnecting with an undecided amulet.</div></div><div class="wikia-gallery-item" style="width:187px; "><div class="thumb" style="height:187px;"><div class="gallery-image-wrapper accent" id="Black_Supreme_Amulets-png" style="position: relative; height:185px; width:185px;"><span style="line-height: 1;">Black Supreme Amulets.png</span></div></div><div class="lightbox-caption" style="width:185px;">A visual bug where the Supreme Star and Ant Amulets are colored black.</div></div></div>

## Trivia

* Supreme amulets are the only amulets that change color slightly.
  * Sometimes, a rare visual bug will cause a supreme amulet to appear black. There is currently no known cause of this.
