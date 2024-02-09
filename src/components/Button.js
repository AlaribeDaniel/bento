import React, { useState } from 'react';
import '../style/Button.scss'


const Button = ({text , icon, style}) => {

    const [ message, setMessage] = useState('');

   const copyToClipboard = (text) => {

    const result = navigator.clipboard.writeText(text);

    result.then(
        () => {
            setMessage(`copied`)
        }
    ).catch(
        (error) => {
            setMessage(`${error}`);
        }
    ).finally(
        ()=>{
            setTimeout(() => {
                setMessage('');
            }, 1000);
        }
    )
   };
 
  return (
        <section className='btn-sec'>
            <button 
            style={style} 
            onClick={() => { copyToClipboard('danielalaribe1@gmail.com') }}
            className='btn flex_container'
            >
                <p>
                    {text}  
                </p>

                <span>
                    {icon}
                </span>
            
            </button>

            <div className='btn-message'>
            {message}
            </div>

        </section>

      
    
  )
}

export default Button
