const express = require("express");
const bot = require("./bot");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.post("/order", (req, res) => {
  
     bot.telegram.sendMessage(
    process.env.CHANNEL_ID,
    `Name:  ${req.body.fullName}\nPhone Number: ${req.body.phoneNumber}\n${req.body.message ? `Message:  ${req.body.message}` :""} `
  );


  res.status(200).send("Succes");
   
  
});

module.exports = app;
 