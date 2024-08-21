"use client";

import DeliveryNavbar from "@/component/DeliveryNavbar";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [data, setData] = useState([]);
  const [deliverymanData, setDeliverymanData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const dman = localStorage.getItem("DeliveryMan") && JSON.parse(localStorage.getItem("DeliveryMan"));

    if (!dman) {
      router.push("/deliverypartner");
      return; // Prevent further execution if there's no delivery man data
    }

    const fetchDeliverymanData = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/delivery/" + dman._id);
        const result = await res.json();
        if (result.success) {
          setDeliverymanData(result.result);
        } else {
          setError("Failed to load delivery data.");
        }
      } catch (err) {
        setError("An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchDeliverymanData();
  }, [router]);

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return (
      <>
        <DeliveryNavbar />
        <h3 className="text-center text-danger">{error}</h3>
      </>
    );
  }

  if (deliverymanData.length < 1) {
    return (
      <>
        <DeliveryNavbar />
        <h3 className="noddata fw-bold text-center display-2">No Data Available Right Now</h3>
      </>
    );
  }

  return (
    <div>
      <DeliveryNavbar />
      <div className="mt-5 p-4 container">
        <div className="row g-2">
          {deliverymanData.map((item, i) => (
            <div className="col-md-6" key={i}>
              <div className="card p-4 bg-black text-light">
                <div className="d-flex justify-content-between align-items-center">
                  <h2>{item.data.name.toUpperCase()}</h2>
                  <p>{item.data.email}</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <p>{item.data.phone}</p>
                  <p>{item.data.address}</p>
                </div>
                <p>{item.data._id}</p>
                <div className="d-flex justify-content-between align-items-center">
                  <p>{item.data.city}</p>
                  <p>{item.Amount}</p>
                  <p>{item._id}</p>
                </div>
                <div>
                  <h6>Update Status:</h6>
                  <select>
                    <option value="On the Way">On the Way</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Delivered failed">Delivered failed</option>
                    <option value="Far from 2 minutes">Far from 2 minutes</option>
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
