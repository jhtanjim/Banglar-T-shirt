import React, { useState } from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import TShirt from '../T-Shirt/TShirt';
import Cart from '../Cart/Cart';
import toast from 'react-hot-toast';

const Home = () => {

    const tShirts = useLoaderData();
    // console.log(tShirts);
    // order calculation show
    const [cart, setCart] = useState([])


    const handleAddToCart = tShirt => {


        const exist = cart.find(ts => ts._id === tShirt._id)
        if (exist) {
            toast.error('You have already added this t-shirt');
        }
        else {
            const newCart = [...cart, tShirt]
            setCart(newCart)
        }

    }


    // delete 
    const handleRemoveCart = id => {


        const remaining = cart.filter(ts => ts._id !== id);
        setCart(remaining)
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
                <Cart
                    cart={cart}
                    handleRemoveCart={handleRemoveCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;