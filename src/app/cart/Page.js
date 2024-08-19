"use client";
import Navbar from "@/component/Navbar";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

let tax = 10;
let delevary_charge = 100;
const Page = () => {
  const router = useRouter();
  const user =localStorage.getItem("User") && JSON.parse(localStorage.getItem("User"));
  const [cartList, setCartList] = useState();

  const [removeCart, setRemoveCart] = useState();
  const total = JSON.parse(localStorage.getItem("NewCart"));
  const priceList = total?.map((item) => {
    return item.price;
  });
  const totalprice =
    priceList &&
    priceList.reduce((a, b) => {
      return parseInt(a) + parseInt(b);
    }, 0);

  const handleOrder = () => {
    if (user) {
      router.push("/order");
    } else {
      alert("Please Login first");
      router.push("/user_auth?order=true");
    }
  };

  const handleRemoveToCart = (item) => {
setCartList(localStorage.getItem("NewCart")&& JSON.parse(localStorage.getItem("NewCart")))
    setRemoveCart(item._id)
    
  };

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("NewCart"));
    setCartList(cartData);
  }, [removeCart]);

{if (!cartList) {
  return<>
  <Navbar/>
  <h1 className="text-center fw-bold display-1 mt-5 p-5">No Cart Avilable</h1>
  </> 
}}


  return (
    <>
      <Navbar removeCart={removeCart}/>
      <div className="mt-4 container p-5 ">
        <div class="table-responsive">
          <table class="table table-primary table-hover">
            <thead className="table-dark">
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
        
                <th scope="col">Price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {cartList &&
                cartList.map((item, i) => {
                  return (
                    <tr class="" key={i} className="table-border ">
                      <td scope="row">
                        <img
                          className="w-100"
                          style={{ height: 80 }}
                          src={item.imagePath}
                          alt="u"
                        />
                      </td>
                      <td>{item.name}</td>
                    
                      <td>{item.price}</td>
                      <td>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => handleRemoveToCart(item)}
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                        <button className="ms-2 btn  btn-sm">
                          Edit
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>

       
          <div className="d-flex flex-wrap">
            <div className="w-75 ">
              <div className="d-flex justify-content-between ms-5 ">
                <span className="fw-bold">Food Charge :</span>
                <span className="fw-bold">tk {totalprice}</span>
              </div>
              <div className="d-flex justify-content-between ms-5 ">
                <span className="fw-bold">Tax :</span>
                <span className="fw-bold">tk {(totalprice * tax) / 100}</span>
              </div>
              <div className="d-flex justify-content-between ms-5 ">
                <span className="fw-bold">Delivery Charge :</span>
                <span className="fw-bold"> tk {delevary_charge}</span>
              </div>
              <div className="d-flex justify-content-between ms-5 mt-2">
                <h5 className="f">Total Amount :</h5>
                <span className="fw-bold  text-info">
                  Tk {totalprice + delevary_charge + (totalprice * tax) / 100}
                </span>
              </div>
            </div>

            <div className="w-25 ms-5 mt-3">
              <button className="btn btn-sm btn-warning" onClick={handleOrder}>
                Order Now
              </button>
            </div>
          </div>
      
        <hr />
      </div>
    </>
  );
};

export default Page;
