"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const User_auth = (props) => {
 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [error, setError] = useState(false);
 const router= useRouter()
  const handleSignup = async () => {
    const data = { name, email, city, phone, address, password };
    if (password !== cpassword) {
      setError(true);
      return false;
    }
    const result = await fetch("http://localhost:3000/api/delivery",{
      method: "post",
      body: JSON.stringify(data),
    });
    const d = await result.json();
    localStorage.setItem("DeliveryMan", JSON.stringify(d.result));
   if (d.success) {
    alert("success")
router.push("/deliveryman/dashboard")
   }else{
    alert("Failed Signup")
   }
  };

  return (
    <div>
      <div className="container">
        <div className=" p-3">
          <div className="row d-flex justify-content-center align-items-center ">
            <div className="col-md-6 p-3 border text-center">
              <h2 className="mb-4 mt-3"> SignUp Form </h2>
              <div className="w-100 gap-2 d-flex">
                <div className="w-50">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-100"
                    type="text"
                    placeholder="Your name:"
                  />
                </div>
                <div className="w-50">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-100"
                    type="email"
                    placeholder="Email:"
                  />
                </div>
              </div>
              <div className="mt-3 w-100 gap-2 d-flex">
                <div className="w-50">
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-100"
                    type="number"
                    placeholder="Phone No:"
                  />
                </div>
                <div className="w-50">
                  <input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-100"
                    type="text"
                    placeholder="City:"
                  />
                </div>
              </div>
              <div className="mt-3 w-100 gap-2 d-flex">
                <div className="w-50">
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-100"
                    type="password"
                    placeholder="Password:"
                  />
                  {error && (
                    <span className="text-warning">Password not Matched</span>
                  )}
                </div>
              
                <div className="w-50">
                  <input
                    value={cpassword}
                    onChange={(e) => setCpassword(e.target.value)}
                    className="w-100"
                    type="password"
                    placeholder="Confirm Password:"
                  />
                  {error && (
                    <span className="text-warning">Password not Matched</span>
                  )}
                </div>
              </div>
              <div className="mt-3">
                <input
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-100"
                  type="text"
                  placeholder="Address"
                />
              </div>
              <div>
                <button
                  className="btn btn-outline-primary  mt-4 rounded-0"
                  onClick={handleSignup}
                >
                  Sigin Up 
                </button>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default User_auth;
