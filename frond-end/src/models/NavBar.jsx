import React from 'react'
import { Link } from "react-router-dom"
import "./NavBar.css"
import LoginButton from './User/Login'
import Logout from './User/Logout'
import Profile from './User/Profile'
import { useAuth0 } from "@auth0/auth0-react"

function NavBar() {

    const { isAuthenticated, isLoading }=useAuth0()
    return (
        <div className="navBar">
            <nav className="nav">
                <Link to="./home" ><h1>Personal Budget</h1></Link>
                <div className="list">
                    <Link to="/register" ><h3>Register Operation</h3></Link>
                    <Link to="/list" ><h3>List of Operations</h3></Link>
                    {isAuthenticated?
                    <div className="authenticated">
                    <Profile/><Logout/></div>:<LoginButton/>}
                    
                </div>
            </nav>
        </div>
    )
}

export default NavBar
