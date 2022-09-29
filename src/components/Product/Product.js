import React from 'react';
import './Product.css'
const Product = ({product,handleAddToCart}) => {
    // const {product,handleAddToCart}=props;
    const {name,price,img, seller, ratings}= product;
    // console.log(props);
    return (
        <div className='product'>
           <img src={img} alt="" />
          <div className='product-info'>
          <h6>{name}</h6>
           <h6>Price:{price}</h6>
           <p><small>Ratings:{ratings}</small></p>
           <p><small>Seller:{seller}</small></p>
          </div>
           {/* <button onClick={()=>props.handleAddToCart(props.product)} className='button-cart'> */}
           <button onClick={()=>handleAddToCart(product)} className='button-cart'>
            <p>Add to Cart</p>
           </button>
        </div>
    );
};

export default Product;