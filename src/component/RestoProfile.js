import React, { useEffect, useState } from 'react';

const RestoProfile = () => {
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        const storedData = localStorage.getItem("Login");
        if (storedData) {
            setRestaurant(JSON.parse(storedData));
        }
    }, []);

    if (!restaurant) {
        return (
            <div className="container mt-4">
                <h2 className="text-center text-danger">Restaurant Data Not Available</h2>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6 d-flex flex-column justify-content-center card align-items-center mt-4">
                    <h2 className='text-danger'>{restaurant.name.toUpperCase()}</h2>
                    <p>{restaurant.email}</p>
                    <p>{restaurant.city}</p>
                    <p>{restaurant.phone}</p>
                    <p>{restaurant.address}</p>
                </div>
            </div>
        </div>
    );
}

export default RestoProfile;
