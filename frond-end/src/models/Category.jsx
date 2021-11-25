import React, { useState, useEffect } from 'react'
import { getCategories, newCategory } from "../api" 
import "./Category.css"

function Category({ setCategorySelect }) {
    const [categories,setCategories]= useState([])
    const [category, setCategory] = useState("")
    const [viewForm, setViewForm] = useState(false)
    const [callCategories,setCallCategories]=useState(false)




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
    const handleCategorySelected=(e)=>{
        e.preventDefault();
        const cat=categories.find(c=>c.name===e.target.value)
        setCategorySelect(cat?.id)
    }
    useEffect(async() => {
       setCategories(await getCategories())
    }, [callCategories])
   
    return (
        <div>
            <h3>Categories</h3>
            {categories?.length>0? 
            <div className="categorieslist">
                {
                <div>
                    <label className="categoryLabel" htmlFor="categories">Select Category</label>
                    <input type="text"  name="categories" list="categories" onChange={(e)=>handleCategorySelected(e)} />
                    <datalist id="categories">
                        <option value="none"></option>
                        {categories.map(c=>
                        <option value={c.name}/>
                            )}
                    </datalist>
                </div>}
            </div>:<div>
                <span>There is no category created</span>
                </div>}
            <dir >
                <button className="newCategoryBtn" onClick={(e)=>createCategory(e)}>New category</button>
            </dir>
            <div>
                {viewForm&&<div>
                    <form action="">
                    <label htmlFor="category">Category name</label>
                    <input type="text" id="category" value={category} onChange={(e)=>handleCategory(e)}/>
                    </form>
                    <div className="btn">
                    <button className="createCategorybtn" onClick={(e)=>createNewCategory(e)}>Create Category</button>
                    </div>
                </div>}
            </div>
        </div>
    )
}

export default Category
