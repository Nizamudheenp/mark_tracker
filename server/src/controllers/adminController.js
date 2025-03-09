const Mark = require("../model/MarkModel");

exports.addMarks = async (req, res) => {
    try {
      const { registerNumber, name, studentClass, date, subjects,isAdmin  } = req.body;
  
      const newMark = new Mark({
        registerNumber,
        name,
        studentClass,
        date,
        subjects,
        isAdmin: isAdmin || false,
      });
  
      await newMark.save();
      res.status(201).json({ message: "Mark data added successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };