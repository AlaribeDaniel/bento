import React from 'react';
import '../style/Skills.scss';

const Skills = ({children}) => {
  return (
    <section className='skill grid-item'>
        <div className='skill-set'>   
            {children}
        </div>
    </section>
  
  )
}

export default Skills