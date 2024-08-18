
 import mongoose from 'mongoose';

 const RestaurantModel = new mongoose.Schema({
   name:String,
   description:String,
   price:String,
   imagePath:String,
   recto_id:mongoose.Schema.Types.ObjectId,
  
 
 });

 export const FoodSchema=mongoose.models.restaurant || mongoose.model('restaurant',RestaurantModel);
