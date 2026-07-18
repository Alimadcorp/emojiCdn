const { standard } = require("./standard.js");
const fs = require("fs");
require('dotenv').config();

fetch("https://slack.com/api/emoji.list", {
    headers: {
        "Authorization": "Bearer " + process.env.TOKEN
    }
}).then(r => r.json()).then(e => {
    if(!e.emoji) console.log(e);
    const emoji = { ...standard, ...(e.emoji) };
    fs.writeFileSync("./app/[id]/list.js", JSON.stringify(emoji, null, 2));
    console.log("Done");
});