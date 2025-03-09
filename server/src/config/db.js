require("dotenv").config()
const mongoose = require("mongoose");


const connectDB = async ()=>{
    try {
        const DB = await mongoose.connect(process.env.MONGO_URI) 
        if(DB){
            console.log("DB conection successful");       
         } 
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = connectDB
