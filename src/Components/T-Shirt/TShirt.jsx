import React from 'react';
import './TShirt.css'
const TShirt = ({ tShirt, handleAddToCart }) => {
    const { picture, name, price } = tShirt
    console.log(tShirt);
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p> Price: ${price}</p>
            <button onClick={handleAddToCart}>Buy Now</button>
        </div>
    );
};

export default TShirt;