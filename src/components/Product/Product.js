import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Product.css';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
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
            <FontAwesomeIcon icon={faCoffee}></FontAwesomeIcon>
           </button>
        </div>
    );
};

export default Product;