const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

// Config
dotenv.config({ path: "./.env" });

connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`Server is running at ${process.env.PORT}`);
});
