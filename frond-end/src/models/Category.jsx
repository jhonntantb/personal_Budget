import React, { useState, useEffect } from 'react'
import { getCategories, newCategory } from "../api" 

function Category() {
    const [categories,setCategories]= useState([])
    const [category, setCategory] = useState("")
    const [viewForm, setViewForm] = useState(false)
    const [callCategories,setCallCategories]=useState(false)

    const [sconcept, setsConcept] = useState("")
    const [amounth, setAmounth] = useState(0)
    const [date, setDate] = useState("")
    const [type, setType] = useState("initialState")
    const [categorySelect, setCategorySelect] = useState("initialState")

    const handleCategory=(e)=>{
        setCategory(e.target.value)
    }
    const createCategory=(e)=>{
        e.preventDefault()
        setViewForm(true)
    }
    const createNewCategory=async(e)=>{
        e.preventDefault()
        await newCategory({name:category})
        setCategory("")
        setViewForm(false)
        setCallCategories(true)
    }
    useEffect(async() => {
       setCategories(await getCategories())
    }, [callCategories])
    return (
        <div>
            <h3>Categories</h3>
            {categories?.length>0? 
            <div>
                {categories.map(e=>
                <div key={e.id}>
                    <label htmlFor={e.name}>{e.name}</label>
                    <input type="checkbox" />
                </div>)}
            </div>:<div>
                <span>There is no category created</span>
                </div>}
            <dir>
                <button onClick={(e)=>createCategory(e)}>New category</button>
            </dir>
            <div>
                {viewForm&&<div>
                    <form action="">
                    <label htmlFor="category">Category name</label>
                    <input type="text" id="category" value={category} onChange={(e)=>handleCategory(e)}/>
                    </form>
                    <button onClick={(e)=>createNewCategory(e)}>Create Category</button>
                </div>}
            </div>
        </div>
    )
}

export default Category
