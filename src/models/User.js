const mongooes = require('mongoose');

const UserSchema= new mongooes.Schema({
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

mongooes.model('User', UserSchema);