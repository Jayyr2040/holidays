require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT;
const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI;
// const cors = require("cors");

// only this site can access my express. if not default will be all
/* const whitelist = [
    "http://localhost:3000",
    "https://fathomless-sierra-68956.herokuapp.com",
  ];

  const corsOptions = {
    origin: (origin, callback) => {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  }; */

// Set up Mongoose
// Error / Disconnection
mongoose.connection.on("error", (err) =>
  console.log(err.message + " is Mongod not running?")
);
mongoose.connection.on("disconnected", () => console.log("mongo disconnected"));

//...farther down the page

mongoose.connect(MONGODB_URI, {
useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true
});
mongoose.connection.once("open", () => {
  console.log("connected to mongoose...");
});

// middleware
app.use(express.static('public'));
app.use(express.json()); //use .json(), not .urlencoded() - to let them know we are passing json back and forth
// all routes are now exposed, 
// sometimes you just want to limit access 
// (ie OMDB - it's ok for anyone to see the movies, 
// but you don't want just anyone updating the movies)
// app.use(cors(corsOptions)); 

// Controllers/Routes
const holidaysController = require("./controllers/holidays.js");
app.use("/holidays", holidaysController);


app.listen(PORT, () => {
  console.log("🎉🎊", "celebrations happening on port", PORT, "🎉🎊");
});