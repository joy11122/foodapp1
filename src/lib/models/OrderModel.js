
import mongoose from 'mongoose';

const RestaurantModel = new mongoose.Schema({
    user_id:mongoose.Schema.Types.ObjectId,
    food_ids:String,
    deliveryman_id:mongoose.Schema.Types.ObjectId,
    recto_id:mongoose.Schema.Types.ObjectId,
    status:String,
    total_amount:String,
 

});

export const OrderSchema=  mongoose.models.order || mongoose.model('order',RestaurantModel);
