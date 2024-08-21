"use client"; // Ensures this component runs only on the client side

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navbar = (props) => {
  const [cartNumber, setCartNumber] = useState(0);
  const [cartItem, setCartItem] = useState([]);
  const [user, setUser] = useState(null);
  const router = useRouter();

  // Load user and cart data from localStorage when the component mounts
  useEffect(() => {
    const storedUser = localStorage.getItem("User");
    const storedCart = localStorage.getItem("NewCart");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    if (storedCart) {
      const cartData = JSON.parse(storedCart);
      setCartItem(cartData);
      setCartNumber(cartData.length);
    }
  }, []);

  const HandleUserLogOut = () => {
    localStorage.removeItem("User");
    setUser(null);
    router.push("/user_auth");
  };

  useEffect(() => {
    if (props.removeCart) {
      const updatedCart = cartItem.filter((item) => item._id !== props.removeCart);
      setCartItem(updatedCart);
      setCartNumber(updatedCart.length);
      localStorage.setItem("NewCart", JSON.stringify(updatedCart));
      if (updatedCart.length === 0) {
        localStorage.removeItem("NewCart");
      }
    }
  }, [props.removeCart]);

  useEffect(() => {
    if (props.cartData) {
      if (cartNumber) {
        if (cartItem[0]?.recto_id !== props.cartData.recto_id) {
          localStorage.removeItem("NewCart");
          setCartNumber(1);
          setCartItem([props.cartData]);
          localStorage.setItem("NewCart", JSON.stringify([props.cartData]));
        } else {
          const updatedCartData = [...cartItem, props.cartData];
          setCartItem(updatedCartData);
          setCartNumber(updatedCartData.length);
          localStorage.setItem("NewCart", JSON.stringify(updatedCartData));
        }
      } else {
        setCartNumber(1);
        setCartItem([props.cartData]);
        localStorage.setItem("NewCart", JSON.stringify([props.cartData]));
      }
    }
  }, [props.cartData]);

  return (
    <nav className="bg-black fixed-top">
      <div className="container d d-flex justify-content-between align-items-center">
        <Link className="fw-bold display-6 text-decoration-none" href="/">Daraz</Link>
        <input type="checkbox" id="click" className="d-none" />
        <label className="d-none" htmlFor="click">
          <i className="bi bi-list" />
        </label>
        <ul className="d-flex mt-3 gap-3 text-decoration-none">
          <li>
            <Link className="text-decoration-none" href="/">Home</Link>
          </li>
          <li>
            <Link className="text-decoration-none" href="/restaurent">Add Restaurant</Link>
          </li>
          <li>
            <Link className="text-decoration-none" href={cartNumber ? "/cart" : "#"}>
              Cart({cartNumber})
            </Link>
          </li>
          {user ? (
            <li>
              <Link onClick={HandleUserLogOut} href="/user_auth" className="text-decoration-none text-danger">
                Logout
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link href="/user_auth" className="text-decoration-none">SignUp</Link>
              </li>
              <li>
                <Link href="/user_auth" className="text-decoration-none">Login</Link>
              </li>
            </>
          )}
          <li>
            <Link href="/profile" className="text-decoration-none">
              {user ? user.name : 'guest'}
            </Link>
          </li>
          <li>
            <button className="btn btn-outline-primary">Subscribe</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
