import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props.product);
    const {name, img, seller, price, stock} = props.product;

    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div className="product-details">
                <h4 className="product-name">{name}</h4><br/>
                <p><small>by: {seller}</small></p>
                <p>${price}</p><br/>
                <p><small>Only {stock} left in stock - Order Soon</small></p>
                <button
                    onClick={()=>props.handleAddProduct(props.product)}
                    className="main-button"><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
                </button>
            </div>
            
        </div>
    );
};

export default Product;