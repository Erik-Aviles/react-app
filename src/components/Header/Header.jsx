import React, { useState} from 'react';
import './Header.css'
import { AiFillBulb } from "react-icons/ai";

const Header = () => {
  const [changeMode, setChangeMode] = useState(false);

  const handleClick = () =>{
    setChangeMode(!changeMode);
  }

  return (
    <header className={changeMode ? 'Header-container dark-mode' : 'Header-container light-mode'}>
      <h1>
        Ing. Erika Aviles Cortez
      </h1>
      <button type='button' onClick={handleClick}><AiFillBulb className='svg'/></button>
      
  </header>

  )
}

export default Header
