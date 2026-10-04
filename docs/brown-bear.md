---
title: "Brown Bear"
tags: ["Pages with broken file links", "Removed Content", "NPC", "Bears", "Quest Giver", "Starter Zone"]
---

# Brown Bear

This piece of content contains information obtained through datamining.

Due to the nature of the information, details may be inaccurate or outdated.

<table class="infobox" style="font-size:12px; color:white; width:300px; background:#a58b59;padding:0; border:none; color:#FFF;">
<tbody><tr>
<td colspan="2" style="background-color:#684a12; font-size:2vh; text-align: center; padding: 15px 0; color:#FFF"><b>Brown Bear</b>
</td></tr>
<tr>
<td colspan="2"><center> <span typeof="mw:Error mw:File"></span></center>
</td></tr>
<tr>
<td colspan="2" style="background-color:#684a12; text-align:center">Overview
</td></tr>
<tr>
<td style="padding-left:5px;">Species
</td>
<td>Quest Bear
</td></tr>
<tr>
<td style="padding-left:5px;">Location
</td>
<td>Near the Clover Field and the Wealth Clock.
</td></tr>
<tr>
<td style="padding-left:5px;">Bee Prerequisites
</td>
<td>None
</td></tr>
<tr>
<td colspan="2" style="background-color:#684a12; text-align:center">Color Scheme
</td></tr>
<tr>
<td colspan="2">
<table>
<tbody><tr>
<td><div style="background:#634929; padding:50px 70px; color:#000; border-radius:10px 10px 0 0"> </div>
<div style="background:#FFF; padding:5px 0 20px 10px; color:#000; margin:0 auto; border-radius:0 0 10px 10px">
<p style="margin:0 auto; font-weight:700; font-size:150%; font-family:Source Sans Pro">Fur</p>
<p style="margin:0 auto;font-size: 90%; height: 15px; line-height: 150%;">#634929</p>
</div>
</td><td><div style="background: #554026; padding:50px 70px; color:#000; border-radius:10px 10px 0 0"> </div>
<div style="background:#FFF; padding:5px 0 20px 10px; color:#000; margin:0 auto; border-radius:0 0 10px 10px">
<p style="margin:0 auto; font-weight:700; font-size:150%; font-family:Source Sans Pro">Fur Shade</p>
<p style="margin:0 auto;font-size: 90%;height: 15px; line-height: 150%;">#554026</p>
</div>
</td></tr>
<tr>
<td><div style="background:linear-gradient(to bottom, #634929 15%, #C8A77F 85%); padding:50px 70px; color:#000; border-radius:10px 10px 0 0"> </div>
<div style="background:#FFF; padding:5px 0 5px 10px; color:#000; margin:0 auto; border-radius:0 0 10px 10px">
<p style="margin:0 auto; font-weight:700; font-size:150%; font-family:Source Sans Pro">Snout</p>
<p style="margin:0 auto;font-size: 90%;height: 15px; line-height: 150%;">#634929</p>
<p style="margin:0 auto;font-size: 90%;height: 15px; line-height: 100%;">#C8A77F</p>
</div>
</td><td><div style="background:#785d3d; padding:50px 70px; color:#000; border-radius:10px 10px 0 0"> </div>
<div style="background:#FFF; padding:5px 0 20px 10px; color:#000; margin:0 auto; border-radius:0 0 10px 10px">
<p style="margin:0 auto; font-weight:700; font-size:150%; font-family:Source Sans Pro">Torso</p>
<p style="margin:0 auto;font-size: 90%; height: 15px; line-height: 150%;">#785d3d</p>
</div>
</td></tr>
<tr>
<td><div style="background:#94744e; padding:50px 70px; color:#000; border-radius:10px 10px 0 0"> </div>
<div style="background:#FFF; padding:5px 0 20px 10px; color:#000; margin:0 auto; border-radius:0 0 10px 10px">
<p style="margin:0 auto; font-weight:700; font-size:150%; font-family:Source Sans Pro">Arms</p>
<p style="margin:0 auto;font-size: 90%;height: 15px; line-height: 150%;">#94744e</p>
</div>
</td><td><div style="background:#634b2f; padding:50px 70px; color:#000; border-radius:10px 10px 0 0"> </div>
<div style="background:#FFF; padding:5px 0 20px 10px; color:#000; margin:0 auto; border-radius:0 0 10px 10px">
<p style="margin:0 auto; font-weight:700; font-size:150%; font-family:Source Sans Pro">Legs</p>
<p style="margin:0 auto;font-size: 90%;height: 15px; line-height: 150%;">#634b2f</p>
</div>
</td></tr>

</tbody></table>
</td></tr></tbody></table>

**Brown Bear** is a [quest giver](quest-givers.md) and one of eight permanent bears that can be accessed in the game, the others being [Black Bear](black-bear.md), [Mother Bear](mother-bear.md), [Panda Bear](panda-bear.md), [Science Bear](science-bear.md), [Dapper Bear](dapper-bear.md), [Polar Bear](polar-bear.md), and [Spirit Bear](spirit-bear.md). He is located behind the [Clover Field](clover-field.md) and next to the [Wealth Clock](wealth-clock.md) and the Top Brown Bear Helpers leaderboard. His [quests](quests.md) primarily focus on collecting [pollen](pollen.md) from randomized [fields](fields.md). After initiating a quest, a new one will be available in 1 hour.

## Quests

Brown Bear is an infinite quest giver. His quests requires collecting pollen from a selection of fields, scaling up in difficulty the more the player completes, with the reward also getting bigger the more difficult it gets. Certain quests are only given if the player has reached a minimum number of bees.

### Scaling

The amount of quests the player has to collect from a field is defined by the function 

P
(
x
)
{\displaystyle P(x)}
, where 

x
{\displaystyle x}
 is a hard-coded number that is different for each quest. The value of 

P
(
x
)
{\displaystyle P(x)}
 scales with the number of Brown Bear quests the player has done.

The function 

P
(
x
)
{\displaystyle P(x)}
 is defined as follows:

* Let 

  c
  n
  t
  {\displaystyle cnt}
   be the number of Brown Bear quests the player has done as of claiming the quest.
* We define 3 variables:
  * b
    a
    s
    e
    =

    ⌊

    2500
    ×
    x
    +
    0.5
    100
    ⌋
    ×
    100
    {\displaystyle base=\left\lfloor {\frac {2500\times x+0.5}{100}}\right\rfloor \times 100}
  * i
    n
    c
    =

    ⌊

    5000
    ×
    x
    +
    0.5
    100
    ⌋
    ×
    100
    {\displaystyle inc=\left\lfloor {\frac {5000\times x+0.5}{100}}\right\rfloor \times 100}
  * m
    a
    x
    =

    ⌊

    10000000000000
    ×
    x
    +
    0.5
    100
    ⌋
    ×
    100
    {\displaystyle max=\left\lfloor {\frac {10000000000000\times x+0.5}{100}}\right\rfloor \times 100}
* Then, we take the following steps:
  * b
    a
    s
    e
    P
    o
    l
    l
    e
    n
    =
    b
    a
    s
    e
    +
    c
    n
    t
    ×
    i
    n
    c
    {\displaystyle basePollen=base+cnt\times inc}
  * Let 

    s
    c
    a
    l
    i
    n
    g
    {\displaystyle scaling}
     be equal to:
    * (

      c
      n
      t
      1000
      )

      4
      {\displaystyle {({\frac {cnt}{1000}})}^{4}}
       if 

      c
      n
      t
      1000
      <
      1
      {\displaystyle {\frac {cnt}{1000}}<1}
    * (

      c
      n
      t
      1000
      )

      2
      {\displaystyle {({\frac {cnt}{1000}})}^{2}}
       otherwise
  * r
    e
    q
    u
    i
    r
    e
    d
    P
    o
    l
    l
    e
    n
    =
    b
    a
    s
    e
    P
    o
    l
    l
    e
    n
    +
    (
    m
    a
    x
    −
    b
    a
    s
    e
    P
    o
    l
    l
    e
    n
    )
    ×
    s
    c
    a
    l
    i
    n
    g
    {\displaystyle requiredPollen=basePollen+(max-basePollen)\times scaling}
  * i
    n
    t
    e
    r
    v
    a
    l
    =

    10

    max
    (

    ⌊

    log

    10
    ⁡
    (
    r
    e
    q
    u
    i
    r
    e
    d
    P
    o
    l
    l
    e
    n
    )
    ⌋
    −
    1
    ,
    1
    )
    {\displaystyle interval=10^{\max(\left\lfloor \log \_{10}(requiredPollen)\right\rfloor -1,1)}}
  * r
    o
    u
    n
    d
    e
    d
    P
    o
    l
    l
    e
    n
    =

    ⌊

    r
    e
    q
    u
    i
    r
    e
    d
    P
    o
    l
    l
    e
    n

    i
    n
    t
    e
    r
    v
    a
    l
    +
    0.5
    ⌋
    ×
    i
    n
    t
    e
    r
    v
    a
    l
    {\displaystyle roundedPollen=\left\lfloor {\frac {requiredPollen}{interval}}+0.5\right\rfloor \times interval}
  * The function returns 

    r
    o
    u
    n
    d
    e
    d
    P
    o
    l
    l
    e
    n
    {\displaystyle roundedPollen}
    .

### Possible quests

There are a total of 41 different quests Brown Bear can give.

<table class="article-table mw-collapsible mw-collapsed">
<tbody><tr>
<th>Quest name
</th>
<th>Minimum number of<br/>bees required
</th>
<th>Requirements
</th></tr>
<tr>
<td>Brown Bear: Sun-Dand
</td>
<td>0
</td>
<td>
<ul><li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.3)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.3</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.3)}</annotation>
</semantics>
</math></span></span> Pollen from Sunflower Field.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.3)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.3</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.3)}</annotation>
</semantics>
</math></span></span> Pollen from Dandelion Field.</li></ul>
</td></tr>
<tr>
<td>Brown Bear: Mush-Clove
</td>
<td>0
</td>
<td>
<ul><li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.5)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.5</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.5)}</annotation>
</semantics>
</math></span></span> Pollen from Clover Field.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.3)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.3</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.3)}</annotation>
</semantics>
</math></span></span> Pollen from Mushroom Field.</li></ul>
</td></tr>
<tr>
<td>Brown Bear: Bluf-Clove
</td>
<td>0
</td>
<td>
<ul><li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.6)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.6</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.6)}</annotation>
</semantics>
</math></span></span> Pollen from Clover Field.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.3)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.3</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.3)}</annotation>
</semantics>
</math></span></span> Pollen from Blue Flower Field.</li></ul>
</td></tr>
<tr>
<td>Brown Bear: White-Mush
</td>
<td>0
</td>
<td>
<ul><li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.6)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.6</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.6)}</annotation>
</semantics>
</math></span></span> White Pollen.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.3)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.3</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.3)}</annotation>
</semantics>
</math></span></span> Pollen from Mushroom Field.</li></ul>
</td></tr>
<tr>
<td>Brown Bear: White-Bluf
</td>
<td>0
</td>
<td>
<ul><li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.6)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.6</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.6)}</annotation>
</semantics>
</math></span></span> White Pollen.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.3)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.3</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.3)}</annotation>
</semantics>
</math></span></span> Pollen from Blue Flower Field.</li></ul>
</td></tr>
<tr>
<td>Brown Bear: Solo-Clove
</td>
<td>15
</td>
<td>
<ul><li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(1)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>1</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(1)}</annotation>
</semantics>
</math></span></span> Pollen from Clover Field.</li></ul>
</td></tr>
<tr>
<td>Brown Bear: Straw-Spide
</td>
<td>5
</td>
<td>
<ul><li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.5)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.5</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.5)}</annotation>
</semantics>
</math></span></span> Pollen from Strawberry Field.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.5)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.5</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.5)}</annotation>
</semantics>
</math></span></span> Pollen from Spider Field.</li></ul>
</td></tr>
<tr>
<td>Brown Bear: Bamb-Spide
</td>
<td>5
</td>
<td>
<ul><li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.5)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.5</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.5)}</annotation>
</semantics>
</math></span></span> Pollen from Bamboo Field.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.5)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.5</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.5)}</annotation>
</semantics>
</math></span></span> Pollen from Spider Field.</li></ul>
</td></tr>
<tr>
<td>Brown Bear: White-Bamb-Mush
</td>
<td>5
</td>
<td>
<ul><li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.6)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.6</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.6)}</annotation>
</semantics>
</math></span></span> White Pollen.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.4)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.4</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.4)}</annotation>
</semantics>
</math></span></span> Pollen from Bamboo Field.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.3)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.3</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.3)}</annotation>
</semantics>
</math></span></span> Pollen from Mushroom Field.</li></ul>
</td></tr>
<tr>
<td>Brown Bear: Red-Straw-Sun
</td>
<td>5
</td>
<td>
<ul><li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.6)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.6</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.6)}</annotation>
</semantics>
</math></span></span> Red Pollen.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.3)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.3</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.3)}</annotation>
</semantics>
</math></span></span> Pollen from Strawberry Field.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.2)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.2</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.2)}</annotation>
</semantics>
</math></span></span> Pollen from Sunflower Field.</li></ul>
</td></tr>
<tr>
<td>Brown Bear: Blue-Clov-Spide
</td>
<td>5
</td>
<td>
<ul><li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.6)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.6</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.6)}</annotation>
</semantics>
</math></span></span> Blue Pollen.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.3)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.3</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.3)}</annotation>
</semantics>
</math></span></span> Pollen from Clover Field.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.2)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.2</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.2)}</annotation>
</semantics>
</math></span></span> Pollen from Spider Field.</li></ul>
</td></tr>
<tr>
<td>Brown Bear: Solo-Spide
</td>
<td>5
</td>
<td>
<ul><li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(1.1)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>1.1</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(1.1)}</annotation>
</semantics>
</math></span></span> Pollen from Spider Field.</li></ul>
</td></tr>
<tr>
<td>Brown Bear: Solo-Straw
</td>
<td>5
</td>
<td>
<ul><li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(1.1)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>1.1</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(1.1)}</annotation>
</semantics>
</math></span></span> Pollen from Strawberry Field.</li></ul>
</td></tr>
<tr>
<td>Brown Bear: Solo-Bamb
</td>
<td>5
</td>
<td>
<ul><li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(1.1)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>1.1</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(1.1)}</annotation>
</semantics>
</math></span></span> Pollen from Bamboo Field.</li></ul>
</td></tr>
<tr>
<td>Brown Bear: Blue-Pinap-Clov
</td>
<td>10
</td>
<td>
<ul><li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.8)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.8</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.8)}</annotation>
</semantics>
</math></span></span> Blue Pollen.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.6)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.6</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.6)}</annotation>
</semantics>
</math></span></span> Pollen from Pineapple Patch.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.3)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.3</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.3)}</annotation>
</semantics>
</math></span></span> Pollen from Clover Field.</li></ul>
</td></tr>
<tr>
<td>Brown Bear: Red-Pinap-Dand
</td>
<td>10
</td>
<td>
<ul><li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.8)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.8</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.8)}</annotation>
</semantics>
</math></span></span> Red Pollen.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.6)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.6</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.6)}</annotation>
</semantics>
</math></span></span> Pollen from Pineapple Patch.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.2)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.2</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.2)}</annotation>
</semantics>
</math></span></span> Pollen from Dandelion Field.</li></ul>
</td></tr>
<tr>
<td>Brown Bear: Pinap-Bamb
</td>
<td>10
</td>
<td>
<ul><li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.6)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.6</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.6)}</annotation>
</semantics>
</math></span></span> Pollen from Pineapple Patch.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.5)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.5</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.5)}</annotation>
</semantics>
</math></span></span> Pollen from Bamboo Field.</li></ul>
</td></tr>
<tr>
<td>Brown Bear: Pinap-Straw
</td>
<td>10
</td>
<td>
<ul><li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.6)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.6</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.6)}</annotation>
</semantics>
</math></span></span> Pollen from Pineapple Patch.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.5)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.5</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.5)}</annotation>
</semantics>
</math></span></span> Pollen from Strawberry Field.</li></ul>
</td></tr>
<tr>
<td>Brown Bear: Solo-Cact
</td>
<td>15
</td>
<td>
<ul><li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(1.1)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>1.1</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(1.1)}</annotation>
</semantics>
</math></span></span> Pollen from Cactus Field.</li></ul>
</td></tr>
<tr>
<td>Brown Bear: White-Cact-Sun
</td>
<td>15
</td>
<td>
<ul><li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.8)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.8</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.8)}</annotation>
</semantics>
</math></span></span> White Pollen.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.6)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.6</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.6)}</annotation>
</semantics>
</math></span></span> Pollen from Cactus Field.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.3)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.3</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.3)}</annotation>
</semantics>
</math></span></span> Pollen from Sunflower Field.</li></ul>
</td></tr>
<tr>
<td>Brown Bear: Blue-Pump-Bluf
</td>
<td>15
</td>
<td>
<ul><li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.8)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.8</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.8)}</annotation>
</semantics>
</math></span></span> Blue Pollen.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.6)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.6</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.6)}</annotation>
</semantics>
</math></span></span> Pollen from Pumpkin Patch.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.3)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.3</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.3)}</annotation>
</semantics>
</math></span></span> Pollen from Blue Flower Field.</li></ul>
</td></tr>
<tr>
<td>Brown Bear: Red-Cact-Rose
</td>
<td>15
</td>
<td>
<ul><li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.8)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.8</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.8)}</annotation>
</semantics>
</math></span></span> Red Pollen.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.5)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.5</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.5)}</annotation>
</semantics>
</math></span></span> Pollen from Cactus Field.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.5)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.5</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.5)}</annotation>
</semantics>
</math></span></span> Pollen from Rose Field.</li></ul>
</td></tr>
<tr>
<td>Brown Bear: Blue-Pine-Mush
</td>
<td>15
</td>
<td>
<ul><li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.8)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.8</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.8)}</annotation>
</semantics>
</math></span></span> Blue Pollen.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.6)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.6</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.6)}</annotation>
</semantics>
</math></span></span> Pollen from Pine Tree Forest.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.4)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.4</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.4)}</annotation>
</semantics>
</math></span></span> Pollen from Mushroom Field.</li></ul>
</td></tr>
<tr>
<td>Brown Bear: White-Pine-Straw
</td>
<td>15
</td>
<td>
<ul><li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.8)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.8</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.8)}</annotation>
</semantics>
</math></span></span> White Pollen.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.6)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.6</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.6)}</annotation>
</semantics>
</math></span></span> Pollen from Pine Tree Forest.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.4)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.4</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.4)}</annotation>
</semantics>
</math></span></span> Pollen from Strawberry Field.</li></ul>
</td></tr>
<tr>
<td>Brown Bear: White-Rose-Bamb
</td>
<td>15
</td>
<td>
<ul><li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.8)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.8</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.8)}</annotation>
</semantics>
</math></span></span> White Pollen.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.6)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.6</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.6)}</annotation>
</semantics>
</math></span></span> Pollen from Rose Field.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.4)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.4</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.4)}</annotation>
</semantics>
</math></span></span> Pollen from Bamboo Field.</li></ul>
</td></tr>
<tr>
<td>Brown Bear: Red-Pump-Dand
</td>
<td>15
</td>
<td>
<ul><li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.8)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.8</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.8)}</annotation>
</semantics>
</math></span></span> Red Pollen.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.6)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.6</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.6)}</annotation>
</semantics>
</math></span></span> Pollen from Pumpkin Patch.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.4)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.4</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.4)}</annotation>
</semantics>
</math></span></span> Pollen from Dandelion Field.</li></ul>
</td></tr>
<tr>
<td>Brown Bear: Red-Mount-Mush
</td>
<td>25
</td>
<td>
<ul><li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.8)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.8</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.8)}</annotation>
</semantics>
</math></span></span> Red Pollen.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.7)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.7</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.7)}</annotation>
</semantics>
</math></span></span> Pollen from Mountain Top Field.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.4)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.4</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.4)}</annotation>
</semantics>
</math></span></span> Pollen from Mushroom Field.</li></ul>
</td></tr>
<tr>
<td>Brown Bear: Blue-Mount-Bluf
</td>
<td>25
</td>
<td>
<ul><li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.8)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.8</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.8)}</annotation>
</semantics>
</math></span></span> Blue Pollen.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.7)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.7</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.7)}</annotation>
</semantics>
</math></span></span> Pollen from Mountain Top Field.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.4)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.4</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.4)}</annotation>
</semantics>
</math></span></span> Pollen from Blue Flower Field.</li></ul>
</td></tr>
<tr>
<td>Brown Bear: Solo-Mount
</td>
<td>25
</td>
<td>
<ul><li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(1.2)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>1.2</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(1.2)}</annotation>
</semantics>
</math></span></span> Pollen from Mountain Top Field.</li></ul>
</td></tr>
<tr>
<td>Brown Bear: Mount-Spide-Rose-Pinap
</td>
<td>25
</td>
<td>
<ul><li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.4)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.4</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.4)}</annotation>
</semantics>
</math></span></span> Pollen from Mountain Top Field.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.2)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.2</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.2)}</annotation>
</semantics>
</math></span></span> Pollen from Spider Field.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.2)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.2</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.2)}</annotation>
</semantics>
</math></span></span> Pollen from Rose Field.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.2)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.2</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.2)}</annotation>
</semantics>
</math></span></span> Pollen from Pineapple Patch.</li></ul>
</td></tr>
<tr>
<td>Brown Bear: Mount-Bamb-Pump-Sun
</td>
<td>25
</td>
<td>
<ul><li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.4)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.4</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.4)}</annotation>
</semantics>
</math></span></span> Pollen from Mountain Top Field.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.2)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.2</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.2)}</annotation>
</semantics>
</math></span></span> Pollen from Bamboo Field.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.2)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.2</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.2)}</annotation>
</semantics>
</math></span></span> Pollen from Pumpkin Patch.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.2)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.2</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.2)}</annotation>
</semantics>
</math></span></span> Pollen from Sunflower Field.</li></ul>
</td></tr>
<tr>
<td>Brown Bear: Blue-Coco-Bluf
</td>
<td>35
</td>
<td>
<ul><li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.8)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.8</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.8)}</annotation>
</semantics>
</math></span></span> Blue Pollen.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.7)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.7</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.7)}</annotation>
</semantics>
</math></span></span> Pollen from Coconut Field.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.4)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.4</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.4)}</annotation>
</semantics>
</math></span></span> Pollen from Blue Flower Field.</li></ul>
</td></tr>
<tr>
<td>Brown Bear: Red-Coco-Mush
</td>
<td>35
</td>
<td>
<ul><li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.8)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.8</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.8)}</annotation>
</semantics>
</math></span></span> Red Pollen.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.7)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.7</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.7)}</annotation>
</semantics>
</math></span></span> Pollen from Coconut Field.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.4)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.4</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.4)}</annotation>
</semantics>
</math></span></span> Pollen from Mushroom Field.</li></ul>
</td></tr>
<tr>
<td>Brown Bear: White-Pepp-Pinap
</td>
<td>35
</td>
<td>
<ul><li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.8)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.8</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.8)}</annotation>
</semantics>
</math></span></span> White Pollen.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.7)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.7</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.7)}</annotation>
</semantics>
</math></span></span> Pollen from Pepper Patch.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.4)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.4</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.4)}</annotation>
</semantics>
</math></span></span> Pollen from Pineapple Patch.</li></ul>
</td></tr>
<tr>
<td>Brown Bear: White-Pepp-Bamb
</td>
<td>35
</td>
<td>
<ul><li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.8)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.8</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.8)}</annotation>
</semantics>
</math></span></span> White Pollen.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.7)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.7</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.7)}</annotation>
</semantics>
</math></span></span> Pollen from Pepper Patch.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.4)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.4</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.4)}</annotation>
</semantics>
</math></span></span> Pollen from Bamboo Field.</li></ul>
</td></tr>
<tr>
<td>Brown Bear: Coco-Pepp-Clove-Pine
</td>
<td>35
</td>
<td>
<ul><li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.3)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.3</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.3)}</annotation>
</semantics>
</math></span></span> Pollen from Coconut Field.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.3)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.3</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.3)}</annotation>
</semantics>
</math></span></span> Pollen from Pepper Patch.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.3)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.3</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.3)}</annotation>
</semantics>
</math></span></span> Pollen from Clover Field.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.3)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.3</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.3)}</annotation>
</semantics>
</math></span></span> Pollen from Pine Tree Forest.</li></ul>
</td></tr>
<tr>
<td>Brown Bear: Coco-Mount-Cact-Rose
</td>
<td>35
</td>
<td>
<ul><li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.3)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.3</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.3)}</annotation>
</semantics>
</math></span></span> Pollen from Coconut Field.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.3)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.3</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.3)}</annotation>
</semantics>
</math></span></span> Pollen from Mountain Top Field.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.3)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.3</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.3)}</annotation>
</semantics>
</math></span></span> Pollen from Cactus Field.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.3)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.3</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.3)}</annotation>
</semantics>
</math></span></span> Pollen from Rose Field.</li></ul>
</td></tr>
<tr>
<td>Brown Bear: Solo-Coco
</td>
<td>35
</td>
<td>
<ul><li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(1.2)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>1.2</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(1.2)}</annotation>
</semantics>
</math></span></span> Pollen from Coconut Field.</li></ul>
</td></tr>
<tr>
<td>Brown Bear: Solo-Stump
</td>
<td>40
</td>
<td>
<ul><li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(1.2)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>1.2</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(1.2)}</annotation>
</semantics>
</math></span></span> Pollen from Stump Field.</li></ul>
</td></tr>
<tr>
<td>Brown Bear: Red-Stump-Mush
</td>
<td>40
</td>
<td>
<ul><li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.8)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.8</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.8)}</annotation>
</semantics>
</math></span></span> Red Pollen.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.7)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.7</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.7)}</annotation>
</semantics>
</math></span></span> Pollen from Stump Field.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.3)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.3</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.3)}</annotation>
</semantics>
</math></span></span> Pollen from Mushroom Field.</li></ul>
</td></tr>
<tr>
<td>Brown Bear: Blue-Stump-Rose
</td>
<td>40
</td>
<td>
<ul><li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.8)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.8</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.8)}</annotation>
</semantics>
</math></span></span> Red Pollen.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.7)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.7</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.7)}</annotation>
</semantics>
</math></span></span> Pollen from Stump Field.</li>
<li>Collect <span class="mwe-math-element"><span class="mwe-math-mathml-inline mwe-math-mathml-a11y" style="display: none;"><math alttext="{\displaystyle P(0.3)}" xmlns="http://www.w3.org/1998/Math/MathML">
<semantics>
<mrow class="MJX-TeXAtom-ORD">
<mstyle displaystyle="true" scriptlevel="0">
<mi>P</mi>
<mo stretchy="false">(</mo>
<mn>0.3</mn>
<mo stretchy="false">)</mo>
</mstyle>
</mrow>
<annotation encoding="application/x-tex">{\displaystyle P(0.3)}</annotation>
</semantics>
</math></span></span> Pollen from Rose Field.</li></ul>
</td></tr></tbody></table>

## Rewards

Each quest always rewards 1 [Ticket](ticket.md), and increasing amounts of [Royal Jellies](royal-jelly.md) and [Honey](honey.md) depending on the difficulty of the current quest. Every 3 quests, the player is also rewarded 3 [Jelly Beans](jelly-beans.md). Certain thresholds may reward other items as well.

The amount of [Royal Jellies](royal-jelly.md) rewarded can be found using the below table.

<table class="article-table mw-collapsible mw-collapsed">
<tbody><tr>
<th>Number of quests completed
</th>
<th><span typeof="mw:Error mw:File"></span><a href="royal-jelly.html"><span class="color-template color-template-royal-jelly color-template-background-clip">Royal Jelly</span></a> amount
</th></tr>
<tr>
<td>0-5</td>
<td>1
</td></tr>
<tr>
<td>6-15</td>
<td>2
</td></tr>
<tr>
<td>16-25</td>
<td>3
</td></tr>
<tr>
<td>26-30</td>
<td>5
</td></tr>
<tr>
<td>31-40</td>
<td>10
</td></tr>
<tr>
<td>41-50</td>
<td>20
</td></tr>
<tr>
<td>51-60</td>
<td>30
</td></tr>
<tr>
<td>61-75</td>
<td>50
</td></tr>
<tr>
<td>76-100</td>
<td>100
</td></tr>
<tr>
<td>101-110</td>
<td>125
</td></tr>
<tr>
<td>111-120</td>
<td>150
</td></tr>
<tr>
<td>121-125</td>
<td>250
</td></tr>
<tr>
<td>126-150</td>
<td>500
</td></tr>
<tr>
<td>151-200</td>
<td>750
</td></tr>
<tr>
<td>201-225</td>
<td>1,000
</td></tr>
<tr>
<td>226-250</td>
<td>1,500
</td></tr>
<tr>
<td>251-300</td>
<td>2,000
</td></tr>
<tr>
<td>301-350</td>
<td>3,000
</td></tr>
<tr>
<td>351-400</td>
<td>5,000
</td></tr>
<tr>
<td>401-450</td>
<td>7,500
</td></tr>
<tr>
<td>451-500</td>
<td>10,000
</td></tr>
<tr>
<td>501-525</td>
<td>12,500
</td></tr>
<tr>
<td>526-550</td>
<td>15,000
</td></tr>
<tr>
<td>551-575</td>
<td>25,000
</td></tr>
<tr>
<td>576-600</td>
<td>50,000
</td></tr>
<tr>
<td>601-700</td>
<td>100,000
</td></tr>
<tr>
<td>701-800</td>
<td>250,000
</td></tr>
<tr>
<td>801-900</td>
<td>500,000
</td></tr>
<tr>
<td>901-1,000</td>
<td>1,000,000
</td></tr>
<tr>
<td>1,001-1,250</td>
<td>1,250,000
</td></tr>
<tr>
<td>1,251-1,500</td>
<td>1,500,000
</td></tr>
<tr>
<td>1,501-2,000</td>
<td>2,000,000
</td></tr>
<tr>
<td>2,001-2,250</td>
<td>2,250,000
</td></tr>
<tr>
<td>2,251-2,500</td>
<td>2,500,000
</td></tr></tbody></table>

Every known milestone is listed below. Bolded quest numbers are special milestones that Brown Bear notifies the player about in their dialogue.

<table class="article-table mw-collapsible mw-collapsed">
<tbody><tr>
<th>Quest Number
</th>
<th>Reward
</th></tr>
<tr>
<td>5
</td>
<td><span typeof="mw:Error mw:File"></span>3 <a href="field-dice.html"><span class="color-template color-template-field-dice color-template-background-clip">Field Dice</span></a>
</td></tr>
<tr>
<td>10
</td>
<td><span typeof="mw:Error mw:File"></span>5 <a href="micro-converter.html"><span class="color-template color-template-micro-converter color-template-background-clip">Micro-Converters</span></a>
</td></tr>
<tr>
<td>15
</td>
<td><span typeof="mw:Error mw:File"></span>5 <a href="field-dice.html"><span class="color-template color-template-field-dice color-template-background-clip">Field Dice</span></a>
</td></tr>
<tr>
<td>20
</td>
<td><span typeof="mw:Error mw:File"></span>25 <a href="bitterberry.html"><span class="color-template color-template-bitterberry color-template-background-clip">Bitterberries</span></a>
</td></tr>
<tr>
<td><b>25</b>
</td>
<td><span typeof="mw:Error mw:File"></span>1 <a href="egg.html#Silver_Egg"><span class="color-template color-template-silver-egg color-template-background-clip">Silver Egg</span></a>
</td></tr>
<tr>
<td>30
</td>
<td><span typeof="mw:Error mw:File"></span>5 <a href="micro-converter.html"><span class="color-template color-template-micro-converter color-template-background-clip">Micro-Converters</span></a>
</td></tr>
<tr>
<td>35
</td>
<td><span typeof="mw:Error mw:File"></span>1 <a href="oil.html"><span class="color-template color-template-oil color-template-background-clip">Oil</span></a>
</td></tr>
<tr>
<td>40
</td>
<td><span typeof="mw:Error mw:File"></span>50 <a href="bitterberry.html"><span class="color-template color-template-bitterberry color-template-background-clip">Bitterberries</span></a>
</td></tr>
<tr>
<td>45
</td>
<td><span typeof="mw:Error mw:File"></span>1 <a href="enzymes.html"><span class="color-template color-template-enzymes color-template-background-clip">Enzymes</span></a>
</td></tr>
<tr>
<td><b>50</b>
</td>
<td><span typeof="mw:Error mw:File"></span>1 <a href="egg.html#Gold_Egg"><span class="color-template color-template-gold-egg color-template-background-clip">Gold Egg</span></a>
</td></tr>
<tr>
<td>55
</td>
<td><span typeof="mw:Error mw:File"></span>1 <a href="magic-bean.html"><span class="color-template color-template-magic-bean color-template-background-clip">Magic Bean</span></a>
</td></tr>
<tr>
<td>60
</td>
<td><span typeof="mw:Error mw:File"></span>50 <a href="bitterberry.html"><span class="color-template color-template-bitterberry color-template-background-clip">Bitterberries</span></a>
</td></tr>
<tr>
<td>65
</td>
<td><span typeof="mw:Error mw:File"></span>5 <a href="field-dice.html"><span class="color-template color-template-field-dice color-template-background-clip">Field Dice</span></a>
</td></tr>
<tr>
<td>70
</td>
<td><span typeof="mw:Error mw:File"></span>5 <a href="micro-converter.html"><span class="color-template color-template-micro-converter color-template-background-clip">Micro-Converters</span></a>
</td></tr>
<tr>
<td><b>75</b>
</td>
<td><span typeof="mw:Error mw:File"></span>1 <a href="egg.html#Diamond_Egg"><span class="color-template color-template-diamond-egg color-template-background-clip">Diamond Egg</span></a>
</td></tr>
<tr>
<td>80
</td>
<td><span typeof="mw:Error mw:File"></span>10 <a href="micro-converter.html"><span class="color-template color-template-micro-converter color-template-background-clip">Micro-Converters</span></a>
</td></tr>
<tr>
<td>85
</td>
<td><span typeof="mw:Error mw:File"></span>1 <a href="tropical-drink.html"><span class="color-template color-template-tropical-drink color-template-background-clip">Tropical Drink</span></a>
</td></tr>
<tr>
<td>90
</td>
<td><span typeof="mw:Error mw:File"></span>1 <a href="royal-jelly.html#Star_Jelly"><span class="color-template color-template-star-jelly color-template-background-clip">Star Jelly</span></a>
</td></tr>
<tr>
<td>95
</td>
<td><span typeof="mw:Error mw:File"></span>100 <a href="gumdrops.html"><span class="color-template color-template-gumdrops color-template-background-clip">Gumdrops</span></a>
</td></tr>
<tr>
<td><b>100</b>
</td>
<td><span typeof="mw:Error mw:File"></span>1 <a href="egg.html#Mythic_Egg"><span class="color-template color-template-mythic-egg color-template-background-clip">Mythic Egg</span></a>
</td></tr>
<tr>
<td>105
</td>
<td><span typeof="mw:Error mw:File"></span>1 <a href="oil.html"><span class="color-template color-template-oil color-template-background-clip">Oil</span></a>
</td></tr>
<tr>
<td>111
</td>
<td><span typeof="mw:Error mw:File"></span>5 <a href="box-o-frogs.html"><span class="color-template color-template-box-o-frogs color-template-background-clip">Boxes-O-Frogs</span></a>
</td></tr>
<tr>
<td>115
</td>
<td><span typeof="mw:Error mw:File"></span>1 <a href="enzymes.html"><span class="color-template color-template-enzymes color-template-background-clip">Enzymes</span></a>
</td></tr>
<tr>
<td>120
</td>
<td><span typeof="mw:Error mw:File"></span>1 <a href="magic-bean.html"><span class="color-template color-template-magic-bean color-template-background-clip">Magic Bean</span></a>
</td></tr>
<tr>
<td>123
</td>
<td><span typeof="mw:Error mw:File"></span>1 <b>Shy Brown Bear Sticker</b>
</td></tr>
<tr>
<td>125
</td>
<td><span typeof="mw:Error mw:File"></span>1 <a href="atomic-treat.html"><span class="color-template color-template-atomic-treat color-template-background-clip">Atomic Treat</span></a>
</td></tr>
<tr>
<td>130
</td>
<td><span typeof="mw:Error mw:File"></span>1 <a href="enzymes.html"><span class="color-template color-template-enzymes color-template-background-clip">Enzymes</span></a>
</td></tr>
<tr>
<td>135
</td>
<td><span typeof="mw:Error mw:File"></span>50 <a href="bitterberry.html"><span class="color-template color-template-bitterberry color-template-background-clip">Bitterberries</span></a>
</td></tr>
<tr>
<td>140
</td>
<td><span typeof="mw:Error mw:File"></span>1 <a href="glue.html"><span class="color-template color-template-glue color-template-background-clip">Glue</span></a>
</td></tr>
<tr>
<td>145
</td>
<td><span typeof="mw:Error mw:File"></span>5 <a href="field-dice.html"><span class="color-template color-template-field-dice color-template-background-clip">Field Dice</span></a>
</td></tr>
<tr>
<td><b>150</b>
</td>
<td><span typeof="mw:Error mw:File"></span>100 <a href="ticket.html"><span class="color-template color-template-ticket color-template-background-clip">Tickets</span></a>
</td></tr>
<tr>
<td>155
</td>
<td><span typeof="mw:Error mw:File"></span>5 <a href="micro-converter.html"><span class="color-template color-template-micro-converter color-template-background-clip">Micro-Converters</span></a>
</td></tr>
<tr>
<td>160
</td>
<td><span typeof="mw:Error mw:File"></span>3 <a href="oil.html"><span class="color-template color-template-oil color-template-background-clip">Oils</span></a>
</td></tr>
<tr>
<td>165
</td>
<td><span typeof="mw:Error mw:File"></span>1 <a href="enzymes.html"><span class="color-template color-template-enzymes color-template-background-clip">Enzymes</span></a>
</td></tr>
<tr>
<td>170
</td>
<td><span typeof="mw:Error mw:File"></span>5 <a href="micro-converter.html"><span class="color-template color-template-micro-converter color-template-background-clip">Micro-Converters</span></a>
</td></tr>
<tr>
<td>175
</td>
<td><span typeof="mw:Error mw:File"></span>100 <a href="gumdrops.html"><span class="color-template color-template-gumdrops color-template-background-clip">Gumdrops</span></a>
</td></tr>
<tr>
<td>180
</td>
<td><span typeof="mw:Error mw:File"></span>50 <a href="bitterberry.html"><span class="color-template color-template-bitterberry color-template-background-clip">Bitterberries</span></a>
</td></tr>
<tr>
<td>185
</td>
<td><span typeof="mw:Error mw:File"></span>1 <a href="oil.html"><span class="color-template color-template-oil color-template-background-clip">Oil</span></a>
</td></tr>
<tr>
<td>190
</td>
<td><span typeof="mw:Error mw:File"></span>1 <a href="magic-bean.html"><span class="color-template color-template-magic-bean color-template-background-clip">Magic Bean</span></a>
</td></tr>
<tr>
<td>195
</td>
<td><span typeof="mw:Error mw:File"></span>1 <a href="royal-jelly.html#Star_Jelly"><span class="color-template color-template-star-jelly color-template-background-clip">Star Jelly</span></a>
</td></tr>
<tr>
<td><b>200</b>
</td>
<td><span typeof="mw:Error mw:File"></span>1 <a href="egg.html#Mythic_Egg"><span class="color-template color-template-mythic-egg color-template-background-clip">Mythic Egg</span></a>
</td></tr>
<tr>
<td>205
</td>
<td><span typeof="mw:Error mw:File"></span>5 <a href="field-dice.html"><span class="color-template color-template-field-dice color-template-background-clip">Field Dice</span></a>
</td></tr>
<tr>
<td>210
</td>
<td><span typeof="mw:Error mw:File"></span>50 <a href="bitterberry.html"><span class="color-template color-template-bitterberry color-template-background-clip">Bitterberries</span></a>
</td></tr>
<tr>
<td>215
</td>
<td><span typeof="mw:Error mw:File"></span>5 <a href="micro-converter.html"><span class="color-template color-template-micro-converter color-template-background-clip">Micro-Converters</span></a>
</td></tr>
<tr>
<td>220
</td>
<td><span typeof="mw:Error mw:File"></span>1 <a href="magic-bean.html"><span class="color-template color-template-magic-bean color-template-background-clip">Magic Bean</span></a>
</td></tr>
<tr>
<td>225
</td>
<td><span typeof="mw:Error mw:File"></span>1 <a href="atomic-treat.html"><span class="color-template color-template-atomic-treat color-template-background-clip">Atomic Treat</span></a>
</td></tr>
<tr>
<td>230
</td>
<td><span typeof="mw:Error mw:File"></span>3 <a href="enzymes.html"><span class="color-template color-template-enzymes color-template-background-clip">Enzymes</span></a>
</td></tr>
<tr>
<td>235
</td>
<td><span typeof="mw:Error mw:File"></span>1 <a href="glue.html"><span class="color-template color-template-glue color-template-background-clip">Glue</span></a>
</td></tr>
<tr>
<td>240
</td>
<td><span typeof="mw:Error mw:File"></span>100 <a href="gumdrops.html"><span class="color-template color-template-gumdrops color-template-background-clip">Gumdrops</span></a>
</td></tr>
<tr>
<td>245
</td>
<td><span typeof="mw:Error mw:File"></span>50 <a href="bitterberry.html"><span class="color-template color-template-bitterberry color-template-background-clip">Bitterberries</span></a>
</td></tr>
<tr>
<td><b>250</b>
</td>
<td><span typeof="mw:Error mw:File"></span>250 <a href="ticket.html"><span class="color-template color-template-ticket color-template-background-clip">Tickets</span></a>
</td></tr>
<tr>
<td>255
</td>
<td><span typeof="mw:Error mw:File"></span>3 <a href="oil.html"><span class="color-template color-template-oil color-template-background-clip">Oils</span></a>
</td></tr>
<tr>
<td>260
</td>
<td><span typeof="mw:Error mw:File"></span>5 <a href="box-o-frogs.html"><span class="color-template color-template-box-o-frogs color-template-background-clip">Boxes-O-Frogs</span></a>
</td></tr>
<tr>
<td>265
</td>
<td><span typeof="mw:Error mw:File"></span>5 <a href="field-dice.html"><span class="color-template color-template-field-dice color-template-background-clip">Field Dice</span></a>
</td></tr>
<tr>
<td>270
</td>
<td><span typeof="mw:Error mw:File"></span>5 <a href="micro-converter.html"><span class="color-template color-template-micro-converter color-template-background-clip">Micro-Converters</span></a>
</td></tr>
<tr>
<td><b>275</b>
</td>
<td><span typeof="mw:Error mw:File"></span>1 <a href="egg.html#Gifted_Gold_Egg"><span class="color-template color-template-gifted-gold-egg color-template-background-clip">Gifted Gold Egg</span></a>
</td></tr>
<tr>
<td>280
</td>
<td><span typeof="mw:Error mw:File"></span>1 <a href="magic-bean.html"><span class="color-template color-template-magic-bean color-template-background-clip">Magic Bean</span></a>
</td></tr>
<tr>
<td>285
</td>
<td><span typeof="mw:Error mw:File"></span>3 <a href="oil.html"><span class="color-template color-template-oil color-template-background-clip">Oils</span></a>
</td></tr>
<tr>
<td>290
</td>
<td><span typeof="mw:Error mw:File"></span>100 <a href="gumdrops.html"><span class="color-template color-template-gumdrops color-template-background-clip">Gumdrops</span></a>
</td></tr>
<tr>
<td>295
</td>
<td><span typeof="mw:Error mw:File"></span>50 <a href="bitterberry.html"><span class="color-template color-template-bitterberry color-template-background-clip">Bitterberries</span></a>
</td></tr>
<tr>
<td><b>300</b>
</td>
<td><span typeof="mw:Error mw:File"></span>1 <a href="cub-buddy.html#Skins"><span class="color-template color-template-brown-cub color-template-background-clip">Brown Cub</span></a>
</td></tr>
<tr>
<td>305
</td>
<td><span typeof="mw:Error mw:File"></span>3 <a href="enzymes.html"><span class="color-template color-template-enzymes color-template-background-clip">Enzymes</span></a>
</td></tr>
<tr>
<td>310
</td>
<td><span typeof="mw:Error mw:File"></span>3 <a href="glue.html"><span class="color-template color-template-glue color-template-background-clip">Glues</span></a>
</td></tr>
<tr>
<td>315
</td>
<td><span typeof="mw:Error mw:File"></span>3 <a href="royal-jelly.html#Star_Jelly"><span class="color-template color-template-star-jelly color-template-background-clip">Star Jellies</span></a>
</td></tr>
<tr>
<td>320
</td>
<td><span typeof="mw:Error mw:File"></span>5 <a href="field-dice.html"><span class="color-template color-template-field-dice color-template-background-clip">Field Dice</span></a>
</td></tr>
<tr>
<td>325
</td>
<td><span typeof="mw:Error mw:File"></span>10 <a href="micro-converter.html"><span class="color-template color-template-micro-converter color-template-background-clip">Micro-Converters</span></a>
</td></tr>
<tr>
<td>330
</td>
<td><span typeof="mw:Error mw:File"></span>75 <a href="bitterberry.html"><span class="color-template color-template-bitterberry color-template-background-clip">Bitterberries</span></a>
</td></tr>
<tr>
<td>333
</td>
<td><span typeof="mw:Error mw:File"></span>3 <a href="box-o-frogs.html"><span class="color-template color-template-box-o-frogs color-template-background-clip">Boxes-O-Frogs</span></a>
</td></tr>
<tr>
<td>335
</td>
<td><span typeof="mw:Error mw:File"></span>150 <a href="gumdrops.html"><span class="color-template color-template-gumdrops color-template-background-clip">Gumdrops</span></a>
</td></tr>
<tr>
<td>340
</td>
<td><span typeof="mw:Error mw:File"></span>1 <a href="egg.html#Gold_Egg"><span class="color-template color-template-gold-egg color-template-background-clip">Gold Egg</span></a>
</td></tr>
<tr>
<td>345
</td>
<td><span typeof="mw:Error mw:File"></span>3 <a href="magic-bean.html"><span class="color-template color-template-magic-bean color-template-background-clip">Magic Beans</span></a>
</td></tr>
<tr>
<td><b>350</b>
</td>
<td><span typeof="mw:Error mw:File"></span>250 <a href="ticket.html"><span class="color-template color-template-ticket color-template-background-clip">Tickets</span></a>
</td></tr>
<tr>
<td>355
</td>
<td><span typeof="mw:Error mw:File"></span>5 <a href="enzymes.html"><span class="color-template color-template-enzymes color-template-background-clip">Enzymes</span></a>
</td></tr>
<tr>
<td>360
</td>
<td><span typeof="mw:Error mw:File"></span>5 <a href="oil.html"><span class="color-template color-template-oil color-template-background-clip">Oils</span></a>
</td></tr>
<tr>
<td>365
</td>
<td><span typeof="mw:Error mw:File"></span>5 <a href="field-dice.html"><span class="color-template color-template-field-dice color-template-background-clip">Field Dice</span></a>
</td></tr>
<tr>
<td>370
</td>
<td><span typeof="mw:Error mw:File"></span>75 <a href="bitterberry.html"><span class="color-template color-template-bitterberry color-template-background-clip">Bitterberries</span></a>
</td></tr>
<tr>
<td>375
</td>
<td><span typeof="mw:Error mw:File"></span>1 <a href="atomic-treat.html"><span class="color-template color-template-atomic-treat color-template-background-clip">Atomic Treat</span></a>
</td></tr>
<tr>
<td>380
</td>
<td><span typeof="mw:Error mw:File"></span>5 <a href="micro-converter.html"><span class="color-template color-template-micro-converter color-template-background-clip">Micro-Converters</span></a>
</td></tr>
<tr>
<td>385
</td>
<td><span typeof="mw:Error mw:File"></span>10 <a href="micro-converter.html"><span class="color-template color-template-micro-converter color-template-background-clip">Micro-Converters</span></a>
</td></tr>
<tr>
<td>390
</td>
<td><span typeof="mw:Error mw:File"></span>1 <a href="egg.html#Gold_Egg"><span class="color-template color-template-gold-egg color-template-background-clip">Gold Egg</span></a>
</td></tr>
<tr>
<td>395
</td>
<td><span typeof="mw:Error mw:File"></span>5 <a href="glue.html"><span class="color-template color-template-glue color-template-background-clip">Glues</span></a>
</td></tr>
<tr>
<td><b>400</b>
</td>
<td><span typeof="mw:Error mw:File"></span>1 <a href="egg.html#Mythic_Egg"><span class="color-template color-template-mythic-egg color-template-background-clip">Mythic Egg</span></a>
</td></tr>
<tr>
<td>405
</td>
<td><span typeof="mw:Error mw:File"></span>50 <a href="gumdrops.html"><span class="color-template color-template-gumdrops color-template-background-clip">Gumdrops</span></a>
</td></tr>
<tr>
<td>410
</td>
<td><span typeof="mw:Error mw:File"></span>10 <a href="oil.html"><span class="color-template color-template-oil color-template-background-clip">Oils</span></a>
</td></tr>
<tr>
<td>415
</td>
<td><span typeof="mw:Error mw:File"></span>5 <a href="field-dice.html"><span class="color-template color-template-field-dice color-template-background-clip">Field Dice</span></a>
</td></tr>
<tr>
<td>420
</td>
<td><span typeof="mw:Error mw:File"></span>4 <a href="neonberry.html"><span class="color-template color-template-neonberry color-template-background-clip">Neonberries</span></a>
</td></tr>
<tr>
<td><b>425</b>
</td>
<td><span typeof="mw:Error mw:File"></span>1 <a href="egg.html#Gifted_Diamond_Egg"><span class="color-template color-template-gifted-diamond-egg color-template-background-clip">Gifted Diamond Egg</span></a>
</td></tr>
<tr>
<td>430
</td>
<td><span typeof="mw:Error mw:File"></span>10 <a href="micro-converter.html"><span class="color-template color-template-micro-converter color-template-background-clip">Micro-Converters</span></a>
</td></tr>
<tr>
<td>435
</td>
<td><span typeof="mw:Error mw:File"></span>10 <a href="enzymes.html"><span class="color-template color-template-enzymes color-template-background-clip">Enzymes</span></a>
</td></tr>
<tr>
<td>440
</td>
<td><span typeof="mw:Error mw:File"></span>1 <a href="egg.html#Gifted_Silver_Egg"><span class="color-template color-template-gifted-silver-egg color-template-background-clip">Gifted Silver Egg</span></a>
</td></tr>
<tr>
<td>444
</td>
<td><span typeof="mw:Error mw:File"></span>4 <a href="box-o-frogs.html"><span class="color-template color-template-box-o-frogs color-template-background-clip">Boxes-O-Frogs</span></a>
</td></tr>
<tr>
<td>445
</td>
<td><span typeof="mw:Error mw:File"></span>3 <a href="magic-bean.html"><span class="color-template color-template-magic-bean color-template-background-clip">Magic Beans</span></a>
</td></tr>
<tr>
<td><b>450</b>
</td>
<td><span typeof="mw:Error mw:File"></span>250 <a href="ticket.html"><span class="color-template color-template-ticket color-template-background-clip">Tickets</span></a>
</td></tr>
<tr>
<td>455
</td>
<td><span typeof="mw:Error mw:File"></span>5 <a href="magic-bean.html"><span class="color-template color-template-magic-bean color-template-background-clip">Magic Beans</span></a>
</td></tr>
<tr>
<td>460
</td>
<td><span typeof="mw:Error mw:File"></span>7 <a href="field-dice.html"><span class="color-template color-template-field-dice color-template-background-clip">Field Dice</span></a>
</td></tr>
<tr>
<td>465
</td>
<td><span typeof="mw:Error mw:File"></span>5 <a href="royal-jelly.html#Star_Jelly"><span class="color-template color-template-star-jelly color-template-background-clip">Star Jellies</span></a>
</td></tr>
<tr>
<td>470
</td>
<td><span typeof="mw:Error mw:File"></span>5 <a href="glue.html"><span class="color-template color-template-glue color-template-background-clip">Glues</span></a>
</td></tr>
<tr>
<td>475
</td>
<td><span typeof="mw:Error mw:File"></span>5 <a href="box-o-frogs.html"><span class="color-template color-template-box-o-frogs color-template-background-clip">Boxes-O-Frogs</span></a>
</td></tr>
<tr>
<td>480
</td>
<td><span typeof="mw:Error mw:File"></span>15 <a href="oil.html"><span class="color-template color-template-oil color-template-background-clip">Oils</span></a>
</td></tr>
<tr>
<td>485
</td>
<td><span typeof="mw:Error mw:File"></span>75 <a href="bitterberry.html"><span class="color-template color-template-bitterberry color-template-background-clip">Bitterberries</span></a>
</td></tr>
<tr>
<td>490
</td>
<td><span typeof="mw:Error mw:File"></span>15 <a href="micro-converter.html"><span class="color-template color-template-micro-converter color-template-background-clip">Micro-Converters</span></a>
</td></tr>
<tr>
<td>495
</td>
<td><span typeof="mw:Error mw:File"></span>1 <a href="egg.html#Gold_Egg"><span class="color-template color-template-gold-egg color-template-background-clip">Gold Egg</span></a>
</td></tr>
<tr>
<td><b>500</b>
</td>
<td><span typeof="mw:Error mw:File"></span>1 <a href="star-treat.html"><span class="color-template color-template-star-treat color-template-background-clip">Star Treat</span></a>
</td></tr>
<tr>
<td>505
</td>
<td><span typeof="mw:Error mw:File"></span>15 <a href="enzymes.html"><span class="color-template color-template-enzymes color-template-background-clip">Enzymes</span></a>
</td></tr>
<tr>
<td>510
</td>
<td><span typeof="mw:Error mw:File"></span>5 <a href="glue.html"><span class="color-template color-template-glue color-template-background-clip">Glues</span></a>
</td></tr>
<tr>
<td>515
</td>
<td><span typeof="mw:Error mw:File"></span>8 <a href="field-dice.html"><span class="color-template color-template-field-dice color-template-background-clip">Field Dice</span></a>
</td></tr>
<tr>
<td>520
</td>
<td><span typeof="mw:Error mw:File"></span>10 <a href="tropical-drink.html"><span class="color-template color-template-tropical-drink color-template-background-clip">Tropical Drinks</span></a>
</td></tr>
<tr>
<td>525
</td>
<td><span typeof="mw:Error mw:File"></span>1 <a href="egg.html#Diamond_Egg"><span class="color-template color-template-diamond-egg color-template-background-clip">Diamond Egg</span></a>
</td></tr>
<tr>
<td>530
</td>
<td><span typeof="mw:Error mw:File"></span>25 <a href="oil.html"><span class="color-template color-template-oil color-template-background-clip">Oils</span></a>
</td></tr>
<tr>
<td>535
</td>
<td><span typeof="mw:Error mw:File"></span>5 <a href="magic-bean.html"><span class="color-template color-template-magic-bean color-template-background-clip">Magic Beans</span></a>
</td></tr>
<tr>
<td>540
</td>
<td><span typeof="mw:Error mw:File"></span>75 <a href="bitterberry.html"><span class="color-template color-template-bitterberry color-template-background-clip">Bitterberries</span></a>
</td></tr>
<tr>
<td>545
</td>
<td><span typeof="mw:Error mw:File"></span>15 <a href="micro-converter.html"><span class="color-template color-template-micro-converter color-template-background-clip">Micro-Converters</span></a>
</td></tr>
<tr>
<td><b>550</b>
</td>
<td><span typeof="mw:Error mw:File"></span>250 <a href="ticket.html"><span class="color-template color-template-ticket color-template-background-clip">Tickets</span></a>
</td></tr>
<tr>
<td>555
</td>
<td><span typeof="mw:Error mw:File"></span>5 <a href="box-o-frogs.html"><span class="color-template color-template-box-o-frogs color-template-background-clip">Boxes-O-Frogs</span></a>
</td></tr>
<tr>
<td>560
</td>
<td><span typeof="mw:Error mw:File"></span>200 <a href="gumdrops.html"><span class="color-template color-template-gumdrops color-template-background-clip">Gumdrops</span></a>
</td></tr>
<tr>
<td>565
</td>
<td><span typeof="mw:Error mw:File"></span>25 <a href="enzymes.html"><span class="color-template color-template-enzymes color-template-background-clip">Enzymes</span></a>
</td></tr>
<tr>
<td>570
</td>
<td><span typeof="mw:Error mw:File"></span>25 <a href="oil.html"><span class="color-template color-template-oil color-template-background-clip">Oils</span></a>
</td></tr>
<tr>
<td>575
</td>
<td><span typeof="mw:Error mw:File"></span>7 <a href="magic-bean.html"><span class="color-template color-template-magic-bean color-template-background-clip">Magic Beans</span></a>
</td></tr>
<tr>
<td>580
</td>
<td><span typeof="mw:Error mw:File"></span>10 <a href="royal-jelly.html#Star_Jelly"><span class="color-template color-template-star-jelly color-template-background-clip">Star Jellies</span></a>
</td></tr>
<tr>
<td>585
</td>
<td><span typeof="mw:Error mw:File"></span>15 <a href="tropical-drink.html"><span class="color-template color-template-tropical-drink color-template-background-clip">Tropical Drinks</span></a>
</td></tr>
<tr>
<td>590
</td>
<td><span typeof="mw:Error mw:File"></span>100 <a href="bitterberry.html"><span class="color-template color-template-bitterberry color-template-background-clip">Bitterberries</span></a>
</td></tr>
<tr>
<td>595
</td>
<td><span typeof="mw:Error mw:File"></span>3 <a href="atomic-treat.html"><span class="color-template color-template-atomic-treat color-template-background-clip">Atomic Treats</span></a>
</td></tr>
<tr>
<td><b>600</b>
</td>
<td><span typeof="mw:Error mw:File"></span>1 <a href="egg.html#Mythic_Egg"><span class="color-template color-template-mythic-egg color-template-background-clip">Mythic Egg</span></a>
</td></tr>
<tr>
<td><b>650</b>
</td>
<td><span typeof="mw:Error mw:File"></span>250 <a href="ticket.html"><span class="color-template color-template-ticket color-template-background-clip">Tickets</span></a>
</td></tr>
<tr>
<td><b>700</b>
</td>
<td><span typeof="mw:Error mw:File"></span>1 <a href="egg.html#Mythic_Egg"><span class="color-template color-template-mythic-egg color-template-background-clip">Mythic Egg</span></a>
</td></tr>
<tr>
<td><b>750</b>
</td>
<td><span typeof="mw:Error mw:File"></span>500 <a href="ticket.html"><span class="color-template color-template-ticket color-template-background-clip">Tickets</span></a>
</td></tr>
<tr>
<td><b>800</b>
</td>
<td><span typeof="mw:Error mw:File"></span>1 <a href="egg.html#Mythic_Egg"><span class="color-template color-template-mythic-egg color-template-background-clip">Mythic Egg</span></a>
</td></tr>
<tr>
<td><b>1000</b>
</td>
<td><span typeof="mw:Error mw:File"></span>5 <a href="star-treat.html"><span class="color-template color-template-star-treat color-template-background-clip">Star Treats</span></a>
</td></tr></tbody></table>

## Dialogue

<table class="article-table mw-collapsible mw-collapsed">
<tbody><tr>
<th>Quest
</th>
<th>Dialogue
</th></tr>
<tr>
<td>First quest
</td>
<td>Hey there bud! Ready to get started? The road to an awesome hive is paved by [Royal Jelly]! If you want to unlock Epic, Legendary, and even Mythic Bees, you'll need [Royal Jelly] for sure. I've got plenty to share, and not just [Royal Jelly]... After certain milestones, I'll give all sorts of cool rewards, including Gold, Diamond, and even Mythic [Eggs]! But those'll <i>[sic] </i>come way down the road. For now, let's keep it simple. Check out the quest I've put in your Quest Menu, and report back when you've collected all the pollen.
<p><i>-During-</i>
</p><p>Looks like you haven't quite finished my quest yet. Check the quest menu, then collect all of the requested pollen. Come back when the meters are filled all the way up, and I'll give you your prize!
</p><p><i>-Completion-</i>
</p><p>Great job bud! Here's some [Royal Jelly]. You've completed [# of Brown Bear quests] of my quests so far. Complete [#] more, and I'll give you [milestone reward]. And if you complete [#] more, I'll give you a [major milestone reward]! I haven't quite finished preparing the next quest for you. Come back to me in [time left], and we'll be ready to roll.
</p>
</td></tr>
<tr>
<td>Repeatable Quests
</td>
<td>Welcome back! You ready for a new quest? Complete it and I'll give you some [Royal Jelly] - and a [Ticket]! You've completed [# of Brown Bear quests] of my quests so far. And every new quest becomes a bit more challenging. Check your Quest Menu to see what's up next!
<p><i>-During-</i>
</p><p>Looks like you haven't quite finished my quest yet. Check the quest menu, then collect all of the requested pollen. Come back when the meters are filled all the way up, and I'll give you your prize!
</p><p><i>-Completion-</i>
</p><p>Great job bud! Here's some [Royal Jelly]. You've completed [# of Brown Bear quests] of my quests so far. Complete [#] more, and I'll give you [milestone reward]. And if you complete [#] more, I'll give you a [major milestone reward]!<br/>
</p><p><i>Past Cooldown</i><br/>
Looks like it's been over an hour since I gave you your last quest. Talk to me again when you're ready for the next one.
</p><p><i>Cooldown</i>
</p><p>I haven't quite finished preparing the next quest for you. Come back to me in [time left], and we'll be ready to roll.
</p>
</td></tr>
<tr>
<td>Reaching Major Milestone
</td>
<td><i>Completion</i>
<p>Great job bud! Here's some [Royal Jelly]. And, more importantly, a [milestone reward]! You've completed [# of Brown Bear quests] of my quests so far. Complete [#] more, and I'll give you [milestone reward]. And if you complete [#] more, I'll give you a [major milestone reward]!
</p>
</td></tr>
<tr>
<td>Reaching Minor Milestone
</td>
<td><i>Completion</i>
<p>Great job bud! Here's some [Royal Jelly]. And, as a bonus: [milestone reward]! You've completed [# of Brown Bear quests] of my quests so far. Complete [#] more, and I'll give you [milestone reward]. And if you complete [#] more, I'll give you a [major milestone reward]!
</p>
</td></tr>
<tr>
<td>Cooldown
</td>
<td>Remember, I can only give one quest once an hour. I need a bit more time to finish preparing your next reward. Check back with me in [time left], and we'll be ready to go!
</td></tr>
<tr>
<td>Exclusive Beesmas Dialogue 2018
</td>
<td>What's up, bud? <b>You are given a choice to give a present to Brown Bear or continue talking like normal. You choose to give him a present.</b> Ah, of course! Time to exchange some Beemas gifts. Let me see what you got me this year... Whoa! A 1-year subscription to Bearmazon Prime! I'll get so much out of this, you have NO idea! Thanks buddy. Here's a little something I know you're gonna love as well.
</td></tr>
<tr>
<td>Exclusive Beesmas Dialogue 2020
</td>
<td>Man, it's cold! <b>You are given a choice to give a present to Brown Bear or continue talking like normal. You choose to give him a present.</b> But not too cold for us to exchange gifts! SO what is it, huh? What'd you get ol' Brown Bear? Whoa! A 1-year subscription to Bearmazon Prime! I'll get so much out of this, you have NO idea! Thanks bud. Now look at what I got you, including the [Royal Jelly Ornament]! With this on the Beesmas Tree, you'll receive the following boosts: +25% Convert Rate; +25% Capacity in the Clover Field; and +20% Pollen from "Bomb" abilities! Happy Beesmas!
</td></tr>
<tr>
<td>Exclusive Beesmas Dialogue 2021
</td>
<td>Man, it's cold! <b>You are given a choice to give a present to Brown Bear or continue talking like normal. You choose to give him a present.</b> But not too cold for us to exchange gifts! So what is it, huh? What'd you get ol' Brown Bear? Whoa! A 1 year subscription to Bearmazon Prime! I'll get so much out of this, you have NO idea! Thanks bud. Now look at what I got you, including the [Royal Jelly Ornament]! With that on the Beesmas Tree, you'll receive the following boosts: +25% Convert Rate; +25% Capacity in the Clover Field; And +20% Pollen from "Bomb" abilities! Happy Beesmas!
</td></tr>
<tr>
<td>Exclusive Beesmas Dialogue 2022
</td>
<td>Man, it's cold! <b>You are given a choice to give a present to Brown Bear or continue talking like normal. You choose to give him a present.</b> Maybe your present will help warm me up! Can't wait to find out. ...(krumple krumple)... Whoa! A 25$ Ubear Eats gift card! I'm ordering some warm soup and hot cocoa right away. I hope they deliver to ROBLOX games... Thanks bud. Now check out what I got you, some [Royal Jelly], a [Glue]... And the [Royal Jelly Ornament]! With that on the Beesmas Tree, you'll receive the following boosts: +25% Convert Rate +25% Capacity in the Clover Field And +20% Pollen from "Bomb" abilities! Happy Beesmas!
</td></tr>
<tr>
<td>Exclusive Beesmas Dialogue 2024 Summer
</td>
<td>Man, it's REALLY cold this summer! <b>You are given a choice to give a present to Brown Bear or continue talking like normal. You choose to give him a present.</b> You got something in that [Present] that could warm me up? ...(krumple krumple)... Whoa! It's a 90 day membership to Beequinox, the bougiest bee-themed gym around! I think they've even got a steam room! That'll warm me up for sure. Is this you hinting that I need to work out more? Haha! Just playing. Thanks bud! Now check out what I got YOU: the [Royal Jelly Ornament]! With that on the Beesmas Tree, you'll receive the following boosts: +25% Convert Rate, +25% Capacity in the Clover Field And +20% Pollen from "Bomb" abilities! Happy Beesmas!
</td></tr>
<tr>
<td>Exclusive Beesmas Dialogue 2024 Winter
</td>
<td>Brrrr, it's cold! <b>You are given a choice to give a present to Brown Bear or continue talking like normal. You choose to give him a present.</b> But not too cold for us to exchange gifts! So what is it, huh? What'd you get ol' Brown Bear? ...(krumple krumple)... Whoa! A 12 month subscription to ChatGPBee! Not sure exactly how I'll use this, but I'll try it out! Maybe it can come up with quests to give you. Or maybe it can just keep me company. Thanks bud! Now look at what I got you, including the [Royal Jelly Ornament]! With that on the Beesmas Tree, you'll receive the following boosts: +25% Convert Rate +25% Capacity in the Clover Field And +20% Pollen from "Bomb" abilities! Happy Beesmas!
</td></tr></tbody></table>

## Beesmas Quest - Brown Bear's Stockings

### 2025

This piece of content goes bye bye.

The following content has been removed from the game. The contents below may be archival, but feel free to edit below.

<table class="article-table mw-collapsible mw-collapsed">
<tbody><tr>
<th>Requirements
</th>
<th>Rewards
</th></tr>
<tr>
<td>
<ul><li>Collect 2,500,000 <a href="pollen.html">Pollen</a> from the <a href="clover-field.html">Clover Field</a>.</li>
<li>Pop 10 Blooms in the Clover Field.</li>
<li>Complete 10 Rounds in the <a href="retro-swarm-challenge.html">Retro Swarm Challenge</a>.</li>
<li>Collect 250 <a href="brick.html">Brick</a> Tokens.</li>
<li>Collect 5 <a href="field-dice.html">Field Dice</a></li>
<li>Defeat 25 <a href="ladybug.html">Ladybugs</a></li>
<li>Defeat 25 <a href="rhino-beetle.html">Rhino Beetles</a></li></ul>
</td>
<td><span typeof="mw:Error mw:File"></span>5,000,000 <a href="honey.html"><span class="color-template color-template-honey">Honey</span></a><br/>
<p><span typeof="mw:Error mw:File"></span>10 <a href="ticket.html"><span class="color-template color-template-ticket color-template-background-clip">Tickets</span></a><br/>
<span typeof="mw:Error mw:File"></span>1 <a href="royal-jelly.html#Star_Jelly"><span class="color-template color-template-star-jelly color-template-background-clip">Star Jelly</span></a><br/>
<span typeof="mw:Error mw:File"></span>1 <a href="smooth-dice.html"><span class="color-template color-template-smooth-dice color-template-background-clip">Smooth Dice</span></a><br/>
<span typeof="mw:Error mw:File"></span>25 <a href="snowflake.html"><span class="color-template color-template-snowflake color-template-background-clip">Snowflakes</span></a><br/>
Access to the <a href="stockings.html">Stockings</a>
</p>
</td></tr></tbody></table>

<table class="article-table mw-collapsible mw-collapsed">
<tbody><tr>
<th>Quest
</th>
<th>Dialogue
</th></tr>
<tr>
<td>Brown Bear's Stockings
</td>
<td>
<p>Hey there bud! Merry Beesmas! You know, [Presents] are great and all, but there's something even better. Usually, they'd be hanging right on those hooks! That's right. I'm talking about stockings, stuffed full of goodies! But I've ran out of stuff to stuff them with. Hey... Could you help me gather more stuff? Just as a heads up, it won't be easy... To do this quest, you'll need to participate in the Retro Swarm Challenge. A minigame where you and your bees defend your hive from Zombies and Slimes! That means you'll need at least 10 bees! You can find the portal to the Retro Swarm Challenge beyond the 10 Bee Gate. Here's everything we'll need: Collect 2,500,00 Pollen from the Clover Field... Pop 10 Blooms in the Clover Field... Complete 10 Rounds in the Retro Swarm Challenge... Collect 250 [Brick] Tokens... Collect 5 [Field Dice]... And defeat 25 Ladybugs and Rhino Beetles!
</p><p><i>- During -</i><br/>
N/A
</p><p><i>- Completion -</i><br/>
That's all we need. Lets [sic] stuff these stockings right up! We're putting a little bit of everything in here... Alright! Those are some well-stuffed Stockings! Double-stuffed with Beesmas fluff! Now that there [sic] up there, you can use the Stockings once every hour. You'll get 3 suprises [sic] each time, and you never know what they'll be! But I can guarantee at least 1 will be a Beequip for your bees to enjoy. Once you obtain a [Beequip Case], that is. Thanks for the help bud! Happy Honeydays!
</p>
</td></tr></tbody></table>

### 2024 (Winter)

This piece of content goes bye bye.

The following content has been removed from the game. The contents below may be archival, but feel free to edit below.

<table class="article-table mw-collapsible mw-collapsed">
<tbody><tr>
<th>Requirements
</th>
<th>Rewards
</th></tr>
<tr>
<td>
<ul><li>Collect 750,000 Red <a href="pollen.html">Pollen</a></li>
<li>Collect 250,000 Pollen from the <a href="clover-field.html">Clover Field</a></li>
<li>Defeat 10 <a href="ladybug.html">Ladybugs</a></li>
<li>Collect 50 <a href="ability-tokens.html#Bomb">Bomb</a> Tokens</li>
<li>Collect 3 <a href="field-dice.html">Field Dice</a></li>
<li>Collect 3 <a href="sticker.html">Stickers</a> without <a href="trading.html">Trading</a></li></ul>
</td>
<td><span typeof="mw:Error mw:File"></span>4,000,000 <a href="honey.html"><span class="color-template color-template-honey">Honey</span></a><br/>
<p><span typeof="mw:Error mw:File"></span>5 <a href="ticket.html"><span class="color-template color-template-ticket color-template-background-clip">Tickets</span></a><br/>
<span typeof="mw:Error mw:File"></span>1 <a href="smooth-dice.html"><span class="color-template color-template-smooth-dice color-template-background-clip">Smooth Dice</span></a><br/>
<span typeof="mw:Error mw:File"></span>1 <a href="hard-wax.html"><span class="color-template color-template-hard-wax">Hard Wax</span></a><br/>
<span typeof="mw:Error mw:File"></span>1 <a href="gingerbread-bear.html"><span class="color-template color-template-gingerbread-bear color-template-background-clip">Gingerbread Bear</span></a>
</p>
</td></tr></tbody></table>

<table class="article-table mw-collapsible mw-collapsed">
<tbody><tr>
<th>Quest
</th>
<th>Dialogue
</th></tr>
<tr>
<td>Brown Bear's Stockings
</td>
<td>Hey there bud! Happy Honeydays! I’m trying to make things cozy around the Clover Field by setting up a fireplace. But there’s something missing… We need some Stockings to hang on those hooks! Will you help me stuff some up? Here’s what we’ll need: Collect 750,000 Red Pollen… Collect 250,000 Pollen from the Clover Field… Defeat 10 Ladybugs… Collect 50 Bomb Tokens… Collect 3 Field Dice… And collect 3 Stickers! You can find hidden Stickers stuck on walls around the map, and from many other sources. Check the Sticker Index in your Egg Menu for more information.
<p><i>- During -</i><br/>
N/A
</p><p><i>- Completion -</i><br/>
That's all we need. Let's stuff those Stockings! ...(crump crump)... Alright! Now that's a cozy fireplace! And now let's hang em up! There's a little bit of everything in those Stockings. Now that there [sic] up there, you can use them once every hour. You'll get 3 suprises [sic] each time, and you never know what they'll be! But 1 will almost always be a Beequip for your bees to enjoy. Thanks for the help bud! Happy Honeydays!
</p>
</td></tr></tbody></table>

### 2024 (Summer)

This piece of content goes bye bye.

The following content has been removed from the game. The contents below may be archival, but feel free to edit below.

<table class="article-table mw-collapsible mw-collapsed">
<tbody><tr>
<th>Requirements
</th>
<th>Rewards
</th></tr>
<tr>
<td>
<ul><li>Collect 200,000 <a href="pollen.html">Pollen</a> from the <a href="clover-field.html">Clover Field</a>.</li>
<li>Collect 200,000 <a href="pollen.html">Pollen</a> with <a href="bees-rare.html">Rare Bees</a>.</li>
<li>Defeat 10 <a href="ladybug.html">Ladybugs</a>.</li>
<li>Collect 50 <a href="brick.html">Brick</a> tokens.</li>
<li>Obtain 3 <a href="field-dice.html">Field Dice</a> to give to Brown Bear.</li>
<li>Obtain 1 Green Plus Sign <a href="sticker.html">Sticker</a> to give to Brown Bear.</li></ul>
</td>
<td>1,000,000 <a href="honey.html">Honey</a><br/>
<p>10x <a href="ticket.html">Tickets</a><br/>
3x <a href="royal-jelly.html">Royal Jelly</a><br/>
3x <a href="whirligig.html">Whirligigs</a><br/>
1x <a href="red-extract.html">Red Extract</a><br/>
1x <a href="blue-extract.html">Blue Extract</a><br/>
25x <a href="snowflake.html">Snowflakes</a><br/>
Access to the <a href="stockings.html">Stockings</a>
</p>
</td></tr></tbody></table>

<table class="article-table mw-collapsible mw-collapsed">
<tbody><tr>
<th>Quest
</th>
<th>Dialogue
</th></tr>
<tr>
<td>Brown Bear's Stockings
</td>
<td>Hey there bud! Merry Beesmas! Or is it Summermas? Things are weird this year. Look at all this snow! Wouldn't it be great if we could warm up around a fire? That's why I've up this fireplace! But it's just not Beesmas without Stocking [sic] on the mantle... If you help me stuff some Stockings, I'll have some special rewards for you! It'll be fun! Sound like a deal? For this quest, you'll need to collect [Brick] tokens. Those can only be found through the portal near the Stump Field. HEY! You're paying attention, right? This is important, don't want you to get lost. The portal to the Retro Swarm Challenge is past the Stump Field, behind the Pineapple Patch in the 10 Bee Zone. Once you're in there, join a team and defeat some Brick Blooms! You'll also need to find me a specific Sticker. Look up the Sticker in the Sticker Index to see where it can be found. Lets <i>[sic]</i> stuff those Stockings and get that fireplace rolling! Good luck!
<p><i>-During-</i>
</p><p>N/A
</p><p><i>-Completion-</i>
</p><p>That's all we need. Let's stuff those Stockings! ...(crump crump)... And now let's hang em up! Alright! Now that's what I call a fireplace! There's a little bit of everything in those Stockings. Now that there <i>[sic]</i> up there, you can use them once every hour. You'll get 3 suprises <i>[sic]</i> each time, and you never know what they'll be! But I can guarantee at least 1 will be a Beequip for your bees to enjoy. Thanks for the help bud! Happy Honeydays!
</p>
</td></tr></tbody></table>

### 2022

This piece of content goes bye bye.

The following content has been removed from the game. The contents below may be archival, but feel free to edit below.

<table class="article-table mw-collapsible mw-collapsed">
<tbody><tr>
<th>Requirements
</th>
<th>Rewards
</th></tr>
<tr>
<td>
<ul><li>Collect 8,000 <a href="pollen.html">Pollen</a> from the <a href="mushroom-field.html">Mushroom Field</a>.</li>
<li>Collect 8,000 <a href="pollen.html">Pollen</a> from the <a href="blue-flower-field.html">Blue Flower Field</a>.</li>
<li>Collect 25 Tokens from <a href="ladybug.html">Ladybugs</a>.</li>
<li>Collect 25 Tokens from <a href="rhino-beetle.html">Rhino Beetles</a>.</li>
<li>Use 1 <a href="field-dice.html">Field Dice</a>.</li>
<li>Use 1 <a href="micro-converter.html">Micro-Converter</a>.</li></ul>
</td>
<td>30,000 <a href="honey.html">Honey</a><br/>
<p>1× <a href="royal-jelly.html">Royal Jelly</a><br/>
1× <a href="atomic-treat.html">Atomic Treat</a><br/>
5× <a href="whirligig.html">Whirligigs</a><br/>
1× <a href="gingerbread-bear.html">Gingerbread Bear</a>
</p>
</td></tr></tbody></table>

<table class="article-table mw-collapsible mw-collapsed">
<tbody><tr>
<th>Quest
</th>
<th>Dialogue
</th></tr>
<tr>
<td>Brown Bear's Stockings
</td>
<td>
<p>Hey there bud! Merry Beesmas! I've been working overtime to try to put together something special for you beekeepers... But I'm falling a bit behind, heh. See, those hooks are made for Stockings, and that's just what we'll do. Help me stuff those Stockings, and some [Royal Jelly] I'll give to you. Here's what we'll need: Collect 8,000 pollen from the Mushroom Field... Collect 8,000 pollen from the Blue Flower Field... Collect 25 Tokens from Ladybugs... Collect 25 Tokens from Rhino Beetles... Use 1 [Field Dice]... And use 1 [Micro-Converter]!
</p><p><i>-During-</i>
</p><p>N/A
</p><p><i>-Completion-</i>
</p><p>That's all we need. Lets just stuff em<sup>[sic]</sup> right up! We're putting a little bit of everything in these... Alright! Those are some well-stuffed Stockings! Double-stuffed with Beesmas fluff! Now that there up there, you can use the Stockings once every hour. You'll get 3 suprises<sup>[sic]</sup> each time, and you never know what they'll be! But I can guarantee at least 1 will be a Beequip for your bees to enjoy. Thanks for the help bud! Happy Honeydays!
</p>
</td></tr></tbody></table>

### 2021

This piece of content goes bye bye.

The following content has been removed from the game. The contents below may be archival, but feel free to edit below.

<table class="article-table mw-collapsible mw-collapsed">
<tbody><tr>
<th>Requirements
</th>
<th>Rewards
</th></tr>
<tr>
<td>
<ul><li>Collect 10,000 <a href="pollen.html">Pollen</a> from the <a href="clover-field.html">Clover Field</a>.</li>
<li>Collect 7,500 <a href="pollen.html">Red Pollen</a>.</li>
<li>Collect 7,500 <a href="pollen.html">Blue Pollen</a>.</li>
<li>Defeat 3 <a href="ladybug.html">Ladybugs</a>.</li>
<li>Defeat 3 <a href="rhino-beetle.html">Rhino Beetles</a>.</li>
<li>Collect 25 <a href="ability-tokens.html">Ability Tokens</a>.</li></ul>
</td>
<td>30,000 <a href="honey.html">Honey</a><br/>
<p>3x <a href="ticket.html">Tickets</a><br/>
1x <a href="royal-jelly.html">Royal Jelly</a><br/>
1x <a href="magic-bean.html">Magic Bean</a><br/>
3x <a href="micro-converter.html">Micro-Converters</a><br/>
10x <a href="snowflake.html">Snowflakes</a><br/>
Access to the <a href="stockings.html">Stockings</a>
</p>
</td></tr></tbody></table>

<table class="article-table mw-collapsible mw-collapsed">
<tbody><tr>
<th>Quest
</th>
<th>Dialogue
</th></tr>
<tr>
<td>Brown Bear's Stockings
</td>
<td>Hey there bud! Merry Beesmas! I've been working overtime to try to put something special together for you beekeepers... But I'm falling a bit behind, heh. See, those hooks are made for Stockings, and that's just what we'll do. Help me stuff those Stockings, and some [Royal Jelly] I'll give to you. Here's what we'll need: Collect 10,000 Pollen from the Blue Flower Field... Collect 10,000 Pollen from the Clover Field... Collect 7,500 Red pollen... Collect 7,500 Red pollen... Defeat 3 Ladybugs and 3 Rhino Beetles... And collect 25 Ability Tokens! <i>[sic see note below]</i>
<p><i>-During-</i>
</p><p>N/A
</p><p><i>-Completion-</i>
</p><p>That's all we need. Lets just stuff em right up! We're putting a little bit of everything in these... Alright! Those are some well-stuffed Stockings! Double-stuffed with Beesmas fluff! Now that there up there <i>[sic]</i>, you can use the Stockings once every hour. You'll get 3 surprises each time, and you never know what they'll be! But I can guarantee at least 1 will be a Beequip for your bees to enjoy. Thanks for the help bud! Happy Honeydays! 
</p>
</td></tr></tbody></table>

NOTE: Just like last year, the dialogue for Brown Bear does not match up with the requirements. The requirements are correct.

### 2020

This piece of content goes bye bye.

The following content has been removed from the game. The contents below may be archival, but feel free to edit below.

<table class="article-table mw-collapsible mw-collapsed">
<tbody><tr>
<th>Requirements
</th>
<th>Rewards
</th></tr>
<tr>
<td>
<ul><li>Collect 10,000 <a href="pollen.html">Red Pollen</a></li>
<li>Collect 10,000 <a href="pollen.html">Pollen</a> from the <a href="dandelion-field.html">Dandelion Field</a></li>
<li>Collect 20 Tokens from <a href="ladybug.html">Ladybugs</a></li>
<li>Collect 30 <a href="ability-tokens.html">Ability Tokens</a></li></ul>
</td>
<td>25,000 <a href="honey.html">Honey</a><br/>
<p>10x <a href="snowflake.html">Snowflake</a><br/>
3x <a href="micro-converter.html">Micro-Converter</a><br/>
1x <a href="royal-jelly.html">Royal Jelly</a><br/>
Access to the <a href="stockings.html">Stockings</a>
</p>
</td></tr></tbody></table>

<table class="article-table mw-collapsible mw-collapsed">
<tbody><tr>
<th>Quest
</th>
<th>Dialogue
</th></tr>
<tr>
<td>Brown Bear's Stockings
</td>
<td>Hey there bud! Happy Honeydays! I've been working overtime to try to put something special together for you beekeepers... But I'm falling a bit behind, heh. See, those hooks are made for Stockings, and that's just what we'll do. Help me stuff those Stockings, and some [Royal Jelly] I'll give to you. Here's what we'll need: Collect 10,000 Pollen from the Blue Flower Field... Collect 10,000 Pollen from the Mushroom Field... Collect 15 Tokens from Ladybugs and collect 30 Ability Tokens! <i>[sic see note below]</i>
<p><i>-During-</i>
</p><p>N/A
</p><p><i>-Completion-</i>
</p><p>That's all we need. Lets just stuff em right up! We're putting a little bit of everything in these... Alright! Those are some well-stuffed Stockings! Double-stuffed with Beesmas fluff! Now that there up there <i>[sic]</i>, you can use the Stockings once every hour. You'll get 3 surprises each time, and you never know what they'll be! But I can guarantee at least 1 will be a Beequip for your bees to enjoy. Thanks for the help bud! Happy Honeydays! 
</p>
</td></tr></tbody></table>

NOTE: The dialogue for Brown Bear does not match up with the requirements. The requirements are correct.

## Other Quests

### Bee Swarm Fall 2024 Quest

This piece of content goes bye bye.

The following content has been removed from the game. The contents below may be archival, but feel free to edit below.

<table class="article-table mw-collapsible mw-collapsed">
<tbody><tr>
<th>Quest
</th>
<th>Requirements
</th>
<th>Rewards
</th></tr>
<tr>
<td>⌛Waiting With Sun Bear (3/6): And Brown Bear
</td>
<td>
<ul><li>Earn 3 Clover Badges.</li>
<li>Use 25 <a href="royal-jelly.html">Royal Jellies</a></li>
<li>Collect 12,500,000 Pollen from the <a href="clover-field.html">Clover Field</a>.</li>
<li>Collect 5,000,000 Pollen with the <a href="vacuum.html">Vacuum</a>.</li>
<li>Collect 250 Tokens from <a href="honeystorm.html">Honeystorms</a>.</li>
<li>Collect 10 <a href="stinger.html">Stingers</a>.</li>
<li>Collect 5 <a href="hard-wax.html">Hard Waxes</a>.</li>
<li>Collect 5 <a href="red-extract.html">Red Extracts</a>.</li>
<li>Collect 5 <a href="blue-extract.html">Blue Extracts</a>.</li>
<li>Apply 10 Stacks of <a href="clover-field.html">Clover Field</a> Boost</li>
<li>Defeat 25 <a href="rhino-beetle.html">Rhino Beetles</a></li>
<li>Defeat 10 <a href="giant-ant.html">Giant Ants</a></li></ul>
</td>
<td>50,000,000 <a href="honey.html">Honey</a><br/>
<p>20x <a href="ticket.html">Tickets</a><br/>
5x <a href="enzymes.html">Enzymes</a><br/>
1x <a href="red-balloon.html">Red Balloon</a><br/>
1x Star Jelly 
</p>
</td>
<td>
</td></tr></tbody></table>

<table class="article-table mw-collapsible mw-collapsed">
<tbody><tr>
<th>Quest
</th>
<th>Dialogue
</th></tr>
<tr>
<td>⌛Waiting With Sun Bear (3/6): And Brown Bear
</td>
<td>Hey there bud! Mother Bear sent you, right? No need to explain. Sun Bear told me the whole spiel. Us bears are giving you quests to buy more time for the developer of this game. Well, let's get right into it! I'm not gonna ask questions. This quest out to keep you busy for a while!
<p><i>-During-</i>
</p><p>N/A
</p><p><i>-Completion-</i>
</p><p>Guess that quest was too easy! Either that, or Onett is just WAY slower than we thought. Nah. He's always been slow! He's been trying to open some lid up there for over 6 years. Everything lines up! Three more quests to go to earn that [Stranded Sun Bear Sticker]. I think Polar Bear's got the next one for you. 
</p>
</td></tr></tbody></table>

### Egg Hunt (2020)

This piece of content goes bye bye.

The following content has been removed from the game. The contents below may be archival, but feel free to edit below.

<table class="article-table mw-collapsible mw-collapsed">
<tbody><tr>
<th>Quest
</th>
<th>Requirements
</th>
<th>Rewards
</th></tr>
<tr>
<td>Commando Chick's Hideout
</td>
<td>
<ul><li>Cut the vines</li>
<li>Capture 1 <a href="commando-chick.html">Commando Chick</a></li></ul>
</td>
<td>
<ul><li>1x <a href="royal-jelly.html#Royal_Jelly_Variants">Rage Bee Jelly</a> (Upon receiving quest)</li>
<li>5x <a href="stinger.html">Stinger</a> (Upon receiving quest)</li></ul>
<hr/>
<ul><li>10,000 <a href="honey.html">honey</a></li>
<li>5x <a href="ticket.html">Ticket</a></li>
<li>1x <a href="royal-jelly.html">Royal Jelly</a></li>
<li>1x <a href="field-dice.html">Field Dice</a></li>
<li>25x <a href="gumdrops.html">Gumdrops</a></li></ul>
</td></tr></tbody></table>

<table class="article-table mw-collapsible mw-collapsed">
<tbody><tr>
<th>Quest
</th>
<th>Dialogue
</th></tr>
<tr>
<td>Commando Chick's Hideout
</td>
<td>These Chicks🐣 are really getting out of hand... The longer we wait, the more dangerous they become! I saw one that look <i>[sic]</i> totally mad! It had glowing red eyes, and looked up to no good. Tried to catch it, but it was too fast. It ran away behind the vines near the Wealth Clock. We've got to catch it, but be careful. This is no ordinary Chick🐣... I think it could be armed and dangerous. Here, I'll give you a [Rage Bee Jelly] and some [Stingers] to help in the fight.
<p><i>-During-</i>
</p><p>The strange Chick🐣 is hiding behind the vines near the Wealth Clock. You'll need to equip a certain tool to cut through... I think a pair of Clippers should do the trick. You can buy them for 2200 Honey in Noob Bear's Shop.
</p><p><i>-Completion-</i>
</p><p>Phew, that looked intense! Thanks to you, that crazy Chick🐣 is back in a basket where it belongs. I think we just might be able to get this Chick🐣 infestation under control after all. Great job bud! Here's some rewards for your effort! 
</p>
</td></tr></tbody></table>

### 2019 Ornament Quest

This piece of content goes bye bye.

The following content has been removed from the game. The contents below may be archival, but feel free to edit below.

<table class="article-table mw-collapsible mw-collapsed">
<tbody><tr>
<th>Quest
</th>
<th>Requirements
</th>
<th>Rewards
</th></tr>
<tr>
<td>Brown Bear's Ornament
</td>
<td>
<ul><li>Collect 25,000 <a href="pollen.html">Pollen</a> from the <a href="clover-field.html">Clover Field</a></li>
<li>Collect 50 <a href="ability-tokens.html">Ability Tokens</a></li>
<li>Defeat 5 <a href="ladybug.html">Ladybugs</a></li></ul>
</td>
<td>30,000 <a href="honey.html">Honey</a><br/>
<p>5x <a href="ticket.html">Ticket</a><br/>
1x <a href="royal-jelly.html">Royal Jelly</a><br/>
<a href="ornaments.html">Royal Jelly Ornament</a>
</p>
</td></tr></tbody></table>

<table class="article-table mw-collapsible mw-collapsed">
<tbody><tr>
<th>Quest
</th>
<th>Dialogue
</th></tr>
<tr>
<td>Brown Bear's Ornament
</td>
<td>Ho ho ho! Merry Beesmas bud! Can you believe another year has gone by already? They seem to be getting faster and faster. But the year's not complete until the Beesmas Tree is decorated! And I've got a royal idea for an [Ornament]... I'll start working on it while you finish these tasks: Collect 25,000 Pollen from the Clover Field... Collect 50 Ability Tokens... And defeat 5 Ladybugs!
<p><i>-During-</i>
</p><p>N/A
</p><p><i>-Completion-</i>
</p><p>That was fast! Ok then, let me just finish up. ...(Snip snip snip)... ...(Glue glue glue)... Oh... didn't quite turn out as I expected. But it'll work! It's a [Royal Jelly Ornament]! It represents the thousand of [Royal Jellies] I give out everyday! See, I even drew my face on it. With this on the Beesmas Tree, you'll receive the following boosts: +10% Capacity; x1.15 Pollen from "Bomb" Bee Abilities; And x1.25 Pollen from the Clover Field! Don't forget to keep an eye out for gift boxes hidden around the map. Once you've put enough [Ornaments] on the tree, they're yours to open! Good luck, and Happy Honeydays!
</p>
</td></tr></tbody></table>

### Egg Hunt (2019)

This piece of content goes bye bye.

The following content has been removed from the game. The contents below may be archival, but feel free to edit below.

<table class="article-table mw-collapsible mw-collapsed">
<tbody><tr>
<th>Quest
</th>
<th>Requirements
</th>
<th>Rewards
</th></tr>
<tr>
<td>Egg Hunt: Brown Bear
</td>
<td>
<ul><li>Obtain 3 <span class="new" data-uncrawlable-url="L3dpa2kvUGxhc3RpY19FZ2c/YWN0aW9uPWVkaXQmcmVkbGluaz0x" title="Plastic Egg (page does not exist)">Plastic Eggs</span></li></ul>
</td>
<td>1,500 <a href="honey.html">Honey</a><br/>
<p>1x <a href="marshmallow-bee.html">Marshmallow Bee</a><br/>
3x <a href="micro-converter.html">Micro-Converters</a><br/>
1x <a href="royal-jelly.html">Royal Jelly</a>
</p>
</td></tr></tbody></table>

<table class="article-table mw-collapsible mw-collapsed">
<tbody><tr>
<th>Quest
</th>
<th>Dialogue
</th></tr>
<tr>
<td>Egg Hunt: Brown Bear
</td>
<td>Hey there bud! You here for the Egg Hunt? Well then, let's get right into it! When it comes to Egg Hunts, I like to keep things traditional. I've gone ahead and hidden 3 [Plastic Eggs] around the map for you to hunt down! Snoop around and check all the nooks and crannys <i>[sic]</i>. Some of them are pretty sneaky. Return all 3 to me, and I'll give you a tasty [Marshmallow Bee]. You'll need 3 of those if you want to earn Bee Swarm's Egg Hunt Egg! Got it? Great! Happy hunting.
<p><i>-During-</i>
</p><p>Having trouble? Here's a hint. All 3 of the [Plastic Eggs] are hidden right here in the starting zone! No need to search behind any of the bee gates. That should save you time.
</p><p><i>-Completion-</i>
</p><p>Great work! I thought I had you with the one in the maze. I'll just take those [Plastic Eggs] and reuse them next year. And in return - here's one delicious [Marshmallow Bee]! But don't eat it!! You'll need to turn in 3 for the Egg Hunt Egg. 
</p>
</td></tr></tbody></table>

## Old Repeatable Quests

This piece of content goes bye bye.

The following content has been removed from the game. The contents below may be archival, but feel free to edit below.

The quests required you to collect pollen from 1 field in a certain zone, with the pollen requirement changing depending on the number of bees in the player's [hive](hive.md), and the zone the field is in.

These quests had a 4-hour cooldown in between quests, as opposed to the current 1-hour cooldown.

<table class="article-table mw-collapsible mw-collapsed">
<tbody><tr>
<th rowspan="2">Number of bees (tier)
</th>
<th colspan="3">Pollen requirement
</th>
<th rowspan="2">Rewards
</th></tr>
<tr>
<th><a href="sunflower-field.html">Sunflower Field</a>, <a href="dandelion-field.html">Dandelion Field</a>, <a href="clover-field.html">Clover Field</a>, <a href="mushroom-field.html">Mushroom Field</a>, <a href="blue-flower-field.html">Blue Flower Field</a>
</th>
<th><a href="strawberry-field.html">Strawberry Field</a>, <a href="bamboo-field.html">Bamboo Field</a>, <a href="spider-field.html">Spider Field</a>, <a href="pineapple-patch.html">Pineapple Patch</a>
</th>
<th><a href="pumpkin-patch.html">Pumpkin Patch</a>, <a href="cactus-field.html">Cactus Field</a>, <a href="pine-tree-forest.html">Pine Tree Forest</a>, <a href="rose-field.html">Rose Field</a>
</th></tr>
<tr>
<th>&lt;5 Bees (tier 1)
</th>
<td>5,000</td>
<td>N/A</td>
<td>N/A
</td>
<td><span typeof="mw:Error mw:File"></span>1 <a href="royal-jelly.html"><span class="color-template color-template-royal-jelly color-template-background-clip">Royal Jelly</span></a><br/>
<p><span typeof="mw:Error mw:File"></span>1 <a href="ticket.html"><span class="color-template color-template-ticket color-template-background-clip">Ticket</span></a><br/>
</p>
</td></tr>
<tr>
<th>5-14 Bees (tier 2)
</th>
<td>8,500</td>
<td>17,000</td>
<td>N/A
</td>
<td><span typeof="mw:Error mw:File"></span>1 <a href="royal-jelly.html"><span class="color-template color-template-royal-jelly color-template-background-clip">Royal Jelly</span></a><br/>
<p><span typeof="mw:Error mw:File"></span>1 <a href="ticket.html"><span class="color-template color-template-ticket color-template-background-clip">Ticket</span></a><br/>
<span typeof="mw:Error mw:File"></span>10,000 <a href="honey.html"><span class="color-template color-template-honey">Honey</span></a><br/>
<span typeof="mw:Error mw:File"></span>10 <a href="treat.html"><span class="color-template color-template-treat">Treats</span></a> (20% chance)
</p>
</td></tr>
<tr>
<th>15-24 Bees (tier 3)
</th>
<td>15,000</td>
<td>30,000</td>
<td>45,000
</td>
<td><span typeof="mw:Error mw:File"></span>1 <a href="royal-jelly.html"><span class="color-template color-template-royal-jelly color-template-background-clip">Royal Jelly</span></a><br/>
<p><span typeof="mw:Error mw:File"></span>1 <a href="ticket.html"><span class="color-template color-template-ticket color-template-background-clip">Ticket</span></a><br/>
<span typeof="mw:Error mw:File"></span>20,000 <a href="honey.html"><span class="color-template color-template-honey">Honey</span></a><br/>
<span typeof="mw:Error mw:File"></span>25 <a href="treat.html"><span class="color-template color-template-treat">Treats</span></a> (20% chance)<br/>
<span typeof="mw:Error mw:File"></span>1 <a href="magic-bean.html"><span class="color-template color-template-magic-bean color-template-background-clip">Magic Bean</span></a> (10% chance)
</p>
</td></tr>
<tr>
<th>25-29 Bees (tier 4)
</th>
<td>100,000</td>
<td>200,000</td>
<td>300,000
</td>
<td><span typeof="mw:Error mw:File"></span>1 <a href="royal-jelly.html"><span class="color-template color-template-royal-jelly color-template-background-clip">Royal Jelly</span></a><br/>
<p><span typeof="mw:Error mw:File"></span>2 <a href="ticket.html"><span class="color-template color-template-ticket color-template-background-clip">Tickets</span></a><br/>
<span typeof="mw:Error mw:File"></span>50,000 <a href="honey.html"><span class="color-template color-template-honey">Honey</span></a><br/>
<span typeof="mw:Error mw:File"></span>50 <a href="treat.html"><span class="color-template color-template-treat">Treats</span></a> (20% chance)<br/>
<span typeof="mw:Error mw:File"></span>1 <a href="magic-bean.html"><span class="color-template color-template-magic-bean color-template-background-clip">Magic Bean</span></a> (20% chance)
</p>
</td></tr>
<tr>
<th>30+ Bees (tier 5)
</th>
<td>250,000</td>
<td>500,000</td>
<td>750,000
</td>
<td><span typeof="mw:Error mw:File"></span>1 <a href="royal-jelly.html"><span class="color-template color-template-royal-jelly color-template-background-clip">Royal Jelly</span></a><br/>
<p><span typeof="mw:Error mw:File"></span>2 <a href="ticket.html"><span class="color-template color-template-ticket color-template-background-clip">Tickets</span></a><br/>
<span typeof="mw:Error mw:File"></span>200,000 <a href="honey.html"><span class="color-template color-template-honey">Honey</span></a><br/>
<span typeof="mw:Error mw:File"></span>100 <a href="treat.html"><span class="color-template color-template-treat">Treats</span></a> (20% chance)<br/>
<span typeof="mw:Error mw:File"></span>1 <a href="magic-bean.html"><span class="color-template color-template-magic-bean color-template-background-clip">Magic Bean</span></a> (20% chance)<br/>
<span typeof="mw:Error mw:File"></span>1 <a href="royal-jelly.html#Star_Jelly"><span class="color-template color-template-star-jelly color-template-background-clip">Star Jelly</span></a> (2% chance)
</p>
</td></tr></tbody></table>

<table class="article-table mw-collapsible mw-collapsed">
<tbody><tr>
<th>Type
</th>
<th>Dialogue
</th></tr>
<tr>
<td>Initial (First Talk)
</td>
<td>Hey there! I'm Brown Bear. You ever heard of [Royal Jelly]? It's a special food that changes a bee's type! Apply it to a bee's honeycomb cell, and it'll instantly transform! The great thing is the new type will always be Rare, Epic, or Legendary. Well, I happen to have a LOT of [Royal Jelly]. Don't ask me how I got it. And if you complete my quests I'll give you some. I'll only give you 1 quest every 4 hours, though. Come talk to me again whenever you're ready for a quest!
</td></tr>
<tr>
<td>Quests
</td>
<td>Welcome back! You ready for a new quest? Complete it and I'll give you a jar of [Royal Jelly] and a [Ticket]! Check your Quest menu to see your next task.
<p><i>-During-</i>
</p><p>Looks like you haven't quite finished my quest. Check the quest menu, then collect pollen from the field I've written down. Come back when the meter is filled all the way up. 
</p><p><i>-Completion-</i>
</p><p>Great job bud! Here's a [Royal Jelly]! Apply it to a bee's honeycomb cell and the bee will transform into a new type. In 4 hours, I'll have another quest ready for you.
</p><p><i>-Cooldown-</i>
</p><p>Remember, I'll only give you 1 quest every 4 hours. I need some time to prepare your next rewards!
</p>
</td></tr></tbody></table>

## Gallery

<div class="wikia-gallery wikia-gallery-caption-below wikia-gallery-position-left wikia-gallery-spacing-medium wikia-gallery-border-small wikia-gallery-captions-left wikia-gallery-caption-size-medium" data-seq-no="0" hash="da5c4e8135230ff51e14d80f20430922" id="gallery-0"><div class="wikia-gallery-caption"></div><div class="wikia-gallery-item" style="width:187px; "><div class="thumb" style="height:187px;"><div class="gallery-image-wrapper accent" id="Brown_Bear-PNG" style="position: relative; height:185px; width:185px;"><span style="line-height: 1;">Brown Bear.PNG</span></div></div><div class="lightbox-caption" style="width:185px;">Brown Bear.</div></div><div class="wikia-gallery-item" style="width:187px; "><div class="thumb" style="height:187px;"><div class="gallery-image-wrapper accent" id="BrownBear-png" style="position: relative; height:185px; width:185px;"><span style="line-height: 1;">BrownBear.png</span></div></div><div class="lightbox-caption" style="width:185px;">Brown Bear's perspective view.</div></div><div class="wikia-gallery-item" style="width:187px; "><div class="thumb" style="height:187px;"><div class="gallery-image-wrapper accent" id="Brownbearbeta-png" style="position: relative; height:185px; width:185px;"><span style="line-height: 1;">Brownbearbeta.png</span></div></div><div class="lightbox-caption" style="width:185px;">Brown Bear's beta face.</div></div><div class="wikia-gallery-item" style="width:187px; "><div class="thumb" style="height:187px;"><div class="gallery-image-wrapper accent" id="Screen_Shot_2020-04-20_at_10-38-56_PM-png" style="position: relative; height:185px; width:185px;"><span style="line-height: 1;">Screen Shot 2020-04-20 at 10.38.56 PM.png</span></div></div><div class="lightbox-caption" style="width:185px;">The Top Brown Bear Helpers Leaderboard.</div></div><div class="wikia-gallery-item" style="width:187px; "><div class="thumb" style="height:187px;"><div class="gallery-image-wrapper accent" id="Brown_2-png" style="position: relative; height:185px; width:185px;"><span style="line-height: 1;">Brown 2.png</span></div></div><div class="lightbox-caption" style="width:185px;">A newer version of the leaderboard.</div></div><div class="wikia-gallery-item" style="width:187px; "><div class="thumb" style="height:187px;"><div class="gallery-image-wrapper accent" id="Brown_bear_leaderboard_2025-png" style="position: relative; height:185px; width:185px;"><span style="line-height: 1;">Brown bear leaderboard 2025.png</span></div></div><div class="lightbox-caption" style="width:185px;">A newer version of the leaderboard in 2025.</div></div><div class="wikia-gallery-item" style="width:187px; "><div class="thumb" style="height:187px;"><div class="gallery-image-wrapper accent" id="Brown_Cub-png" style="position: relative; height:185px; width:185px;"><span style="line-height: 1;">Brown Cub.png</span></div></div><div class="lightbox-caption" style="width:185px;">The Brown Cub skin.</div></div><div class="wikia-gallery-item" style="width:187px; "><div class="thumb" style="height:187px;"><div class="gallery-image-wrapper accent" id="Hivesticker_shy_brown_bear-png" style="position: relative; height:185px; width:185px;"><span style="line-height: 1;">Hivesticker shy brown bear.png</span></div></div><div class="lightbox-caption" style="width:185px;">The Shy Brown Bear <a href="sticker.html">Sticker</a>.</div></div></div>

## Trivia

* Before the [2020-04-19 Update](updates.md#2020-04-06), Brown Bear's quests only focused on a single [Field](fields.md) and were scaled relative to the number of bees in the player's hive.
* Prior to the [2018-09-10 update](updates.md#2018-09-10), Brown Bear gave a "daily" quest every 16 hours. However, after the 2018-09-10 update, it changed to 4 hours. After the [2020-04-19](updates.md#2020-04-06) update, he gave a quest every hour.
* There is a [Royal Jellies](royal-jelly.md) token on a hill behind Brown Bear. The player can reach it by having high [Jump Power](system-page.md#Jump_Power) or by using the [Parachute](parachute.md) or [Glider](glider.md) and glide down to it from the top of the [Blue HQ](blue-hq.md) roof.
* He is one of the three permanent Bears that can be found in the [Starter Zone](starter-zone.md), the others being [Black Bear](black-bear.md) and [Mother Bear](mother-bear.md).
* Brown Bear, [Polar Bear](polar-bear.md), and Black Bear are the only three bears with infinite quests.
  * Brown Bear is typically the first bear to start giving endless quests for new players. He is also one of the six quest givers that give repeating quests.
* Brown Bear is the only bear that guarantees royal jelly and tickets for the completion of each quest.
* Brown Bear uses the [Knight Animation Package](https://www.roblox.com/bundles/68/Knight-Animation-Package), the same as [Sun Bear](sun-bear.md).
* He, Black Bear, and Mother Bear were "Nice" in 2018, as stated by [Bee Bear](bee-bear.md) during the Beesmas 2018 Event.
* If the player gave Brown Bear a [Present](present.md) during the Beesmas 2018 Event, he would give a star jelly and [Clover Field](clover-field.md) [Boost](field-boost.md) x4.
* The Brown Cub rewarded for completing 300 of Brown Bear's quests is one of the six [Cub Buddy](cub-buddy.md) skins.
  * Lipsisas was the first player to get a Brown Cub Buddy skin.
* The Beesmas 2020 present dialogue is a merge of Beesmas 2018 and 2019.
* Brown Bear is the only NPC that you can give presents to that could receive the same present twice.
* Brown Bear is the only infinite quest bear whose quests scale in difficulty.
* Excluding event quests, Black Bear & Brown Bear are the only bears that *only* require pollen to be collected.
* If someone somehow gets the Brown Cub Buddy from Brown Bear without owning a Cub Buddy first, they will need to obtain the Black Cub as it only acts as "equipment" for the Cub Buddy.
* Brown Bear is stated to have known [Spirit Bear](spirit-bear.md) since he was a cub.
  * Brown Bear is also stated by [Spirit Bear](spirit-bear.md) to be very reserved - meaning he does not let on much to others.
* Brown Bear is one of the 3 Bears along with Robo Bear and Bee Bear to give out a cub buddy
* Brown Bear visited the Wind Shrine as revealed by [Spirit Bear](spirit-bear.md). It is unknown what he was doing, but he was not donating.
* Brown Bear is stated by [Black Bear](black-bear.md) to spend most of his time near the [Clover Field](clover-field.md). Coincidentally, the same field that is above [King Beetle’s Lair](king-beetle-s-lair.md). Black Bear also states that it could have something to do with his [Royal Jelly](royal-jelly.md) stockpile.

<table class="mw-collapsible NavTable">
<tbody><tr>
<th class="NavTitle" colspan="3">Quest Givers
</th></tr>
<tr>
<th class="NavCategory">Permanent Bears
</th>
<td class="NavLinks NavLinksBasicOdd"><span typeof="mw:Error mw:File"></span> <b><a href="black-bear.html">Black Bear</a></b> • <span typeof="mw:Error mw:File"></span> <b><a href="mother-bear.html">Mother Bear</a></b> • <span typeof="mw:Error mw:File"></span> <b><strong class="mw-selflink selflink">Brown Bear</strong></b> • <span typeof="mw:Error mw:File"></span> <b><a href="panda-bear.html">Panda Bear</a></b> • <span typeof="mw:Error mw:File"></span> <b><a href="science-bear.html">Science Bear</a></b>
<p><span typeof="mw:Error mw:File"></span> <b><a href="dapper-bear.html">Dapper Bear</a></b> • <span typeof="mw:Error mw:File"></span> <b><a href="polar-bear.html">Polar Bear</a></b> • <span typeof="mw:Error mw:File"></span> <b><a href="robo-bear.html">Robo Bear</a></b> •<span typeof="mw:Error mw:File"></span> <b><a href="spirit-bear.html">Spirit Bear</a></b>
</p>
</td></tr>
<tr>
<th class="NavCategory">Traveling Bears
</th>
<td class="NavLinks NavLinksBasicEven"><span typeof="mw:Error mw:File"></span> <b><a href="sun-bear.html">Sun Bear</a></b> • <span typeof="mw:Error mw:File"></span> <b><a href="gummy-bear.html">Gummy Bear</a></b> • <span typeof="mw:Error mw:File"></span> <b><a href="bee-bear.html">Bee Bear</a></b>
</td></tr>
<tr>
<th class="NavCategory">Other
</th>
<td class="NavLinks NavLinksBasicOdd"><span typeof="mw:Error mw:File"></span> <b><a href="gifted-bucko-bee.html">Gifted Bucko Bee</a></b> • <span typeof="mw:Error mw:File"></span> <b><a href="gifted-riley-bee.html">Gifted Riley Bee</a></b> • <span typeof="mw:Error mw:File"></span> <b><a href="honey-bee-npc.html">Honey Bee</a></b>
<p><span typeof="mw:File"><a href="onett.html"><img alt="Beekeeper's Mask" data-image-key="Beekeeper%27s_Mask.png" data-image-name="Beekeeper's Mask.png" data-relevant="1" height="35" src="img/Beekeeper's_Mask.png" width="35"/></a></span> <b><a href="onett.html">Onett</a></b> • <span typeof="mw:Error mw:File"></span> <b><a href="bubble-bee-man.html">Bubble Bee Man</a></b>
</p>
</td></tr></tbody></table>

zh-tw:棕熊
