import React from 'react'
import Category from './Category'
import "./RegisterOperation.css"

function RegisterOperation() {
    const date= new Date()
    console.log(date)
    return (
        <div className="form">
            <p>Operation Form</p>
            <div>
            <form className="formInput" >
                <div className="concept">
                    <label htmlFor="concept"> <span>Concept</span></label>
                    <textarea type="text" id="concept" placeholder="concept of operation" />
                </div>
                <div className="numberDate">
                    <div className="amounth">
                        <label htmlFor="">Amount</label>
                        <input type="number" min="1" />
                    </div>
                    <div className="date">
                    <label htmlFor="">Date</label>
                    <input type="date" min={date} />
                    </div>
                </div>
                <div className="checkBox">
                    <h4 htmlFor="">Type</h4>
                    <div className="entry">
                        <label htmlFor="">Entry</label>
                        <input type="checkbox"/>
                    </div>
                    <div className="egress">
                        <label htmlFor="">Egress</label>
                        <input type="checkbox"/>
                    </div>
                   <Category/>
                </div>
            </form>
            <button>Save Operation</button>
            </div>
        </div>
    )
}

export default RegisterOperation
