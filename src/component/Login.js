"use client"
import { useRouter } from "next/navigation";
import React, {  useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleLogin = async () => {
    let res = await fetch("/api/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
    });
    res = await res.json();
    if (res.success) {
      localStorage.setItem("Login", JSON.stringify(res.res));
      router.push("/restaurent/dashboard");
    } else {
      alert("Failed to Login");
    }
  };

  return (
    <div className="container mt-5 pt-5 pb-3 ">
      <div>
        <div className="row justify-content-center align-items-center ">
          <div className="col-md-6 border ">
            <h2 className="mt-4 text-center  mb-3">Login Form</h2>
            <div className="w-100  d-flex justify-content-center align-items-center flex-column   ">
              <div >
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
                  Login
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
