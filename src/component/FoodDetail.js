import React from 'react'

const FoodDetail = () => {
    return (
    <div>
  <div className="container mt-5 ">
    <div className="row">
      <div className="col-md-6 d-flex justify-content-center align-items-center  ">
        <div className="d-flex gap-2 flex-column ">
          <img style={{width: 100, height: 80}} src="images/card2.jpg" alt />
          <img style={{width: 100, height: 80}} src="images/card2.jpg" alt />
          <img style={{width: 100, height: 80}} src="images/card2.jpg" alt />
          <img style={{width: 100, height: 80}} src="images/card2.jpg" alt />
        </div>
        <div className="d-flex justify-content-center align-items-center ms-2 ">
          <img style={{width: 250, height: 180}} src="images/card2.jpg" alt />
        </div>
      </div>
      <div className="col-md-6">
        <div className="content ps-4">
          <h2>Galaxy w20</h2>
          <p>60 customer reviews</p>
          <p> MRP<del> 4557tk</del></p>
          <p className="text-primary ">Deal of the Day:53663tk</p>
          <p>js got good and ago ago and good got going the good got going year good and good ancooperation the with b mail </p>
          <p>Available:<span>In Stock</span></p>
          <p>Id:joy62gsi</p>
          <p>Brand:<span>Samsung</span></p>
          <hr />
          <div className="d-flex gap-2">
            <p className="w-25">Color:</p>
            <button />
            <button />
          </div>
          <div className="d-flex  align-items-center ">
            <i className="bi bi-plus display-6" />
            <span className="ms-3 me-3">12</span>
            <i className="bi bi-plus display-6" />
          </div>
          <div>
            <a className="btn btn-primary rounded-0 " href="/">Add To Cart</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}

export default FoodDetail
