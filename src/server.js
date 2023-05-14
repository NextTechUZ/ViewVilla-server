const dotenv = require("dotenv");
dotenv.config();
const bot = require("./bot");
const app = require("./app");

const PORT = process.env.PORT || 3001;

app.listen(PORT, "", () => console.log("Server is running at " + PORT));
bot.launch();
 