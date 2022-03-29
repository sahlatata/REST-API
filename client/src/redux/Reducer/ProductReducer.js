import {  GETONEPRODUCT, GETPRODUCT } from "../ActionType/ActionTypeProduct"

const initialeState= {
    Product :[],
    OneProduct :{}
}

const ProductReducer = (state= initialeState, action)=>{
switch (action.type) {
    case GETPRODUCT: return ({...state,Product :action.payload.AllProduct})
    case GETONEPRODUCT : return ({...state,OneProduct : action.payload.OneProduct})
    default:return state        
}


}
export default ProductReducer