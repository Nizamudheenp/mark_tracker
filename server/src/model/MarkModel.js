const mongoose = require("mongoose");

const markSchema = new mongoose.Schema({
  registerNumber: { type: String, required: true },
  name: { type: String, required: true },
  class: { type: String, required: true },
  date: { type: Date, required: true },
  rank: { type: String, default: "" },
  subjects: [
    {
      title: { type: String, required: true },
      totalMark: { type: Number, required: true },
      maxMark: { type: Number, required: true },
      status: { type: String, required: true } 
    }
  ]
});

const Mark = mongoose.model("marks", markSchema);
module.exports = Mark;
