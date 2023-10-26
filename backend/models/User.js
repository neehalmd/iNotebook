const mongoose = require('mongoose')
const {Schema} = mongoose

//a dbschema that will be converted into mongoose model in exports
const UserSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    date : {
        type : Date,
        default : Date.now
    }

})
module.exports = mongoose.model('users' , UserSchema)