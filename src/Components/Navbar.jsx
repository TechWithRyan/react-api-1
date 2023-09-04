import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className='navbar-is-transparent is-fullscreen' id="section-one">
                <a href="/"> <h1 className='logo'>Nova</h1></a>

                <div className='links'>
                    <Link to="/"><div className='link'>Home</div></Link>
                    <Link to="/about"><div className='link'>About</div></Link>
                    <Link to="/contact"><div className='link'>Contact</div></Link>
                    <Link to="/store">   <div className='link'>Store</div></Link>
                    <Link to="/profile">   <div className='link'>Profile</div></Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar
