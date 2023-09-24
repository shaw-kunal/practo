import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='mainContainer'>
            <div className="container">
                <div className="itemlist">
                    <Link className='link' to="/">
                        <span>Home</span>
                    </Link>
                    <Link  className="link" to="/list">
                    <span>Find Doctor</span>
                    </Link>
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