"use client";
import Navbar from "@/component/Navbar";
import { delivery_charge, tax } from "@/lib/constant/constant";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storedUser = localStorage.getItem("User") && JSON.parse(localStorage.getItem("User"));
    const storedCart = localStorage.getItem("NewCart") && JSON.parse(localStorage.getItem("NewCart"));

    if (!storedUser) {
      router.push("/");
    } else {
      setUser(storedUser);
      setCart(storedCart || []);

      if (storedCart) {
        const totalPriceList = storedCart.map((item) => item.price);
        const calculatedTotal = totalPriceList.reduce((a, b) => parseInt(a) + parseInt(b), 0);
        setTotal(calculatedTotal);
      }
    }
  }, [router]);

  const HandlePlaceOrder = async () => {
    const storedUser = localStorage.getItem("User") && JSON.parse(localStorage.getItem("User"));
    const storedCart = localStorage.getItem("NewCart") && JSON.parse(localStorage.getItem("NewCart"));

    if (!storedUser || !storedCart) return;

    const food_ids = storedCart.map((item) => item._id).toString();
    const city = storedUser.city;
    const user_id = storedUser._id;

    try {
      let ress = await fetch(`/api/delivery/login/${city}`);
      ress = await ress.json();

      const deliveryman_id = ress.result[Math.floor(Math.random() * ress.result.length)];
      const recto_id = storedCart[0].recto_id;
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

      const res = await fetch("/api/order", {
        method: "POST",
        body: JSON.stringify(collection),
      });

      const result = await res.json();
      if (result.success) {
        localStorage.removeItem("NewCart");
        router.push("/profile");
      } else {
        alert("Order placement failed");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("An error occurred. Please try again.");
    }
  };

  if (!user || !cart) return null;

  return (
    <>
      <Navbar />
      <div className="container mt-5 p-5">
        <h2 className="text-center mt-2">ORDER INFORMATION</h2>
        <div className="row border">
          <div className="col-md-6">
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
          <div className="col-md-6">
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
        <div className="text-center d-flex mt-3">
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
