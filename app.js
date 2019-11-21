// To use express, we require "express" module
const express = require("express");

// To connect to MongoDB database, we need mongoose module.
const mongoose = require("mongoose");
const dbConfig = require("./config/dbConfig.js");
// console.log(dbConfig.url);

mongoose
  .connect(dbConfig.url, { useNewUrlParser: true })
  .then(() => {
    console.log("--connected to database successfully--");
  })
  .catch(err => {
    console.log("Failed to connect to database: ", err);
  });

// We need to create an express server. (instance of express server)
const app = express();

// Add a body parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());

//Add the employee.routes.js file
require("./routes/employee.routes.js")(app);

app.get("/", (request, response) => {
  response.send(200, "Hello World!!!");
  //response.status(200).send("Hello World!!!");
});

app.listen(3000, () => {
  console.log("Express server started and running on port 3000");
});
