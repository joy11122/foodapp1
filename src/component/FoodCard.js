import React from 'react'

const FoodCard = () => {
    return (
        <div>
  <div className="container mt-5 mb-5">
    <div className="row">
      <div className="col-md-12 ">
        <div className="d-flex border gap-3">
          <img className="w-25  h-auto" src="images/card2.jpg" alt />
          <div>
            <h2>This Is food title</h2>
            <p>said home held one month and got the going the </p>
            <p>Price:<span className="text-primary ms-2 ">450tk</span></p>
            <button className="btn btn-primary rounded-0">Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}

export default FoodCard
