import React, { useState, useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react"
import { deleteOperation, getCategories, getOperations, getUser, putUser} from "../api"
import NotFound from "./NotFound/NotFound.jsx" 
import BtnCategory from './BtnCategory'
import "./ListOperations.css"

function ListOperations() {
    const {user, isAuthenticated}=useAuth0()
    const [operations, setOperations] = useState([])
    const [categories,setCategories]=useState([])
    const [userCall,setUserCall]=useState({})
    const [action,setAction]=useState(false)

    const email=user?.email
    
    useEffect(async() => {
        await setOperations(await getOperations())
        await setCategories(await getCategories())
    }, [])
    useEffect(async() => {
        if(isAuthenticated){
            setUserCall(await getUser(email))}
    }, [isAuthenticated])
    useEffect(async() => {
        await setOperations(await getOperations())
    }, [action])

    const handleType=async(e)=>{
        e.preventDefault()
        const allOpetarions=await getOperations()
        const filterType=allOpetarions.filter(o=>o.type===e.target.value)
        setOperations(filterType)
    }
    const handleCategoryList=async(e)=>{
        e.preventDefault()
        const allOpetarions=await getOperations()
        const filterCategory=allOpetarions.filter(o=>o.category?.name===e.target.value)
        setOperations(filterCategory)
    }
    const handleDeleteOperation=async(e)=>{
        e.preventDefault();
        const operation=operations.find(o=>o.id===e.target.id)
        const balance=operation.type==="entry"?userCall.balance - operation.amounth:userCall.balance+ +operation.amounth;
        await deleteOperation(e.target.id)
        await putUser({balance:balance,id:userCall.id})
        setAction(!action)
    }
    return isAuthenticated?(
        <div className="listOperations">
            <div className="filters">
                <div className="filterType">
                    <h3>Type</h3>
                    <button value="entry" onClick={e=>handleType(e)}>Entry</button>
                    <button value="egress" onClick={e=>handleType(e)}>Egress</button>
                </div>
                <div className="categories" >
                    <h3>Categories</h3>
                    {
                        categories.map(c=>
                            <div className="cbtn">
                            <button  value={c.name} onClick={e=>handleCategoryList(e)}>{c.name}</button>
                            </div>
                            )
                    }
    
                </div>  
            </div>
            <div className="tableList">
                <h3>List of Operations</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Concept</th>
                            <th>Amounth</th>
                            <th>Date</th>
                            <th>Type</th>
                            <th>Category</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {operations.map(o=>
                        <tr>
                            <td>{o.concept}</td>
                            <td>{o.amounth}</td>
                            <td>{o.date}</td>
                            <td>{o.type}</td>
                            <td>{o.category?.name}</td>
                            <td><div className="deletebtn"><button id={o.id}  onClick={e=>handleDeleteOperation(e)} >Delete</button> </div></td>
                        </tr>
                        )
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    ):(
        <NotFound/>
    )
}

export default ListOperations
