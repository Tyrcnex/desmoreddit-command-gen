---
name: "exception"
aliases: ["fpexception", "fpointexception", "ieeeexception", "specialcase", "undef"]
description: "Describes types of floating point exceptions in Desmos, mostly drawn from IEEE specs."
---
# Floating point exceptions

Have you wondered why `1/(1/0) = 0` in Desmos? What about `0^0 = 1`? Or what about `tanh(∞) = 1`? To understand why this happens, we need to talk about **floating point exceptions**.

---

Desmos runs on Javascript, which in turn follows IEEE 754 double precision (mostly). As such, Desmos inherits many of the exception handling rules that IEEE 754 specifies. Here are some (but probably not all) of these rules:

- There are two types of `undefined`: `∞` and `NaN`. To see which is which in the evaluation box, you need to have DesModder installed.
- Unless you're using NaN in a boolean type expression (like piecewises or list filters), all other operations on NaN turn into NaN (this is called NaN propagation).
- `∞` can be signed. There's `∞` and `-∞`.
- There's two types of 0s: 0 and -0. This may seem weird, but this is because `1/0 = ∞` while `1/(-0) = -∞`. Also, `0 + 0 = 0`. `-0 + 0 = 0`. `0 * (-0) = -0`.
- Some built-in functions implement behavior relating to `∞`. For example, `tanh(∞)`, `sgn(∞)`, and `erf(∞)` all evaluate to 1. Additionally, something like `tan(π/2)` evaluates to `∞`.
- Multiplication: `0 * ∞ = NaN`. `∞ * ∞ = ∞`.
- Division by 0: `+/0 = ∞`. `0/0 = NaN`. `-/0 = -∞`.
- Division by ∞: `+/∞ = 0`. `∞/∞ = NaN`. `-/∞ = -0`.
- Zero powers: `0^+ = 0`. `0^0 = 1`. `0^- = ∞`.
- ∞ powers: `∞^+ = ∞`. `∞^0 = 1`. `∞^- = 0`. In other words, `∞^x = 0^(-x)`.
- Powers to ∞: `x^∞ = 0` if `-1<x<1`. `(±1)^∞ = NaN`. Otherwise, `x^∞ = ∞`.

These rules have some consequences. For example, `0^0^x` can be used to represent `{x > 0, 0}`, which is similar to `sgn()` but ranges from 0 to 1 instead. `1^x` can be used to coerce an ∞ value to a NaN. These compact ways of writing expressions make them useful in golfing, where the goal is to draw certain regions using the fewest symbols possible.

**Note**: Many of these power rules do not work in Complex Mode because it uses a different form of arithmetic. They also may not work as intended inside derivatives (e.g. `y = d/dx (0^0^x)` should theoretically become `y = 0 {x ≠ 0}`, but it actually becomes `y = 0 {x > 0}`).

For more information on some of these exceptions, refer to the following:
- https://en.wikipedia.org/wiki/IEEE_754#Exception_handling
- [IEEE report](https://www-users.cse.umn.edu/~vinals/tspot_files/phys4041/2020/IEEE%20Standard%20754-2019.pdf)
- [ECMAScript spec](https://tc39.es/ecma262/), [W3C spec](https://www.w3.org/TR/), and [WHATWG spec](https://html.spec.whatwg.org/)
