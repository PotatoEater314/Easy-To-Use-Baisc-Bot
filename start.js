const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs")
const config = require("./util/config.json")



fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);

  files.forEach(file => {
    if (!file.endsWith(".js")) return;
      const event = require(`./events/${file}`);
   
  let eventName = file.split(".")[0];

      client.on(eventName, event.bind(null, client));
      delete require.cache[require.resolve(`./events/${file}`)];

    });
});

client.login(token);
