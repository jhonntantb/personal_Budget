import React, { useState, useEffect } from 'react'
import { getOperations} from "../api"

function ListOperations() {
    const [operations, setOperations] = useState([])
    useEffect(async() => {
        setOperations(await getOperations())
    }, [])
    return (
        <div>
            <p>Lista de operaciones</p>
        </div>
    )
}

export default ListOperations
