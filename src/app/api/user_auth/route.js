import { connectstr } from "@/lib/Connect";
import { UserSchema } from "@/lib/models/UserModel";

import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(content){
    const payload=await content.json();
    console.log(454)
    await mongoose.connect(connectstr,{useNewUrlParser:true})
    let success=false;
    console.log(788)
const res= new UserSchema(payload)
const result=await res.save()
if (result) {
    success=true
  
}
return NextResponse.json({success,result})
}