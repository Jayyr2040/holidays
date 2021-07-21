const mongoose = require("mongoose");

const holidaySchema = mongoose.Schema({
  name: { type: String, required: true },
  celebrated: { type: Boolean, default: false },
  description: { type: String, default: "Best holiday ever!" },
  likes: { type: Number, default: 0 },
  tags: [{ type: String }],
});

module.exports = mongoose.model("Holiday", holidaySchema);

// * never keep derived data like celebrated. use Date instead as I can calculate if i celebrted or not
/* const holiday = {
    name: "New Year",
    celebrated: true,
    description: "Whatever",
    likes: ["simon","jun siang","sam"],
    religion: ["buddhist","christian"],
    tags: ["yearly","everyone"]
} */