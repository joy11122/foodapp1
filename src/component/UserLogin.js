"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Login = (props) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleLogin = async () => {
    let res = await fetch("http://localhost:3000/api/userLogin", {
      method: "post",
      body: JSON.stringify({ email, password }),
    });
    res = await res.json();
    if (res.success) {
      localStorage.setItem("User", JSON.stringify(res.result));
      if (props?.redirect.searchParams.order) {
        router.push("/order");
      }else{
        router.push("/");
      }
      
    } else {
      alert("Failed to Login");
    }
  };

  return (
    <div className="container mt-5 pt-5 pb-3 ">
      <div>
        <div className="row justify-content-center align-items-center ">
          <div className="col-md-6 border ">
            <h2 className="mt-4 text-center  mb-4">User Login Form</h2>
            <div className="w-100  d-flex justify-content-center align-items-center flex-column   ">
              <div>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-100"
                  type="text"
                  placeholder="Email no..."
                />
              </div>
              <div className="mt-3">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-100"
                  type="password"
                  placeholder="password:"
                />
                <button
                  onClick={handleLogin}
                  className="btn btn-primary mt-3 border-0 mb-5 rounded-0 mx-auto text-center d-flex"
                >
                  Login As a User
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
