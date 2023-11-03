require("dotenv").config();

// Connects to the database... if we had one :(
// TODO
require("./db/index.js");
// Handles http requests (express is node js framework)
const express = require("express");
const app = express();

// Handles the handlebars
const hbs = require("hbs");

// This part runs most pieces of middleware
app.use(express.static("public"));
app.set("view engine", "hbs");
app.set("views", __dirname + "/views/");
const logger = require("morgan");
app.use(logger("dev")); // ejecutar morgan para el entorno de desarrollo
const favicon = require("serve-favicon");
app.use(favicon(__dirname + "/public/images/favicon.ico"));
// Local Variables
// TODO

// 👇 Start handling routes here
const indexRouter = require("./routes/index.routes.js");
app.use("/", indexRouter);

// To handle errors.
// TODO
const errorHandling = require("./error-handlers/index.js");
errorHandling(app);

// Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 3000
let PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
