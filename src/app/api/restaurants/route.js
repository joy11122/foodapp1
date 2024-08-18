import connectToDatabase, { connectstr } from "@/lib/Connect";
import { RestaurantSchema } from "@/lib/models/RestaurantModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  await mongoose.connect(connectstr, { useNewUrlParser: true });
  let success = false;
  let result = await RestaurantSchema.find();
  if (result) {
    success = true;
  }
  return NextResponse.json({ success,result});
}
