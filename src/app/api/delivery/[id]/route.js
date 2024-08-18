import { connectstr } from "@/lib/Connect";
import { OrderSchema } from "@/lib/models/OrderModel";
import { RestaurantSchema } from "@/lib/models/RestaurantModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request, content) {
  const id = content.params.id;
  console.log(id);
  await mongoose.connect(connectstr, { useNewUrlParser: true });
  let success = false;
  let result = await OrderSchema.find({ deliveryman_id: id });

  if (result) {
    let data = await Promise.all(
      result.map(async (item) => {
        let restoInfo = {};
        restoInfo.data = await RestaurantSchema.findOne({ _id: item.recto_id });
        restoInfo.Amount = item.total_amount;
        restoInfo.status = item.status;
        restoInfo.ids = item._id;
        return restoInfo;
      })
    );
    result = data;
    success = true;
  }

  return NextResponse.json({ success, result });
}
