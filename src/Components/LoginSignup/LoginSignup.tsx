import React from 'react'
import './LoginSignup.css'
import application_logo from '../Assets/logo.svg'

const LoginSignup = () => {
    return (
        <div className="container">
            <div className="header">
                <div className="image-logo">
                    <img id="image-logo" src={application_logo} alt=""/>
                </div>
                <div className="text">
                    Harmonia
                </div>
            </div>
            <div className="inputs">
               <div className="listening"> Sign up to start listening </div>
                <div className="input">
                    <input type = "email" />
                </div>
                <div className = "input">
                    <input type = "password" />
                </div>
            </div>
                <div className="submit-container">
                    <div className="submit-button">
                        Sign up
                    </div>
                </div>
        </div>
    )
}

export default LoginSignup