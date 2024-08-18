import Restaurent from "@/component/Restaurent";
import { connectstr } from "@/lib/Connect";
import { FoodSchema } from "@/lib/RestaurantModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(){
 
   
await mongoose.connect(connectstr,{useNewUrlParser:true});
     let result=await FoodSchema.find();
    
return NextResponse.json({success:true,result})

}

// export async function POST(content){

//      const payload=await content.json();
//      console.log(payload)
//      await mongoose.connect(connectstr,{useNewUrlParser:true});
//           let r=await FoodSchema.find({recto_id:payload._id});
//       console.log(r)
//      return NextResponse.json({success:true,r})
     
//      }
      export async function POST(content){
   
           const payload=await content.json();
           await mongoose.connect(connectstr,{useNewUrlParser:true});
                const result=new FoodSchema(payload);
                const resto=await result.save();
           return NextResponse.json({success:true,resto})
          
           }