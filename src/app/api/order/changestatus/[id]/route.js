import { connectstr } from "@/lib/Connect";
import { OrderSchema } from "@/lib/models/OrderModel";

import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request,content) {
   const id=content.params.id;
   await mongoose.connect(connectstr,{useNewUrlParser:true})

   const result=await OrderSchema.find({_id:id})
   
    return NextResponse.json({success:true,result });
  }
  