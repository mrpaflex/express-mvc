const mongoose = require('mongoose');


const connectDB = async ()=>{
    try {
        await mongoose.connect(DB_STRING, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
        })
        console.log('connnected to db')
    } catch (error) {
       console.log(error);
       process.exit(1)
    }
}

module.exports = connectDB



