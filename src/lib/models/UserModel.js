import { mongoose } from "mongoose";

const UserModel=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    city:String,
    phone:String,
    address:String,
})
export const UserSchema=mongoose.models.user || mongoose.model("user",UserModel)