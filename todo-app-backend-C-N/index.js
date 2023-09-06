const express = require("express");
const app = express();
const db = require("./config/mongoose");

//Using Body parser for JSON responses
app.use(express.urlencoded());

//Setting Ejs as Template engine
app.set("view engine", "ejs");
app.set("views", "./views");

//Connecting assets to ejs
app.use(express.static("./assets"));

//Seeting up the Routes
app.use("/", require("./routes"));

//Running Server
app.listen(8000, function (err) {
  if (err) console.error("Error in listing server");
  console.log("Server listening on port 8000");
});