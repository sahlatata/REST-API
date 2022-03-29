import { useEffect, useState } from "react"
import { Button, Container, Form } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getoneproduct, updateproduct } from "../redux/Action/ActionProduct"

const EditProduct =()=>{
const {id}=useParams()
const dispatch = useDispatch()
const navigate=useNavigate()
useEffect(()=>{
dispatch(getoneproduct(id))
},[])
    const Product = useSelector(state=>state.ProductReducer.OneProduct)
    const [name,setName]=useState(Product.name)
    const [brand,setBrand]=useState(Product.brand)
    const [price,setPrice]=useState(Product.price)
    const [image,setImage]=useState(Product.image)
    useEffect(()=>{
        setName(Product.name)
        setBrand(Product.brand)
        setPrice(Product.price)
        setImage(Product.image)
    },[Product])
    const handleEdit=(e)=>{
            e.preventDefault()

            dispatch(updateproduct(id,{name,brand,price,image}))
            navigate('/product')
    }
    return(
        <div>
            <Container>
            <Form>
    <Form.Group className="mb-3" >
        <Form.Label>Product</Form.Label>
        <Form.Control  value ={name} onChange={(e)=>setName(e.target.value)} type="string"  />
    </Form.Group>

    <Form.Group className="mb-3" >
        <Form.Label>Brand</Form.Label>
        <Form.Control  value ={brand} onChange={(e)=>setBrand(e.target.value)} type="string"  />
    </Form.Group>

    <Form.Group className="mb-3" >
        <Form.Label>Price</Form.Label>
        <Form.Control  value ={price} onChange={(e)=>setPrice(e.target.value)} type="number"  />
    </Form.Group>

    <Form.Group className="mb-3" >
        <Form.Label>Image</Form.Label>
        <Form.Control value ={image}  onChange={(e)=>setImage(e.target.value)} type="string"  />
    </Form.Group>

    <Button variant="primary" onClick={(e)=>handleEdit(e)}>
        Submit
    </Button>
    </Form>
    </Container>
        </div>
    )
}

export default EditProduct