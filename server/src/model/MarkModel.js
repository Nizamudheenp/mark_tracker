const mongoose = require("mongoose");

const markSchema = new mongoose.Schema({
  registerNumber: { type: String, required: true },
  name: { type: String, required: true },
  studentClass: { type: String, required: true }, // Changed `class` to `studentClass`
  date: { type: Date, required: true },
  rank: { type: String, default: "" },
  isAdmin: { type: Boolean, default: false }, // This should not change unless needed
  subjects: [
    {
      title: { type: String, required: true },
      totalMark: { type: Number, required: true },
      maxMark: { type: Number, required: true },
      status: { type: String, required: true }
    }
  ]
});

const Mark = mongoose.model("Mark", markSchema);
module.exports = Mark;
