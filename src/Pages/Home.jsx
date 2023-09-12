import React from 'react';
import "../Pages/Home.css";

const Home = () => {

    return (
        <>
            <div className="container"  >
                <h1 className='title color is-1'>Welcome</h1>
                <hero className="hero is-fullheight">
                    <button className='btn is-overlay'><a href="/store">See products</a></button>
                </hero>
            </div>
        </>
    )
}

export default Home
