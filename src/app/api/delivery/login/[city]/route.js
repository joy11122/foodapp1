import { connectstr } from "@/lib/Connect";
import { DeliveryPartnerSchema } from "@/lib/models/DeliveryPartnerModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request,content) {
  const city = await content.params.city;
console.log(city)
  await mongoose.connect(connectstr, { useNewUrlParser: true });
  let success = false;
  let result = await DeliveryPartnerSchema.find({ city: city });
  if (result) {
    result = result.map((item) => {
      return item.id;
    });

    success = true;
  }
  return NextResponse.json({ success, result });
}
