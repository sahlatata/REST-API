import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getproduct } from "../redux/Action/ActionProduct"
import CardProduct from "./CardProduct"

const ListProduct =()=>{
const dispatch = useDispatch()
const Product = useSelector(state=>state.ProductReducer.Product)
useEffect(()=>{
    dispatch(getproduct())
},[])
    return(
        <div>
            {
            Product.map((el)=><CardProduct key={Product._id} el={el}/>)
            }
        </div>
    )
}

export default ListProduct