
import mongoose from 'mongoose';

const RestaurantModel = new mongoose.Schema({
  name:String,
  email:String,
  password:String,
  city:String,
  phone:String,
  address:String,
 

});

export const RestaurantSchema=  mongoose.models.AllRestaurant || mongoose.model('AllRestaurant',RestaurantModel);
