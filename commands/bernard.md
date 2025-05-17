---
name: bernard
aliases:
  - ourbeloved
  - desmosmascot
  - r/foundbernard
description: Explains who Bernard is and why he appears in certain graphs!
---
Open up a graph and type in `tan 35.6x=0`.

![img](7s2h831mdnze1)

This is Bernard! He's an artifact resulting from how Desmos's implicit graphing algorithm works.
# How does the algorithm work, and why does it result in Bernard?

The algorithm is a quadtree-based marching squares algorithm. It divides the screen (actually, a region slightly larger than the screen to capture the edges) into four equal regions (four quads) and divides them again and again recursively (breadth-first). Here are the main rules for whether the quad should be divided (higher rules are higher precedence):
1. Descend to depth 5 (1024 uniformly-sized quads)
2. Don't descend if the quad is too small (about 10 pixels by 10 pixels, converted to math units)
3. Don't descend if the function F is not defined (NaN) at all four vertices of the quad
4. Descend if the function F is not defined (NaN) at some, but not all, vertex of the quad
5. Don't descend if the gradients and function values indicate that F is approximately locally linear within the quad, or if the quad suggest that the function doesn't passes through F(x)=0
6. Otherwise descend

The algorithm stops if the total number of quads exceeds `2^14=16384`. Here's a breakdown of how the quads are descended in a high-detail graph:
- Point 2 above means that the quads on the edge of the screen (124 of them) don't get descended further. This means that there are only 900 quads left to descend into.
- The quota for the remaining quads is `16384-124=16260`. Those quads can divide two more times to get `900*4^2=14400` leaves, and `16260-14400=1860` leaves left to descend.
- Since each descending quad results in 4 leaf quads, each descend creates 3 new quads. Hence, there are `1860/3=620` extra subdivisions, which results in a ratio of 620/14400 quads that performed the final subdivision. 
- This is basically the ratio of the area of Bernard to the area of the graph paper.
