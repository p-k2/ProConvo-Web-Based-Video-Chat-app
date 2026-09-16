import React from 'react' ;
import "../App.css";

export default function LandingPage(){
    return (
        <div className='landingpageContainer'>
            <nav>

                <div className='NavHeader'>
                    <h2>ProConvo</h2>
                </div>
                <div className='navList'> 
                    <p>Join as Guest</p>
                    <p>Register</p>
                    <div role="button"> <p>Login</p></div>
                </div>
            </nav>

            <div className="landingMainContainer">

                <div>
                    <h1><span style={{color: "#d97500"}}>Connect</span> with your loved ones</h1>
                    <p>Cover a distance by ProConvo</p>
                    <div role= "button">
                        <Link to="/auth">Get Started</Link>
                    </div>
                </div>
                <div>
                    <img src="/mobile.png"></img>
                </div>
            </div>
        </div>
    )
}
