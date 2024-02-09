import React from 'react'
import Available from './Available'
import '../style/Footer.scss'

const Footer = () => {
  return (
    <footer className='flex_container footer'>
        <p>Portfolio 2024</p>

        <ul className='flex_container'>
            <li>
                <a href="" className='active'>Twitter</a>
            </li>
            
            <li>
                <a href="">Instagram</a>
            </li>

            <li>
                <a href="">LinkdIn</a>
            </li> 
        </ul>

        <Available />
    </footer>
  )
}

export default Footer