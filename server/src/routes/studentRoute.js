const express = require("express");
const { getResult } = require("../controllers/studentController");
const router = express.Router()

router.get('/getresult',getResult)
module.exports = router