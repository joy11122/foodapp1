import { useRouter } from "next/navigation";
import { Router } from "next/router";
import React, { useState } from "react";

const AddFood = (params) => {
 
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imagePath, setImagePath] = useState("");
  const [recto_id, setRecto_id] = useState(
    JSON.parse(localStorage.getItem("Login"))._id
  );
  const router = useRouter();

  const handleAddFood = async () => {
    let result = await fetch("http://localhost:3000/api/addfood", {
      method: "post",
      body: JSON.stringify({ name, price, description, imagePath,recto_id }),
    });
    const data = await result.json();
    console.log(data);
    if (data.success) {
      params.setToggle(false)
    }
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <h3 className="text-center">Add food</h3>
          <div className="col-md-6 border rounded-2 p-2">
            <label htmlFor="" class="form-label">
              Food name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              class="form-control"
              id=""
              required
            />

            <label htmlFor="" class="form-label">
              Price
            </label>
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="number"
              class="form-control"
              id=""
              required
            />

            <label htmlFor="" class="form-label">
              Description
            </label>
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              class="form-control"
              id=""
              required
            />

            <label htmlFor="" class="form-label">
              Image
            </label>
            <input
              value={imagePath}
              onChange={(e) => setImagePath(e.target.value)}
              type="text"
              class="form-control"
              id=""
              required
            />
            <button onClick={handleAddFood} className="mt-4 btn btn-danger">
              Add Food
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddFood;
