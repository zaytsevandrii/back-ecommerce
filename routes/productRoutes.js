import express from 'express'
const router = express.Router()
import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'
//Use express-async-handler not to use try and catch

//Fetch all Products route /api/products
router.get('/',asyncHandler(async (req,res)=>{
    const products = await Product.find({})
    
    res.json(products)
}))

//Fetch single product route /api/products/:id
router.get('/:id',asyncHandler(async(req,res)=>{
    const product = await Product.findById(req.params.id)

    if(product){
        res.json(product)
    }else{
        res.status(404)
        throw new Error('Product not found')
    }
}))

export default router 