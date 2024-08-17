"use client";
import Navbar from "@/component/Navbar";
import React, { useEffect, useState } from "react";

const Page = ({ params }) => {
  const [resto, setResto] = useState([]);
  const [food, setFood] = useState([]);
  const [removeCart, setRemoveCart] = useState();
  const [cartData, setCartData] = useState();
const[ids,setIds]=useState(localStorage.getItem("NewCart") && JSON.parse(localStorage.getItem("NewCart")).map((item)=>(item._id))||[])

const handleAddToCart=(item)=>{
 
  let localcart=ids;
  localcart.push(item._id)
  setIds(localcart)
  setCartData(item)
}
const handleRemoveToCart=(item)=>{
const id=ids?.filter((i)=>(i!==item._id))
  setIds(id)
  setRemoveCart(item._id)
}


  const name=resto.map((item)=>{
return item.name.toUpperCase();
  })
  useEffect(() => {
    getrestoAndfood();
  }, []);
  const getrestoAndfood = async () => {
    let res = await fetch(
      "http://localhost:3000/api/getrestoandfood/" + params.name
    );
    res = await res.json();
    console.log(res);
    if (res.success) {
      setResto(res.Resto);
      setFood(res.Food);
    }
  };

  return (<>
  <Navbar removeCart={removeCart} cartData={cartData}/>
  <div className="container-fluid">
      <div className="coverimg">
        <h1 className="fw-bold display-2 text-light">
          {name}
        </h1>
      </div>

      {resto.map((item) => {
        return (
          <>
            <div className="d-flex flex-wrap bg-warning ps-5 pe-5 container-fluid justify-content-between">
              <h3>{item.name}</h3>
              <h3>{item.email}</h3>
              <h3>{item.city}</h3>
              <h3>{item.address}</h3>
            </div>
          </>
        );
      })}
     <div className="container mt-5">
     <div className="row g-3 d-flex justify-content-center align-items-center">
      {food&& food.map((item,i)=>{
        return <> <div className="col-md-4" key={i}>
        <img src={item.imagePath}alt="" className="w-100 "style={{height:290}} />
      </div>
      <div className="col-md-8">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <h5>Tk:{item.price}</h5>
        {ids && ids.includes(item._id)? <button className="btn btn-warning rounded-0" onClick={()=>handleRemoveToCart(item)}>remove Cart</button>:<button className="btn btn-primary rounded-0" onClick={()=>handleAddToCart(item)}>Add To Cart</button>

}
      </div>
      <hr /></>
      })}
      
      </div>
     </div>
    </div>
  
  
  </>
    
   
  );
};

export default Page;
