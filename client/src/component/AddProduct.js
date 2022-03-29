import { useState } from "react"
import { Button, Container, Form } from "react-bootstrap"
import { useDispatch } from "react-redux"
import {useNavigate} from 'react-router-dom'
import { addproduct } from "../redux/Action/ActionProduct"
const AddProduct =()=>{
    const [product,setProduct]=useState('')
    const [brand,setBrand]=useState('')
    const [price,setPrice]=useState(0)
    const [image,setImage]=useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handelAdd=(e)=>{
    e.preventDefault()
    dispatch(addproduct({product,brand,price,image}))
    navigate('/product')
    }
    return(
        <div>
            <Container>
            <Form>
    <Form.Group className="mb-3" >
        <Form.Label>Product</Form.Label>
        <Form.Control  onChange={(e)=>setProduct(e.target.value)} type="string" placeholder="Enter a new product" />
    </Form.Group>

    <Form.Group className="mb-3" >
        <Form.Label>Brand</Form.Label>
        <Form.Control onChange={(e)=>setBrand(e.target.value)} type="string" placeholder="Enter the brand" />
    </Form.Group>

    <Form.Group className="mb-3" >
        <Form.Label>Price</Form.Label>
        <Form.Control  onChange={(e)=>setPrice(e.target.value)} type="number" placeholder="Enter the price" />
    </Form.Group>

    <Form.Group className="mb-3" >
        <Form.Label>Image</Form.Label>
        <Form.Control onChange={(e)=>setImage(e.target.value)} type="string" placeholder="Enter the path of the picture" />
    </Form.Group>

    <Button variant="primary" onClick={(e)=>handelAdd(e)}>
        Submit
    </Button>
    </Form>
    </Container>
        </div>
    )
}

export default AddProduct