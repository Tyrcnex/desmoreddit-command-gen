---
name: "beta3d"
aliases: ["3dbeta"]
description: "Explains what Beta3D is and how to install it."
---

# Beta3D

*Please note that Beta 3D does NOT refer to the whole 3D calculator (which is in beta) at https://www.desmos.com/3d.* **Beta 3D consists of the following features**:

- Shaders
- Translucent surfaces (opacity)
- Free rotation
- Clip to box
- Resolution

The following simple graph demonstrates all of the above features except for resolution: https://www.desmos.com/3d/qnjl4xx7cp

![gif](k7ldlfu4bfse1)

To use Beta 3D:

1. Install [Tampermonkey](https://www.tampermonkey.net/), a userscript extension.
2. Install the following script:

        // ==UserScript==
        // @name         Beta3D
        // @namespace    http://tampermonkey.net/
        // @version      0.12
        // @description  Enable beta3d query param on desmos 3d
        // @author       You
        // @match        https://www.desmos.com/3d*
        // @grant        none
        // ==/UserScript==
        
        await new Promise(res => setInterval(_ => Calc && res(), 200))
            .then(_ => Calc._calc.graphSettings.config.beta3d = true);
        
3. Save the script and open the graph!

4. If the graph still doesn't render correctly (e.g. a gray surface instead of a colored surface), click on the Tampermonkey extension and check if it says anything about enabling Developer Tools. Follow the instructions that Tampermonkey provides to fix this issue.
