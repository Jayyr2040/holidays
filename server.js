const express = require("express");
const app = express();
const PORT = 3003;

// Controllers/Routes
const holidaysController = require("./controllers/holidays.js");
app.use("/holidays", holidaysController);


app.listen(PORT, () => {
  console.log("🎉🎊", "celebrations happening on port", PORT, "🎉🎊");
});