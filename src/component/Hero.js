"use client";
import React, { useEffect, useState } from "react";
import Restaurent from "./Restaurent";
const Hero = () => {
  const [city, setCity] = useState([]);
  const [name, setName] = useState("");
  const [value, setValue] = useState("");

  useEffect(() => {
    getCity();
  }, []);
  const getCity = async () => {
    let res = await fetch("http://localhost:3000/api/restaurants");
    res = await res.json();
    if (res.success) {
      var city = res.result.map((item) => {
        return item.city;
      });
    }
    setCity(city);
  };

  const handleCityClick = (e) => {
    setName(e.target.name);
    setValue(e.target.value);
  };

  return (
    <div>
      <div className="coverimg d-flex justify-content-center align-items-center flex-column  ">
        <div>
          <h2 className="fw-bold display-2 text-primary ">Food Delevery App</h2>
          <p className="text-center text-light">Online food Service</p>
        </div>
        <div className="w-75 d-flex bg-light  text-dark p-3">
          <div className="w-25 p-2 b">
            <select
              className="outline-0 border-0"
              name="city"
              onClick={handleCityClick}
            >
              {city.map((city, i) => {
                return (
                  <option
                    key={i}
                    className="outline-none border-0"
                    onClick={handleCityClick}
                    name="city"
                  >
                    {city}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="w-75 ">
            <input
              onChange={handleCityClick}
              className="outline-0 w-100 h-100 border-0"
              type="text"
              name="restaurent"
              placeholder="Enter Food Or Restaurant Name"
            />
          </div>
        </div>
      </div>

      <Restaurent name={name} value={value} />
    </div>
  );
};

export default Hero;
