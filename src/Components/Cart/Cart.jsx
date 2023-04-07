import React from 'react';

const Cart = ({ cart, handleRemoveCart }) => {
    return (
        <div>
            <h2>Order Summary:{cart.length}</h2>
            {
                cart.map(TShirt => <p
                    key={TShirt._id}
                >
                    {TShirt.name}
                    <button onClick={() => handleRemoveCart(TShirt._id)}>X</button>
                </p>)
            }
        </div>
    );
};

export default Cart;