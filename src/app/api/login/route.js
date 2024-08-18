import { connectstr } from "@/lib/Connect";
import { RestaurantSchema } from "@/lib/models/RestaurantModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(content) {
  const payload = await content.json();
  await mongoose.connect(connectstr, { useNewUrlParser: true });
  let success = false;
  let res = await RestaurantSchema.findOne({
    email: payload.email,
    password: payload.password,
  });

  if (res) {
    success = true;
  } else {
    success = false;
  }
  return NextResponse.json({ success, res });
}
