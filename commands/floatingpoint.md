---
name: "fp"
aliases: ["floatp", "floatingp"]
description: "Describes what floating point arithmetic is and how to mitigate problems associated with it."
---
# Floating point arithmetic

In Desmos and many computational systems, numbers are represented using floating point arithmetic, which can't precisely represent all real numbers. This leads to tiny rounding errors. For example, `√5` is not represented as exactly `√5`: it uses a finite decimal approximation. This is why doing something like `(√5)^2-5` yields an answer that is very close to, but not exactly 0. If you want to check for equality, you should use an appropriate `ε` value. For example, you could set `ε=10^-9` and then use `{|a-b|<ε}` to check for equality between two values `a` and `b`.

There are also other issues related to big numbers. For example, `(2^53+1)-2^53` evaluates to 0 instead of 1. This is because there's not enough precision to represent `2^53+1` exactly, so it rounds to `2^53`. These precision issues stack up until `2^1024 - 1`; any number above this is undefined.

## Floating point errors are annoying and inaccurate. Why haven't we moved away from floating point?

*TL;DR:* floating point math is *fast*. It's also accurate enough in most cases.

There are some solutions to fix the inaccuracies of traditional floating point math:

1. **Arbitrary-precision arithmetic:** This allows numbers to use as many digits as needed instead of being limited to 64 bits.
2. **Computer algebra system (CAS):** These can solve math problems symbolically before using numerical calculations. For example, a CAS would know that `(√5)^2` equals exactly `5` without rounding errors.

The main issue with these alternatives is **speed**. Arbitrary-precision arithmetic is slower because the computer needs to create and manage varying amounts of memory for each number. Regular floating point is faster because it uses a fixed amount of memory that can be processed more efficiently. CAS is even slower because it needs to understand mathematical relationships between values, requiring complex logic and more memory. Plus, when CAS can't solve something symbolically, it still has to fall back on numerical methods anyway.

So floating point math is here to stay, despite its flaws. And anyways, the precision that floating point provides is usually enough for most use-cases.

---

For more on floating point numbers, take a look at [radian628's article on floating point numbers in Desmos](https://radian628.github.io/unofficial-desmos-wiki/misc/floating-point-numbers/).