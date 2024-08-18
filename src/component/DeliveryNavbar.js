import Link from 'next/link'
import React from 'react'

const DeliveryNavbar = () => {
    const dman=localStorage.getItem("DeliveryMan")&& JSON.parse(localStorage.getItem("DeliveryMan"))
    return (
        <div>
              <nav className="bg-black fixed-top ">
      <div className="container d d-flex justify-content-between align-items-center  ">
        <h4 className="fw-bold ">{dman?.name.toUpperCase()}</h4>
        <input type="checkbox" id="click" className="d-none" />
        <label className="d-none" htmlFor="click">
          <i className="bi bi-list" />
        </label>
        <ul className="  d-flex  mt-3 gap-3 text-decoration-none">
          <li>
            <Link className="text-decoration-none" href="/">
              Home
            </Link>
          </li>
        
         
          {dman ? (
            <li>
              <Link
               
                href="/deliverypartner"
                className="text-decoration-none text-danger"
              >
                Logout
              </Link>
            </li>
          ) : (
            <>
              <li>
                <Link href="/deliverypartner" className="text-decoration-none">
                  SignUp
                </Link>
              </li>
              <li>
                <Link href="/deliverypartner" className="text-decoration-none">
                  Login
                </Link>
              </li>
            </>
          )}
          <li>
            <Link href="#" className="text-decoration-none">
              {dman?.name.toUpperCase()}
            </Link>
          </li>

         
        </ul>
      </div>
    </nav>
        </div>
    )
}

export default DeliveryNavbar
