"use client";
import React, { useEffect, useState } from "react";

const FoodList = () => {
  const [food, setFood] = useState([]);

  useEffect(() => {
    getFood();
  }, []);

  const getFood = async () => {
    const restoDetail=JSON.parse(localStorage.getItem("Login"))
    const recto_id=restoDetail._id
let res=await fetch("/api/getfood/"+recto_id)
    res = await res.json();
    console.log(res);
    if (res) {
      setFood(res.result);
    }
  };


  return (
    <div>
      <div className="table-responsive">
        <table className="table text-center table-bordered table-primary">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Description</th>
              <th className="gap-2 d-flex">Action</th>
            </tr>
          </thead>

          <tbody>
            {food &&
              food.map((item, i) => {
                return (
                  <tr key={i}>
                    <td>
                      <img
                        className="rounded-circle"
                        style={{ width: 50, height: 50 }}
                        src={item.imagePath}
                        alt="f"
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.description}</td>
                    <td className=" gap-3">
                      <i className="bi bi-trash"></i>
                      <i className="bi bi-trash"></i>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FoodList;
