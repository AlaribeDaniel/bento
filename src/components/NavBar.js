import React, { useRef } from 'react';
import Mark from '../images/Mark.svg';
import '../style/NavBar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const NavBar = () => {

  const navRef = useRef();

  const showNavBar = () => {
      navRef.current.classList.toggle('active');
      console.log('helo')
  }

  return (
   
    <section className='nav-bar'>

      <div className='flex_container'>
        <img src={Mark} alt="" className='mark'/>

        <nav className='flex_container'>
          
          <ul>
            <li>
            <a href= '#' className='active'>ABOUT</a>
            </li>
          </ul>

          <div className='nav-links'  ref={navRef}>
              <ul className='flex_container '>
                <li> <a href="">PORTFOLIO</a></li>

                <li><a href="">CONTACT</a></li>
              </ul>

                <button 
                  className = 'nav-btn nav-close-btn'
                  onClick={showNavBar}
                >

                    <FontAwesomeIcon icon={faTimes} size="2x"/>

                </button> 
            </div> 

            <button 
              className = 'nav-btn'
              onClick={showNavBar}
            >

            <FontAwesomeIcon icon={faBars} size="2x"/>

        </button>
        </nav>
      </div>

    </section>

    
  )
}

export default NavBar