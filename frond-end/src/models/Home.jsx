import React, { useEffect, useState} from 'react'
import { useAuth0 } from "@auth0/auth0-react"
import { getUser } from '../api'
import "./Home.css"
function Home() {
    
    const {user, isAuthenticated}=useAuth0()
    const [userCall,setUserCall]=useState({})
    const email=user?.email
    console.log(email)
    useEffect(async() => {
        if(isAuthenticated){
            setUserCall(await getUser(email))}
    }, [isAuthenticated])
    return (
        <div className="home" >
            {isAuthenticated?<div className="info">
            <div className="balance">
                <h3>Balance of operations</h3>
                <h3 className="number" >${userCall?.balance}</h3>
            </div>
            <div>
                <h3>List of the last ten operations </h3>
                <table>
                    <thead>
                        <tr>
                            <th>Concept</th>
                            <th>Amounth</th>
                            <th>Date</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                userCall?.operations?.map(e=>
                                    <tr>
                                    <td>{e.concept}</td>
                                    <td>{e.amounth}</td>
                                    <td>{e.date}</td>
                                    <td>{e.type}</td>
                                    </tr>
                                    )
                            }
                            <td></td>
                    </tbody>
                </table>
            </div>
            </div>:<h3> Click <span style={{backgroundColor:"#ee8586", padding:"6px", borderRadius:"10px"}}>Login</span> to start using</h3> }
            
        </div>
    )
}

export default Home
