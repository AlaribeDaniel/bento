import React from 'react';
import '../style/Hero.scss';
import Avatar from '../images/avatar.png'
import Available from './Available';
import Button from './Button';

const Hero = () => {
  return (
    <main className='hero item2'>
        <div className='flex_container'>
            <p>UI/UX DESIGNER</p>
            <Available />
        </div>

        <div className='flex_container'>
            <div className='hero_info'>
                <h3 className='hero_profile_name'>I’m Zainab Nisa</h3>
                <p className='hero_job_description'>I design digital products with <br />
    great experience.</p>

                <section className='flex_container'>


                    <Button 
                    text = 'Hire Me' 
                    icon = '+' 
                    style = {
                        {background:'#E63E21', 
                        outline: '1.2px solid #E4643F',
                        width: '108px'
                    }
                    }
                    />

                    <Button 
                    text = 'Copy Email' 
                    icon = '+' 
                    style = {
                        {background:'#161616', 
                        outline: '1.2px solid #262626',
                        width: '143px'
                    }
                    }
                    
                    />

                </section>
               
            </div>

            <div className='hero_avatar flex_container'> 
                <img src={Avatar} alt="" />
            </div>
        </div>
    </main>
  )
}

export default Hero