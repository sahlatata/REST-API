const Product = require("../Model/Product")

exports.AddProduct = async(req,res)=>{
try {
const NewProduct = new Product(req.body)   
await NewProduct.save()
res.status(200).send({NewProduct,Msq:'Product Added'})
} catch (error) {
res.status(500).send("product not added")   
}
}

exports.GetProduct = async(req,res)=>{
    try {
    const AllProduct = await Product.find()
    res.status(200).send({AllProduct,Msg:'list of products'})
    } catch (error) {
    res.status(500).send("impossible de voir les product ")   
    }
    }

exports.DeleteProduct=async(req,res)=>{
    try {
    const {id}= req.params 
    const DelProduct = await Product.findByIdAndDelete(id)
    res.status(200).send('Product deleted')
    } catch (error) {
    console.log('delete impossible' )  
    }
}
exports.UptadeProduct=async(req,res)=>{
    try {
    const {id}= req.params 
    const UpProduct = await Product.findByIdAndUpdate(id,{$set : req.body})
    res.status(200).send('Product updated')
    } catch (error) {
    console.log('update impossible' )  
    }
}

exports.GetOneProduct=async(req,res)=>{
    try {
        const {id}= req.params
        const OneProduct = await Product.findById(id)  
        res.status(200).send({OneProduct,msg:'produit trouvé'})
      } catch (error) {
        console.log('impossible a trouver')
        
    }
}