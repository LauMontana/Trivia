import Lottie from 'react-lottie';
import wrong from '../media/wrong.json';
import React from 'react';
import './estilos/end.css'

function Lost() {
    
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: wrong,
        }
    
    return (
        <div className='animacion-wrong'>
            <Lottie options={defaultOptions} />
            
        </div>
    )
}

export default Lost
