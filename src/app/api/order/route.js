import { connectstr } from "@/lib/Connect";
import { OrderSchema } from "@/lib/models/OrderModel";
import { RestaurantSchema } from "@/lib/models/RestaurantModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(content) {
  const payload = await content.json();
  await mongoose.connect(connectstr, { useNewUrlParser: true });
  const res = new OrderSchema(payload);
  let success = false;
  const result = await res.save();
  if (result) {
    success = true;
  }
  return NextResponse.json({ success, result });
}

export async function GET(request) {
  const id = request.nextUrl.searchParams.get("id");
  await mongoose.connect(connectstr, { useNewUrlParser: true });
  let success = false;
  let result = await OrderSchema.find({ user_id: id });
  if (result) {
    let restoinfo =await Promise.all(
      result.map(async(item) => {
        let restoData={}
        restoData.data =  await RestaurantSchema.find({_id:item.recto_id})
        restoData.Amount=item.total_amount;
        restoData.Status=item.status;
        return restoData;
      })
    
    );
   
    result=restoinfo
    success=true
  }
  return NextResponse.json({success,result });
}
