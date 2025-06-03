import fs from 'fs';
import parseMD from 'parse-md';

// this code sucks lol

const files = fs.readdirSync("commands", "utf-8");
const yamls = [];

const genRegex = a => `"^(?i)\`*\\\\s*!(${a.join("|")})(\\\\s+|$)[\\\\s\\\\S]*"`

let helpMessage = `type: comment
body (regex): ${genRegex(["help", "hlp"])}
comment: "I've PM'ed the list of commands to you!"
message: |
    # All commands
    
    - \`!help\`: Brings up a list of all the commands.
        - Aliases: \`hlp\``;

for (const filename of files) {
    if (!filename.endsWith(".md")) continue;
    const file = fs.readFileSync("commands/" + filename, "utf-8");
    const { metadata, content } = parseMD(file);
    const description = `\`!${metadata.name}\`: ${metadata.description}`;
    helpMessage += `\n    - ${description}\n        - Aliases: ${metadata.aliases.map(x => `\`${x}\``).join(", ")}`
    
    const str = `---

# ${description}
type: comment
body (regex): ${genRegex([metadata.name, ...metadata.aliases])}
comment: |
${content.trim().split("\n").map(x => "    " + x).join("\n")}`;

    yamls.push(str);
}
yamls.unshift(helpMessage);

fs.writeFileSync("automod.yaml", yamls.join("\n"));

console.log("Wrote to automod.yaml!");