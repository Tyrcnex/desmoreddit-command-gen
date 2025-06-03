---
name: roots
aliases:
  - zeros
  - zeroes
  - rootfinding
  - root
description: Why can't Desmos find my roots?
---
# Desmos can't find my roots!

Consider the equation `cos x = 1`. The solutions should occur at multiples of 2π, so the graph should display infinitely many vertical lines. However, nothing appears. In contrast, if you change the equation to `cos x = 0`, Desmos correctly graphs infinitely many lines at the appropriate locations. Why does Desmos find the correct solutions to one equation but not the other?

When Desmos solves equations, it detects *sign changes* in the corresponding function. For example, with the equation `cos x = 0`, Desmos analyzes the function `f(x) = cos x` to find where it changes sign. Near `x = π/2`, we have `f(1.57) = 0.0007963` and `f(1.571) = -0.00020367`. Since the function changes from negative to positive, Desmos detects a solution at `x = 1`.

However, for `cos x = 1`, Desmos looks for sign changes in `f(x) = cos x - 1`. Since this function is always non-positive (never crossing zero from below), no sign change occurs, and nothing gets graphed. Similarly, `√x = 0` produces no graph, even at `x = 0`, because moving from left to right, the function goes from undefined (`NaN`) to positive values.

This approach can produce unexpected behavior with discontinuous functions like `floor(x)`. For instance, `floor(x) = 2` graphs the line `x = 3` because that's where `floor(x) - 2` first changes sign from negative to positive:

| `x`          | 1  | 1.5 | 2 | 2.5 | **3** | 3.5 |
|--------------|----|-----|---|-----|-------|-----|
| `floor(x)-2` | -1 | -1  | 0 | 0   | **1** | 1   |

Desmos uses similar logic for inequalities: it first applies the sign-change technique to find boundaries, then fills in the appropriate regions. This explains why `floor(x) > 2` graphs `x > 3`.
