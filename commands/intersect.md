---
name: "intersect"
aliases: ["getintersect", "varintersect"]
description: "Explains how to assign the intersection of two or more functions as a variable."
---
# Getting the intersection of two or more functions as a variable

It's well known that you can click on the intersection between two graphed functions to get their intersection. But what if you want the intersection to automatically be assigned to a variable?

If you want to get *one* intersection, this is easy: use a regression! Given two functions `y=f(x)` and `y=g(x)`, you can do this to get the intersection point:

    f(c)~g(c)
    (c,f(c))     <-- this is the intersection point

Or, if you have two implicit equations such that `f(x,y)=0` and `g(x,y)=0`:

    [f(a,b), g(a,b)] ~ 0
    (a,b)        <-- this is the intersection point

If you want to find one intersection point *without* regression, you can try using simple root-finding algorithms such as Newton-Raphson or the bisection method.

If you need *all* intersection points, that's a bit more difficult. Typically, you'd want a multiple-root-finding algorithm, because intersection points happen when `f(x)-g(x)=0`, so it suffices to find the zeroes of the function `f(x)-g(x)`. For instance, you can use an interval arithmetic library, [such as this one](https://www.desmos.com/calculator/8vg3p8g8p9).