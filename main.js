import fs from 'fs';
import parseMD from 'parse-md';

// this code sucks lol

const files = fs.readdirSync("commands", "utf-8");
const yamls = [];

let helpMessage = `type: comment
body (regex): "^(?i)!(help|hlp)[\\\\s\\\\S]*"
comment: "I've PM'ed the list of commands to you!"
message: |
    # All commands
    `;

for (const filename of files) {
    const file = fs.readFileSync("commands/" + filename, "utf-8");
    const { metadata, content } = parseMD(file);
    const description = `\`!${metadata.name}\`: ${metadata.description}`;
    helpMessage += `\n    - ${description}\n        - aliases: ${metadata.aliases.map(x => `\`${x}\``).join(", ")}`
    
    const str = `---

# ${description}
type: comment
body (regex): "^(?i)!(${[metadata.name, ...metadata.aliases].join("|")})[\\\\s\\\\S]*"
comment: |
${content.trim().split("\n").map(x => "    " + x).join("\n")}`;

    yamls.push(str);
}
yamls.unshift(helpMessage);

fs.writeFileSync("automod.yaml", yamls.join("\n"));

console.log("Wrote to automod.yaml!");