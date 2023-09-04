import React from 'react';
import "../Pages/Home.css";
import { useState } from 'react';
import photo1 from "../assets/11.jpg"

const Home = () => {

    return (
        <>

            <div className="container"  >
                <h1 className='title color is-1'>Welcome</h1>
                <hero className="hero is-fullheight">
                    <button className='btn is-overlay'><a href="#section-two">Try for free</a></button>
                </hero>
            </div>

            {/* <div id="section-two">
                <div className="text">
                    <h1 className='title is-1'>Stressa inte</h1>
                    <p>  Låt oss hjälpa till med hemsidan.
                    </p>
                </div>

                <div className="photo">
                    <img src={photo1} alt="plan" />
                    <button className='btn'><a href="#section-one">Back to top</a></button>
                </div>
            </div> */}





        </>
    )
}

export default Home
