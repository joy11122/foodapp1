"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";

const RestoNavbar = () => {
  const [LoginResto, setLoginResto] = useState();
  const pathName = usePathname();
  const router = useRouter();
  useEffect(() => {
    const data = localStorage.getItem("Login");
    if (!data && pathName == "/restaurent/dashboard") {
      router.push("/restaurent");
    } else if (data && pathName == "/restaurent") {
      router.push("/restaurent/dashboard");
    } else {
      setLoginResto(JSON.parse(data));
    }
  }, []);
  console.log(LoginResto);

  const handleLogout = () => {
    localStorage.removeItem("Login");
  
    router.push("/restaurent");
  };
  return (
    <div className="container-fluid bg-primary">
      <nav class="navbar container  navbar-expand justify-content-between align-items-center text-light  ">
        <img
          style={{ width: 50, height: 50,backgroundColor:"white" }}
          src="/images/apple-touch-icon.png"
          alt="img"
        />
        <ul class="nav navbar-nav">
          <li class="nav-item">
            <Link class="nav-link active" href="/">
              Home
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" href="/resto-profile">
              Profile
            </Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link fw-bold" href="/restaurent/dashboard">
              {LoginResto ? LoginResto.name.toUpperCase() : "Guest"}
            </Link>
          </li>

          <li class="nav-item">
            <button onClick={handleLogout} class="nav-link ">
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default RestoNavbar;
