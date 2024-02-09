import React from 'react';
import Skills from './Skills';
import RecentWork from './RecentWork';
import '../style/Layout.scss';
import NavBar from './NavBar';
import Hero from './Hero';
import Product from './Product';
import Sample from './Sample';
import MUSIC from '../images/ai music.png';
import MAP from '../images/gps.png';
import Footer from './Footer';

const Layout = () => {
    
  return (
    <main className='grid-container'>

        <div className='grid-item1'>
            <NavBar />
        </div>

        <div className='grid-item2'>
            <Hero />
        </div>

        <div className='grid-item3'>
            <RecentWork />
        </div>
         
         <div className='grid-item4'>
            <Skills>Product design</Skills>
         </div>

         <div className='grid-item5'>
            <Skills>User Experience</Skills>
         </div>

         <div className='grid-item6'>
            <Skills>NoCode develop</Skills> 
         </div>

        <div className='grid-item7'>
            <Sample title = 'AI Music product' note = 'UX Case study' img = {MUSIC}/>
        </div>
        
        <div className='grid-item8'>
            <Sample title = 'AI Map redesign' note = 'UX Case study' img = {MAP}/>
        </div>
     

        <div className='grid-item9'>
            <Product />
        </div>
       
       <div className='grid-item10'>
            <Footer />
       </div>
       
      

    </main>
  )
}

export default Layout