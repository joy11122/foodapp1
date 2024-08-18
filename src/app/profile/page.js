"use client";

import Navbar from "@/component/Navbar";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [profileData, setProfileData] = useState([]);
  const router = useRouter();
  let user_id =
    localStorage.getItem("User") &&
    JSON.parse(localStorage.getItem("User"))._id;
  let userName =
    localStorage.getItem("User") &&
    JSON.parse(localStorage.getItem("User")).name;

  if (!user_id) {
    router.push("/");
  }
  useEffect(() => {
    getOrderDetail();
  }, []);
  const getOrderDetail = async () => {
    let user_id =
      localStorage.getItem("User") &&
      JSON.parse(localStorage.getItem("User"))._id;
    const res = await fetch("http://localhost:3000/api/order?id=" + user_id);
    const result = await res?.json();
    if (result.success) {
      setProfileData(result.result);
    }
  };

  console.log(profileData);

  return (
    <>
      <Navbar />
      <div className="container mt-4 p-5 mb-5">
        <div className="row g-2">
          <h2 className="text-center text-primary mb-3 text-decoration-underline">
            {userName} Total Order Detail
          </h2>
          {profileData?.map((item,i) => {
            return (
              <>
                <div key={i} className="col-md-6 rounded-3 border p-2 bg-warning text-black">
                  <div className="d-flex justify-content-between align-items-center">
                    <h4>Resto_Name:</h4>
                    <h4>{item.data.map((i) => i.name)}</h4>
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
                    <p>{item.data.map((i) => i.address)}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Page;
