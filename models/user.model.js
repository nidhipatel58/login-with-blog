let mongoose = require("mongoose");

let UserSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    password:{
        type:Number,
        require:true
    },
    email:{
        type:String,
        require:true
    }
})

let user=mongoose.model("User",UserSchema);
module.exports=user;