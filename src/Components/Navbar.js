import React from 'react'
import { Link } from 'react-router-dom'
import BurgerLogo from '../Assest/burgerlogo.png';
import '../styles/Navbar.css';
function Navbar() {
  return (
    <div className='navbar'>
      <div className='main'>
        <img src={BurgerLogo} alt=""/>
        <div className='mainLink'>
            <Link to="/" >Anasayfa</Link>
            <Link to="/menu" >Menü</Link>
            <Link to="/about" >Hakkımızda</Link>
            <Link to="/contact" >İletişim</Link>

        </div>
      </div>
    </div>
  )
}

export default Navbar
