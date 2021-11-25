import React,{ useState, useEffect} from 'react'
import { useAuth0 } from "@auth0/auth0-react"
import {saveUser} from "../../api"
import "./Profile.css"
function Profile() {
    const {user,isAuthenticated}=useAuth0()

    
    useEffect(async() => {
        if(isAuthenticated){
            await saveUser(user)
        }   
    }, [isAuthenticated])
    return (
        <div>
            {isAuthenticated&&<div className="profile">
                <img src={user.picture} alt={user.name} />
                <div>
                <h2>{user.name}</h2>
                </div>
            </div>}
        </div>
        
    )
}

export default Profile
