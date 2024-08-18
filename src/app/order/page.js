"use client";
import Navbar from "@/component/Navbar";
import { delivery_charge, tax } from "@/lib/constant/constant";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const Page = () => {
  const user =localStorage.getItem("User")&& JSON.parse(localStorage.getItem("User"));
  const Cart = localStorage.getItem("NewCart") &&JSON.parse(localStorage.getItem("NewCart"));
  let totalPriceList = Cart?.map((item) => {
    return item.price;
  });
  let total = totalPriceList?.reduce((a, b) => {
    return parseInt(a) + parseInt(b);
  }, 0);
  console.log(total);
  const router=useRouter()
  if (!user) {
    router.push("/")
  }
  const HandlePlaceOrder = async () => {
    const cart =localStorage.getItem("NewCart")&& JSON.parse(localStorage.getItem("NewCart"));
    const user=localStorage.getItem("User")&& JSON.parse(localStorage.getItem("User"));
    const food_ids = cart?.map((item) =>
     item._id).toString();
const city=user.city;
const user_id=user._id;
console.log(city)
let ress=await fetch("http://localhost:3000/api/delivery/login/"+city)
ress= await ress.json()


 
    const deliveryman_id = ress.result[Math.floor(Math.random()*ress.result.length)]
    
    const recto_id = cart&&cart[0].recto_id;
    const status = "Confirm";
    const total_amount = total + delivery_charge + (total * tax) / 100;

    const collection = {
      user_id,
      food_ids,
      deliveryman_id,
      recto_id,
      status,
      total_amount,
    };
    const res = await fetch("http://localhost:3000/api/order",{
      method: "post",
      body: JSON.stringify(collection),
    });
const result=await res.json()
if (result.success) {
 
  localStorage.removeItem("NewCart")
router.push("/profile")
}else{
  alert("failed")
}
    console.log(collection);
  };

  return (
    <>
    <Navbar/>
      <div className="container mt-5 p-5">
      <h2 className="text-center mt-2">ORDER INFORMATION</h2>
      <div className="row border  ">
        <div className="col-md-6 ">
          <h3 className="text-info">Customer info</h3>
          <div className="d-flex justify-content-between align-items-center">
            <h4>Name :</h4>
            <h5>{user?.name}</h5>
          </div>
          <div className="d-flex justify-content-between">
            <h5>Phone :</h5>
            <h5>{user?.phone}</h5>
          </div>
          <div className="d-flex justify-content-between">
            <h5>Email :</h5>
            <h5>{user?.email}</h5>
          </div>
          <div className="d-flex justify-content-between">
            <h5>City :</h5>
            <h5>{user?.city}</h5>
          </div>
        </div>
        <div className="col-md-6 ">
          <h3 className="text-info">Product info</h3>
          <div className="d-flex justify-content-between">
            <h5>Food Charge :</h5>
            <h5>{total}</h5>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <h4>Tax :</h4>
            <h5>{(total * tax) / 100}</h5>
          </div>
       
          <div className="d-flex justify-content-between">
            <h5>Delivery Charge :</h5>
            <h5>{delivery_charge}</h5>
          </div>
          <hr />
          <div className="d-flex justify-content-between">
            <h5>Total Amount :</h5>
            <h5>{total + delivery_charge + (total * tax) / 100}</h5>
          </div>
        </div>
      </div>
      <div className=" text-center d-flex mt-3">
        <Link
          href="#"
          className="btn btn-primary rounded-0"
          onClick={HandlePlaceOrder}
        >
          Place Order
        </Link>
      </div>
    </div>
    </>
  
  );
};
export default Page;
