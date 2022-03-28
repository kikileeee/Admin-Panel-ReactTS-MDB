const mongoose = require('mongoose')

let danas = new Date()
let date = danas.getFullYear() + '-' + (danas.getMonth() + 1) + '-' + danas.getDate()

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    role: String,
    date: {
        type: Date,
        required: true,
        default: date
    },
})

module.exports = mongoose.model('User', userSchema)