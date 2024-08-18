import { connectstr } from "@/lib/Connect";
import { RestaurantSchema } from "@/lib/models/RestaurantModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request) {
  const queryParams=request.nextUrl.searchParams
  let filter = {};
  if (queryParams.get("city")) {
    filter = { city: queryParams.get("city") };
  } else if (queryParams.get("restaurent")) {
    filter = { name: queryParams.get("restaurent") };
  }
  await mongoose.connect(connectstr, { useNewUrlParser: true });
  let success = false;
  const result = await RestaurantSchema.find(filter);
  if (result) {
    success = true;
  }
  return NextResponse.json({ success, result });
}

export async function POST(content) {
  const payload = await content.json();
  await mongoose.connect(connectstr, { useNewUrlParser: true });
  const result = new RestaurantSchema(payload);
  const data = await result.save();

  return NextResponse.json({ success: true, data });
}
