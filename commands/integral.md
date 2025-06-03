---
name: integral
aliases:
  - integration
  - integrate
  - wrongintegral
description: Explains why some integrals yield wrong results.
---
# Why does my integral yield a wrong result?

You may have noticed that some integrals do not yield correct results in Desmos. For example, integrating `{0.9 < x < 1, 0}` from -2 to 2 incorrectly gives 0 instead of 0.1^([\[1\]](https://redd.it/u60234)). Similarly, certain improper integrals are not evaluated correctly; for instance, the integral of `(sin x)/x` from -∞ to ∞ should be π, but Desmos reports it as undefined (`NaN`). In another case, the integral of `1/(x ln x)` from 2 to ∞ is reported as `4.01927944912`, even though it should actually diverge^([\[2\]](https://redd.it/1jyaaic)).

Some possible reasons why Desmos reports these integrals incorrectly:

- **For finite bounds:** Desmos uses 65 initial sample points for tanh-sinh quadrature. If all sample points miss important features of the function (which is often the case with discontinuous functions) the reported value can be incorrect^([\[3\]](https://redd.it/u60234))^([\[graph\]](https://www.desmos.com/calculator/06pjqkck2x)).
- **For infinite bounds:** Desmos applies a rational change of variables to convert the problem to one with finite bounds^([\[2\]](https://redd.it/1jyaaic))^([\[4\]](https://x.com/shapeoperator/status/1280925334037094400)). However, the transformed integral may still diverge at the bounds (for example, after the change of variables, `(sin x)/x` oscillates infinitely at the new finite bounds).

Ultimately, all numerical integration schemes use a finite number of sample points, which can lead to incorrect results in some cases. Switching from numerical to symbolic integration would significantly impact performance, and the Desmos developers are still working on ways to address these limitations^([\[5\]](https://x.com/shapeoperator/status/1447950028648206340)).
