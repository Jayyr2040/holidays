const express = require("express");
const app = express();
const PORT = 3003;
const mongoose = require("mongoose");

// Set up Mongoose
// Error / Disconnection
mongoose.connection.on("error", (err) =>
  console.log(err.message + " is Mongod not running?")
);
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));

//...farther down the page

mongoose.connect("mongodb://localhost:27017/holidays", {
useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true
});
mongoose.connection.once("open", () => {
  console.log("connected to mongoose...");
});

// middleware
app.use(express.json()); //use .json(), not .urlencoded() - to let them know we are passing json back and forth


// Controllers/Routes
const holidaysController = require("./controllers/holidays.js");
app.use("/holidays", holidaysController);


app.listen(PORT, () => {
  console.log("🎉🎊", "celebrations happening on port", PORT, "🎉🎊");
});