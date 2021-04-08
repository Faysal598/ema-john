import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, prd) => total + prd.price, 0)

    let shipping = 0;

    if(total > 0)
        shipping = 12.99;

    else if(total > 15)
        shipping = 4.99;

    else if(total > 35)
        shipping = 0;   
        
    const tax = Math.round(total/10);    

    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p><small>TAX + VAT: {tax}</small></p>
            <p>Total Price: {total + shipping + tax}</p>
        </div>
    );
};

export default Cart;