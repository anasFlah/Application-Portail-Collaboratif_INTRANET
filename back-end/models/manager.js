const { Schema, model } = require("mongoose");
const manager = new Schema({
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
const manager = model("manager", userSchema);

module.exports = manager;
