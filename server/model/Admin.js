import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    email :{
        type:String,
        required:true
    },

})