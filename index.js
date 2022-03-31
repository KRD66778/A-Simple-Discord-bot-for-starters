//info if you are not using express then no need of this ig 
const express = require("express")
const app = express()
//

app.get("/", (req, res) => {
        res.send("Made By KRD66778") 
})

app.listen(3000, () => {
  console.log("Bot is logged in as")
})


const Discord= require("discord.js")
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
const fs = require("fs");
const prefix = "(your bot prefix here)"
client.commands = new Discord.Collection();
const commands = fs.readdirSync("./Commands").filter(file => file.endsWith(".js"))
for(file of commands) {
  const commandName = file.split(".")[0]
  const command = require(`./Commands/${commandName}`)
  client.commands.set(commandName, command)
}

client.on("ready", () => {
  console.log(client.user.username)
})

client.on("ready", () => {
    client.user.setStatus("online");
});

client.on("messageCreate", message => {
if (message.content.startsWith(prefix)) {
  const args = message.content.slice(prefix.length).trim().split(/ +/g)
  const commandName = args.shift()
 const command = client.commands.get(commandName)
  if(!command) return 
  command.run(client, message, args)
}
})

client.on("messageCreate", async message => {
  if(message.content ===  "Ping") { //note this line means that if a message named Ping comes then
    message.channel.send("Pong") //the bot will reply pong
    message.react('😉') //and this is not necessary this is just for reacts (not necessary between)
    
          //IMPORTANT- You have to do some changes in package.json also like edit the name there
    
    
    })
    client.login(process.env.token)  //IMPORTANT- As you can see its written as token in small letters so if your repl is public then go to secrets and create a secret named token and in the value paste your bot token!
  
  //also if your repl is private then just remove the login code and paste client.login("your token here")
