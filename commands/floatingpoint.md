---
name: "fp"
aliases: ["floatp", "floatingp"]
description: "Describes what floating point arithmetic is and how to mitigate problems associated with it."
---
# Floating point arithmetic

In Desmos and many computational systems, numbers are represented using floating-point arithmetic, which can't precisely represent all real numbers. This leads to tiny rounding errors. For example, `√5` is not represented as exactly `√5`: it uses a finite decimal approximation. This is why doing something like `(√5)^2-5` yields an answer that is very close to, but not exactly 0. If you want to check for equality, you should use an appropriate `ε` value. For example, you could set `ε=10^-9` and then use `{|a-b|<ε}` to check for equality between two values `a` and `b`.

There are also other issues related to big numbers. For example, `(2^53+1)-2^53 → 0`. This is because there's not enough precision to represent `2^53+1` exactly, so it rounds. Also, `2^1024` and above is undefined.

For more on floating point numbers, take a look at [radian628's article on floating point numbers in Desmos](https://radian628.github.io/unofficial-desmos-wiki/misc/floating-point-numbers/).