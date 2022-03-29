import axios from  "axios"
import {  GETONEPRODUCT, GETPRODUCT } from "../ActionType/ActionTypeProduct"


export const getproduct =()=>async(dispatch)=>{
    try {
    const  res = await axios.get('/api/Product/GetProduct')
    dispatch({
        type:GETPRODUCT,
        payload : res.data
    })
    } catch (error) {
        console.log(error)
    }
}

export const addproduct=(newProduct)=>async(dispatch)=>{
try {
await axios.post('/api/Product/AddProduct',newProduct)  
dispatch(getproduct())
} catch (error) {
    console.log(error)
}
}

export const deleteproduct =(id)=>async(dispatch)=>{
    try {
    await axios.delete(`/api/Product/DeleteProduct/${id}`)  
    dispatch(getproduct())
    } catch (error) {
    console.log(error) 
    }
}

export const updateproduct = (id,data)=>async(dispatch)=>{
    try {
    await axios.put(`/api/Product/UptadeProduct/${id}`,data) 
    dispatch(getproduct())
    } catch (error) {
        console.log (error)
        
    }
}

export const getoneproduct =(id)=>async(dispatch)=>{
    try {
    const res = await axios.get(`/api/Product/GetOneProduct/${id}`) 
    dispatch({
        type:GETONEPRODUCT,
        payload:res.data
    })
    } catch (error) {
    console.log(error) 
    }
}