const MarkDB = require('../model/MarkModel')
exports.getResult = async (req, res) => {
    const { registerNumber, studentClass } = req.query;
    
    try {
      const result = await MarkDB.findOne({ registerNumber, studentClass });
      if (!result) return res.status(404).json({ message: "No record found" });
      console.log("Fetched result:", result); 

      if (result.isAdmin) return res.json({ isAdmin: true });
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: "Server error" });
    }
  };