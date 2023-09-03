import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <nav className='navbar-is-transparent is-fullscreen'>
                <a href="/"> <h1 className='logo'>Nova</h1></a>

                <div className='links'>
                    <li><button><a href="/">Home</a></button></li>
                    <li><button><a href="/about">About</a></button></li>
                    <li><button><a href="/contact" >Contact</a></button></li>
                    <li><button><a href="/store">Store</a></button></li>
                </div>
            </nav>
        </>
    )
}

export default Navbar
