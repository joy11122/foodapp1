import { connectstr } from "@/lib/Connect";
import { FoodSchema } from "@/lib/RestaurantModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export async function GET(request,content){
  const id=content.params.id
console.log(id)
    await mongoose.connect(connectstr,{useNewUrlParser:true});
    let success=false
    let result=await FoodSchema.find({recto_id:id});
    
   if (result) {
    success=true
   }
return NextResponse.json({success,result})
}