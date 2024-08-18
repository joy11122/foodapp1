"use client";
import DeliveryNavbar from "@/component/DeliveryNavbar";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const page = () => {
  const [data,setData]=useState([])
  const router = useRouter();
  const [deliverymanData, setDeliverymanData] = useState([]);
  console.log(data)
  const dman =
    localStorage.getItem("DeliveryMan") &&
    JSON.parse(localStorage.getItem("DeliveryMan"));

  if (!dman) {
    router.push("/deliverypartner");
  }
  const id = dman?._id;

  useEffect(() => {
    getDeleveryManData();
  }, []);
  const getDeleveryManData = async () => {
    const id = dman?._id;

    let res = await fetch("http://localhost:3000/api/delivery/" + id);
    res = await res.json();
    if (res.success) {
      setDeliverymanData(res.result);
    } else {
      alert("failed");
    }
  };
 if (deliverymanData.length<1) {
   return <>
   <DeliveryNavbar />
   <h3 className=" noddata  fw-bold text-center display-2">No Data Available Right Now</h3>
   </>
 }






  return (
    <div>
      <DeliveryNavbar />
      <div className="mt-5 p-4 container">
        <div className="row g-2">
          {deliverymanData?.map((item,i) => {
            return (
              <div className="col-md-6"  key={i}>
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
                    <select  >
                      <option value=" On the Way">On the Way</option>
                      <option value="Delivered">Delivered</option>
                      <option value=" Delivered failed">
                        Delivered failed
                      </option>
                      <option value=" Far from 2 minutes">
                        Far from 2 minutes
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            );
          })}
      
           
       
        </div>
      </div>
    </div>
  );
};

export default page;
