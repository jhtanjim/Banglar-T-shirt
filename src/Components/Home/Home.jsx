import React, { useState } from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import TShirt from '../T-Shirt/TShirt';
import Cart from '../Cart/Cart';

const Home = () => {

    const tShirts = useLoaderData();
    // console.log(tShirts);
    // order calculation show
    const [cart, setCart] = useState([])


    const handleAddToCart = tShirt => {
        console.log(tShirt);
    }
    return (

        <div className='home-container'>
            <div className="tshirts-container">
                {
                    tShirts.map(tShirt => <TShirt

                        key={tShirt._id}
                        tShirt={tShirt}
                        handleAddToCart={handleAddToCart}
                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;