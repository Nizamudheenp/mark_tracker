const MarkDB = require('../model/MarkModel')
exports.getResult = async (req, res) => {
    const { registerNumber, class: studentClass } = req.query;
    
    try {
      const result = await MarkDB.findOne({ registerNumber, class: studentClass });
      if (!result) return res.status(404).json({ message: "No record found" });
  
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  };