import { connectstr } from "@/lib/Connect";
import { FoodSchema } from "@/lib/RestaurantModel";
import { RestaurantSchema } from "@/lib/models/RestaurantModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server"

export async function GET(request,content){
const id=content.params.id;

await mongoose.connect(connectstr,{useNewUrlParser:true})
let success=false
let Resto= await RestaurantSchema.find({_id:id})
let Food=await FoodSchema.find({recto_id:id})

if(Resto && Food){
    success=true
}

return NextResponse.json({success,Resto,Food})
}