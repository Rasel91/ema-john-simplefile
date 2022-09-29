import React from 'react';
import './Product.css'
const Product = (props) => {
    const {name,price,img, seller, ratings}= props.product;
    console.log(props);
    return (
        <div className='product'>
           <img src={img} alt="" />
          <div className='product-info'>
          <h6>{name}</h6>
           <h6>Price:{price}</h6>
           <p><small>Ratings:{ratings}</small></p>
           <p><small>Seller:{seller}</small></p>
          </div>
           <button className='button-cart'>
            <p>Add to Cart</p>
           </button>
        </div>
    );
};

export default Product;