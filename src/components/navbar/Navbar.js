import React from 'react'
import './navbar.css'
import {
    Link
} from "react-router-dom";
const Navbar = () => {
    return (
       <div >
            <nav className='navbar'>
                <ul className='nav-list'>
                    <div className='logo'><img src="./favicon.png" alt='logo'></img></div>
                    <li> <Link to='/'>Home</Link></li>
                    <li> <Link to='/about'>About</Link></li>
                    <li> <Link to='/contactus'>Contactus</Link></li>
                    <li> <Link to='/pricing'>Pricing</Link></li>
                    <li> <Link to='/faqs'>Faqs</Link></li>
                    <li> <Link to='/features'>Features</Link></li>
                </ul>
                <div className='navbar_sign'>
                    <button><Link to="/login">SIGN UP</Link></button>
                </div>
            </nav>
       </div>
    )
}

export default Navbar