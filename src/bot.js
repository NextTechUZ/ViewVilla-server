const { Telegraf } = require("telegraf");


const bot =new Telegraf(process.env.BOT_TOKEN)




bot.use(ctx => {
    console.log(ctx);
    ctx.reply("ctx")
})

 
module.exports = bot