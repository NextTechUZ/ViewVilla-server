const express = require("express");
const bot = require("./bot");
const app = express();

app.use(express.json());

app.post("/order", (req, res) => {
   bot.telegram.sendMessage(
    -1001948727154,
    `Name:  ${req.body.fullName}\nPhone Number: ${req.body.phoneNumber}\nOrderType:  ${req.body.orderType} `
  );
  res.status(200).send("Succes");
});

module.exports = app;
