import React from 'react';
import '../style/Sample.scss';
import ArrowIcon from './ArrowIcon';

const Sample = ({title, note, img}) => {
  return (
    <section className='Sample'>

        <div className='flex_container'>

            <span className='title'>
                <h3>{title}</h3>
                <p>{note}</p>
            </span>

            <ArrowIcon />

        </div>

        <div className='Sample_img'>
            <img src= {img} alt="" />
        </div>
    </section>
  )
}

export default Sample