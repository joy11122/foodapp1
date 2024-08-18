import { connectstr } from "@/lib/Connect"
import { OrderSchema } from "@/lib/models/OrderModel";
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export async function GET(content){
    const id=content.params.id;
    console.log(id)
await mongoose.connect(connectstr,{useNewUrlParser:true})
const res=await OrderSchema.find({recto_id:id})
console.log(res)
return NextResponse.json({success:true,res})

}
export async function PUT(content){
    const id=content.params.id;
    console.log(id)
await mongoose.connect(connectstr,{useNewUrlParser:true})
const res=await OrderSchema.find({recto_id:id})
console.log(res)
return NextResponse.json({success:true,res})

}