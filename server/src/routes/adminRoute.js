const express = require("express");
const { addMarks } = require("../controllers/adminController");
const router = express.Router()

router.post('/addresults',addMarks)

module.exports = router