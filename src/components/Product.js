import React from 'react';
import Mockup from '../images/Mockup.png';
import '../style/Product.scss'
import ArrowIcon from './ArrowIcon';

const Product = () => {
  return (
    <section className='Product'>
        <div className='flex_container'>
            <span className='title'>
                <h3>iOS Mobile app</h3>
                <p>Product develop</p>
            </span>

            <ArrowIcon />
           
        </div>

        <div className='flex_container Product_image_container'>
            <img src= {Mockup} alt="" />
        </div>

    </section>
  )
}

export default Product