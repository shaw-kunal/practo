import React from 'react'
import "./navbar.css"
const Navbar = () => {
    return (
        <div className='mainContainer'>
            <div className="container">
                <div className="logo">
                    <img src="https://www.practo.com/nav/9.5.17/consumer/images/practo.svg" alt="not found" />
                </div>
                <div className="itemlist">
                    <span>Find Doctor</span>
                    <span>Video Consult</span>
                    <span>Medicine</span>
                    <span>Lab Test</span>
                    <span>Surgeries</span>
                </div>
                <div className="loginbtn">
                    <button>logIn/signUp</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar