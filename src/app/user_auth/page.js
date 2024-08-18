"use client";
import React, { useState } from "react";
import UserSignUp from "@/component/UserSignUp";
import UserLogin from "@/component/UserLogin";
import Link from "next/link";
import Navbar from "@/component/Navbar";

const page = (props) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <Navbar/>
      {toggle ? <UserSignUp  redirect={props}/> : <UserLogin redirect={props}/>}
      <div className="ms-auto d-flex justify-content-center">
        <Link
          onClick={() => setToggle(!toggle)}
          href="#"
          className="text-decoration-none"
        >
         {toggle?"Have a acoount?LogIn":"Don't Have any Account?SignUp Here!"}
        </Link>
      </div>
    </div>
  );
};

export default page;
