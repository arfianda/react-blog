import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai"

const Header = () => {
  return (
    <nav>
      <div className="container nav__container">
        <Link to="/" className='nav__logo'>
          <img src={Logo} alt="Navbar Logo" />
        </Link>
        <ul className="nav__menu">
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/create">Create Post</Link></li>
          <li><Link to="/authors">Authors</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>
        <button className="nav__toggle-btn">
        <AiOutlineClose /> 
        </button>
      </div>
    </nav>
  )
}

export default Header

// Lanjutkan di video "https://www.youtube.com/watch?v=e_lJYRaMo60" Menit ke 32:35