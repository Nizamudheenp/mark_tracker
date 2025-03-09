
exports.addMarks = async (req, res) => {
    try {
      const { registerNumber, name, class: studentClass, date, subjects } = req.body;
  
      const newMark = new Mark({
        registerNumber,
        name,
        class: studentClass,
        date,
        subjects,
      });
  
      await newMark.save();
      res.status(201).json({ message: "Mark data added successfully" });
    } catch (error) {
      res.status(500).json({ error: "Error saving data" });
    }
  };