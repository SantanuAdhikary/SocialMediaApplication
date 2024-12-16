const mongoose = require("mongoose")

require("dotenv").config()

const url = process.env.URL

exports.connectDB = async()=>{
    try{

        await mongoose.connect(url);
        console.log('database connected')
    }
    catch(err)
    {
        console.log(err)
    }
}

