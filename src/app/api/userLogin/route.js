import { connectstr } from "@/lib/Connect";
import { UserSchema } from "@/lib/models/UserModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(content) {
  const payload = await content.json();
  let success = false;
  await mongoose.connect(connectstr, { useNewUrlParser: true });
  const result = await UserSchema.findOne({
    email: payload.email,
    password:payload.password,
  });
  if (result) {
    success = true;
  } else {
    success = false;
  }
  return NextResponse.json({ success, result });
}
