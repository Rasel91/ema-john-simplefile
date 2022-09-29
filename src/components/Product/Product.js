import React from 'react';
import './Product.css'
const Product = (props) => {
    const {name,price,img, seller, ratings}= props.product;
    console.log(props);
    return (
        <div className='product'>
           <img src={img} alt="" />
           <h6>Product Name:{name}</h6>
           <p>Ratings:{ratings}</p>
           <p>Seller:{seller}</p>
           <p>Price:{price}</p>
        </div>
    );
};

export default Product;