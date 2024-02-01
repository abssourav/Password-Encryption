require('dotenv').config()
const mongoose = require('mongoose')
const ecrypt = require('mongoose-encryption')

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        required: [true, "Email is required"]
    },
    
    password : {
        type : String,
        required: [true, "Password is required"]
    },
    createdOn:{
        type:Date,
        default: Date.now
    }

})

const encKey = process.env.ENC_KEY

userSchema.plugin(ecrypt,{
    secret : encKey,
    encryptedFields: ['password']
})

module.exports = mongoose.model("Users", userSchema)