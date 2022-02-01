import { useRef } from "react";
import "../componentes/estilos/end.css"

export default function Start({setUserName}) {

    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.value && setUserName(inputRef.current.value);

    };
    return (
        <div className='start'>
            <h1 className="begin">Let's Play!</h1>
            <br/>
            <input 
            type="text" 
            placeholder='Enter your name' 
            className='start-input'
            ref={inputRef}
            />
            <br/>
        
            <button className='start-button' onClick={handleClick}>Start</button>
        </div>
    )
}
