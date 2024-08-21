"use client";

import Navbar from "@/component/Navbar";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [profileData, setProfileData] = useState([]);
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState("");
  const router = useRouter();

  useEffect(() => {
    // Ensure localStorage access only happens on the client side
    const storedUser = localStorage.getItem("User") && JSON.parse(localStorage.getItem("User"));
    
    if (storedUser) {
      setUserId(storedUser._id);
      setUserName(storedUser.name);
    } else {
      router.push("/");
    }

    getOrderDetail(storedUser?._id);
  }, [router]);

  const getOrderDetail = async (userId) => {
    if (!userId) return;

    try {
      const res = await fetch(`http://localhost:3000/api/order?id=${userId}`);
      const result = await res?.json();

      if (result.success) {
        setProfileData(result.result);
      }
    } catch (error) {
      console.error("Failed to fetch order details:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mt-4 p-5 mb-5">
        <div className="row g-2">
          <h2 className="text-center text-primary mb-3 text-decoration-underline">
            {userName} Total Order Detail
          </h2>
          {profileData?.map((item, i) => (
            <div key={i} className="col-md-6 rounded-3 border p-2 bg-warning text-black">
              <div className="d-flex justify-content-between align-items-center">
                <h4>Resto_Name:</h4>
                <h4>{item.data.map((i) => i.name).join(", ")}</h4>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <h4>Total-Amount:</h4>
                <h4>{item.Amount}</h4>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <h5>Status :</h5>
                <p>{item.Status}</p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <h5>Address :</h5>
                <p>{item.data.map((i) => i.address).join(", ")}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Page;
