const express = require('express')
const app = express();
require("dotenv").config()
const adminRoute = require('./src/routes/adminRoute')
const studentRoute = require('./src/routes/studentRoute')
const connectDB = require('./src/config/db')
connectDB()

app.use(express.json());
app.use("/api/student",studentRoute)
app.use("/api/admin",adminRoute)


const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));