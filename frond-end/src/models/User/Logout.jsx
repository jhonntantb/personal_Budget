import React from 'react'
import { useAuth0 } from "@auth0/auth0-react"
import "./Logout.css"

function Logout() {
    const {logout}=useAuth0()
    return (
        <button className="logout" onClick={()=>logout()}>Logout</button>
    )
}

export default Logout
