const fs = require("fs");
const express = require("express");
const app = express();

// Importing products from products.json file
const products = JSON.parse(fs.readFileSync(`${__dirname}/data/products.json`));

//Middlewares
app.use(express.json());

// GET endpoint for sending the products to client by id
//// Endpoint - /api/v1/products/:id
app.get('/api/v1/products/:id',(req,res)=>{
    const product=products.find((product)=>product.id==req.params.id)
   if(!product){
    return res.status(404).json({
        status: "failed", 
        message: "Product not found!"
    })
   }
   return res.status(200).json({
    status: "success", 
    message: "Product fetched successfully",
    data:{product}
   })
    })

module.exports = app;
