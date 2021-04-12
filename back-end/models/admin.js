const { Schema, model } = require("mongoose");
const admin = new Schema({
    username:{
        type:String,
        required:true,
        uniqure:true,
    },
    password:{
        type:String,
        required: true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    date: {
        type: Date,
        default: Date.now,
      },

})
const admin = model("admin", userSchema);

module.exports = admin;
