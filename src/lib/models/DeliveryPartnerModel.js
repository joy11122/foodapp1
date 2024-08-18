
import mongoose from 'mongoose';

const  DeliveryPartnerModel = new mongoose.Schema({
  name:String,
  email:String,
  password:String,
  city:String,
  phone:String,
  address:String,
 

});

export const DeliveryPartnerSchema=  mongoose.models.deliverypartner || mongoose.model('deliverypartner',DeliveryPartnerModel);
