"use client";
import Login from "@/component/Login";
import Navbar from "@/component/Navbar";
import SignUp from "@/component/SignUp";
import Link from "next/link";
import React, { useState } from "react";

const page = () => {
  const [login, setLogin] = useState(true);
  return (
    <div className="mt-5">
      <Navbar />
      {login ? <Login /> : <SignUp setLogin={setLogin} />}
      <div className="container d-flex justify-content-center ">
        <Link
          href="#"
          onClick={() => setLogin(!login)}
          className="text-decoration-none text-center fw-bold text-warning"
        >
          {login
            ? "Don't have any Account?Sign up"
            : "Already Have Account?Login"}
        </Link>
      </div>
    </div>
  );
};

export default page;
