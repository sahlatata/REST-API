const express= require ("express")
const { AddProduct,GetProduct,DeleteProduct,UptadeProduct,GetOneProduct } = require("../Controllers/Product")
const ProductRouter = express.Router()


ProductRouter.post('/AddProduct',AddProduct)
ProductRouter.get('/GetProduct',GetProduct)
ProductRouter.delete('/DeleteProduct/:id',DeleteProduct)
ProductRouter.put('/UptadeProduct/:id',UptadeProduct)
ProductRouter.get('/GetOneProduct/:id',GetOneProduct)




module.exports= ProductRouter