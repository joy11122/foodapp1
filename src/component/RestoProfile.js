import React from 'react'

const RestoProfile = () => {
    const Restaurant=localStorage.getItem("Login")&& JSON.parse(localStorage.getItem("Login"))
    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                
                    <div className="col-md-6 d-flex flex-column justify-content-center card align-items-center mt-4">
                        <h2 className='text-danger'>{Restaurant.name.toUpperCase()}</h2>
                        <p>{Restaurant.email}</p>
                        <p>{Restaurant.city}</p>
                        
                        <p>{Restaurant.phone}</p>
                        <p>{Restaurant.address}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RestoProfile
