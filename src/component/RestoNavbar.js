"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const RestoNavbar = () => {
  const [loginResto, setLoginResto] = useState(null);
  const pathName = usePathname();
  const router = useRouter();

  useEffect(() => {
    const data = localStorage.getItem("Login");
    if (!data && pathName === "/restaurent/dashboard") {
      router.push("/restaurent");
    } else if (data && pathName === "/restaurent") {
      router.push("/restaurent/dashboard");
    } else if (data) {
      setLoginResto(JSON.parse(data));
    }
  }, [pathName, router]);

  const handleLogout = () => {
    localStorage.removeItem("Login");
    router.push("/restaurent");
  };

  return (
    <div className="container-fluid bg-primary">
      <nav className="navbar container navbar-expand justify-content-between align-items-center text-light">
        <img
          style={{ width: 50, height: 50, backgroundColor: "white" }}
          src="/images/apple-touch-icon.png"
          alt="img"
        />
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" href="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href="/resto-profile">
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link fw-bold" href="/restaurent/dashboard">
              {loginResto ? loginResto.name.toUpperCase() : "Guest"}
            </Link>
          </li>
          {loginResto && (
            <li className="nav-item">
              <button onClick={handleLogout} className="nav-link btn btn-link">
                Logout
              </button>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default RestoNavbar;
