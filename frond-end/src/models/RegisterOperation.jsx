import React, { useEffect, useState } from 'react'
import { getUser, putUser, saveOperation } from '../api'
import Category from './Category'
import { useAuth0 } from "@auth0/auth0-react"
import "./RegisterOperation.css"

function RegisterOperation() {
    const {user,isAuthenticated}=useAuth0()
    const [reset,setReset]=useState(true)
    const [userCall,setUserCall] = useState([])
    
    const [concept, setConcept] = useState("")
    const [amounth, setAmounth] = useState(0)
    const [date, setDate] = useState("")
    const [type, setType] = useState("")
    const [categorySelect, setCategorySelect] = useState("")


   const handleInput=(e)=>{
       e.preventDefault()
       if(e.target.id==="concept") setConcept(e.target.value)
       if(e.target.id==="amounth") setAmounth(e.target.value)
       if(e.target.id==="date") setDate(e.target.value)
   }
   const selectType=(e)=>{
       if(e.target.checked){
           setType(e.target.value)
       }
   }
   const balance=type==="entry"?userCall[0]?.balance + + amounth:userCall[0]?.balance-amounth;
   const handleNewOperation=async(e)=>{
       e.preventDefault()
       await saveOperation({operation:{concept:concept,amounth:amounth,date:date,type:type,userId:userCall[0].id,categoryId:categorySelect?categorySelect:null }})
       await putUser({balance:balance,id:userCall[0].id})
       setConcept("")
       setDate("")
       setAmounth(0)
       setType("")
       setCategorySelect("")
   }
   useEffect(async() => {
       if(isAuthenticated){
        setUserCall(await getUser(user.email))
       }  
   }, [isAuthenticated])
   useEffect(() => {
   }, [reset])
    return (
        <div className="form">
            <p>Operation Form</p>
            <div>
            <form className="formInput" >
                <div className="concept">
                    <label htmlFor="concept"> <span>Concept</span></label>
                    <textarea type="text" id="concept" placeholder="concept of operation" value={concept} onChange={(e)=>handleInput(e)} />
                </div>
                <div className="numberDate">
                    <div className="amounth">
                        <label htmlFor="">Amount</label>
                        <input type="number" id="amounth" min="1" value={amounth} onChange={(e)=>handleInput(e)} />
                    </div>
                    <div className="date">
                    <label htmlFor="">Date</label>
                    <input type="date" id="date" value={date} onChange={(e)=>handleInput(e)} />
                    </div>
                </div>
                <div className="checkBox">
                    <h4 htmlFor="">Type</h4>
                    <div className="entry">
                        <label htmlFor="">Entry</label>
                        <input type="checkbox" id="type" value="entry" defaultChecked={false} checked={type==="entry"} onChange={(e)=>selectType(e)}/>
                    </div>
                    <div className="egress">
                        <label htmlFor="">Egress</label>
                        <input type="checkbox" id="type" value="egress" checked={type==="egress"} onChange={(e)=>selectType(e)}/>
                    </div>
                   <Category setCategorySelect={setCategorySelect}/>
                </div>
                <button className="saveBtn" onClick={e=>handleNewOperation(e)}>Save Operation</button>
            </form>
            
            </div>
        </div>
    )
}

export default RegisterOperation
