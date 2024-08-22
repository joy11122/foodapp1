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
    try {
      const res = await fetch("/api/restaurants"); // Use relative path
      const data = await res.json();
      if (data.success) {
        const cityList = data.result.map((item) => item.city);
        setCity(cityList);
      }
    } catch (error) {
      console.error("Error fetching city data:", error);
    }
  };

  const handleCityChange = (e) => {
    setName(e.target.value);
  };

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <div className="coverimg d-flex justify-content-center align-items-center flex-column">
        <div>
          <h2 className="fw-bold display-2 text-primary">Food Delivery App</h2>
          <p className="text-center text-light">Online food Service</p>
        </div>
        <div className="w-75 d-flex bg-light text-dark p-3">
          <div className="w-25 p-2">
            <select
              className="outline-0 border-0"
              name="city"
              onChange={handleCityChange} // Use onChange
            >
              <option value="">Select City</option> {/* Placeholder option */}
              {city.map((city, i) => (
                <option key={i} value={city} name="city">
                  {city}
                </option>
              ))}
            </select>
          </div>
          <div className="w-75">
            <input
              onChange={handleInputChange} // Separate handler for input
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
