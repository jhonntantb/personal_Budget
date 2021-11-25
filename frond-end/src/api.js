import axios from "axios"
const url="http://localhost:3001"

export const getOperations=async()=>{
    const res=await axios.get(url)
    return res.data
}
export const getUser=async(email)=>{
    const res=await axios.get(url,{data:email})
}
export const saveUser=async(user)=>{
    const sen=await axios.post(url,user)
}
export const saveOperatrion=async(opetarion)=>{
    const sen=await axios.post(url,opetarion)
}
export const deleteOperration=async(id)=>{
    await axios.delete(`${url}/${id}`)
}
export const getCategories=async()=>{
    const res=await axios.get(`${url}/categories`)
    console.log(res.data)
    return res.data
}
export const newCategory=async(category)=>{
    const sen=await axios.post(`${url}/categories`,category)
}