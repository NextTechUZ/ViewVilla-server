const { Telegraf } = require("telegraf");


const bot =new Telegraf(process.env.BOT_TOKEN)


bot.use(ctx => {
    ctx.reply("m,asd")
})



module.exports = bot