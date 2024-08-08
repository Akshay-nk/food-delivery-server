const mongoose = require('mongoose')

const userschema=new mongoose.Schema({
    email: { type: String, required: true, unique: true, 
        validator(value){
         if(!validator.isEmail(value)){
           throw new Error("invalid email")
         }
        }
 },
 password: { type: String, required: true },
 username: { type: String, required: true }
})

const Users=mongoose.model('users',userschema)

module.exports=Users