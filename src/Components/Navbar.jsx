import React from 'react'
import './Navbar.css'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Store from '../Pages/Store'
import Contact from '../Pages/Contact'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className='navbar-is-transparent is-fullscreen'>
                <a href="/"> <h1 className='logo'>Nova</h1></a>

                <div className='links'>
                    <Link to="/"><div className='link'>Home</div></Link>
                    <Link to="/src/Pages/About.jsx"><div className='link'>About</div></Link>
                    <Link to="/src/Pages/Contact.jsx"><div className='link'>Contact</div></Link>
                    <Link to="/src/Pages/Store.jsx">   <div className='link'>Store</div></Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar
