"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Restaurent = (props) => {
  const name = props.name;
  const value = props.value;

  const [resto, setResto] = useState([]);
  const router = useRouter();
 
  const GetRestaurant = async () => {
    let url = "http://localhost:3000/api/addRestaurant";

    if (name == "city") {
      url = url + "?city=" + value.toLowerCase();
      console.log(url);
    } else if (name == "restaurent") {
      url = url + "?restaurent=" + value.toLowerCase();
      console.log(url);
    }
    const res = await fetch(url);
    const Allres = await res.json();
    if (Allres.success) {
      setResto(Allres.result);
    } else {
      alert("failed");
    }
  };
  useEffect(() => {
    GetRestaurant();
  }, [value, name]);

  return (
    <div>
      <div className="container  mt-5">
        <div className=" row g-2">
          {resto &&
            resto.map((item, i) => {
              return (
                <div
                  onClick={() => router.push("/explore/" + item._id)}
                  key={i}
                  className="col-md-4"
                >
                  <div className="p-2 item bg-warning text-black rounded-3">
                    <div className="d-flex justify-content-between align-items-center">
                      <h4 className="fw-bold">{item.name}</h4>
                      <p className="ms-3 mt-2 fw-bold">No:{item.phone}</p>
                    </div>
                    <p>{item.address}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Restaurent;
