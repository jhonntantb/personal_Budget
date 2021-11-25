import React, { useState, useEffect } from 'react'
import { getCategories, getOperations} from "../api"
import "./ListOperations.css"

function ListOperations() {
    const [operations, setOperations] = useState([])
    const [categories,setCategories]=useState([])
    useEffect(async() => {
        await setOperations(await getOperations())
        await setCategories(await getCategories())
    }, [])

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
    console.log(categories)
    return (
        <div className="listOperations">
            <div className="filters">
                <div className="filterType">
                    <h3>Type</h3>
                    <button value="entry" onClick={e=>handleType(e)}>Entry</button>
                    <button value="egress" onClick={e=>handleType(e)}>Egress</button>
                </div>
                <div>
                    <h3>Categories</h3>
                    {
                        categories.map(c=>
                            <button value={c.name} onClick={e=>handleCategoryList(e)}>{c.name}</button>
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
                            <td><button>Delete</button></td>
                        </tr>
                        )
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListOperations
