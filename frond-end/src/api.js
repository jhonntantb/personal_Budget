import axios from "axios"
const url="http://localhost:3001"

export const getOperations=async()=>{
    const res=await axios.get(`${url}/operation`)
    return res.data
}
export const getUser=async(email)=>{
    const res=await axios.get(`${url}/user`,{data:email})
    return res.data
}
export const saveUser=async(user)=>{
    const sen=await axios.post(`${url}/user`,user)
}
export const saveOperation=async(data)=>{
    const sen=await axios.post(`${url}/operation`,data)
}
export const deleteOperration=async(id)=>{
    await axios.delete(`${url}/operation/${id}`)
}
export const getCategories=async()=>{
    const res=await axios.get(`${url}/categories`)
    return res.data
}
export const newCategory=async(category)=>{
    const sen=await axios.post(`${url}/categories`,category)
}