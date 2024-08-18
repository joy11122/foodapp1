import { connectstr } from "@/lib/Connect"
import { DeliveryPartnerSchema } from "@/lib/models/DeliveryPartnerModel"
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export async function POST(content){

const payload= await content.json()

await mongoose.connect(connectstr,{useNewUrlParser:true})
let success=false
let result=new DeliveryPartnerSchema(payload);
result=await result.save()
if (result) {
    success=true
}
return NextResponse.json({success,result})



}



