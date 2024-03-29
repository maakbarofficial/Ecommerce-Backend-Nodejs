const app = require("./app");
const dotenv = require("dotenv");

// Config
dotenv.config({ path: "./.env" });

app.listen(process.env.PORT, () => {
  console.log(`Server is running at ${process.env.PORT}`);
});
