const mongoose = require('mongoose')

const Todochema = new mongoose.Schema({
    ///schema is template of what goes into the database
    firstName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: false,
    },
    status: {
        type: Boolean,
        required: true,
    }
})

module.exports = mongoose.model('mydbcollection', Todochema)