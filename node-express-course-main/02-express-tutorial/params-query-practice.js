const express = require('express')
const app = express()

//Importing json object products from data.js
const {products} = require('./data.js')

app.get('/', (req, res)=>{
    res.send('<h1> Home Page</h1><a href="/api/products">Products</a>')
})

//we want to return all products, but only some proprieties of each. 
//We omit the description
app.get('/api/products',(req, res)=>{
    const newProducts = products.map((product)=>{
        const {id, name, image} = product;
        return {id, name, image}
    })
    res.json(newProducts)
})

//We want only one single product with a specific ID
//:productID plays as a placeholder and a paramerters. 
app.get('/api/products/:productID',(req, res)=>{
    
    console.log(req.params)
    const {productID} = req.params
    const singleProduct = products.find(
        (product)=>product.id === Number(productID))
    
        //If the product does not exists, return error 404
        if(!singleProduct){
            return res.status(404).send('Products does not exists')
        }
        res.json(singleProduct)
})

app.get('api/products/:productID/reviews/:reviewID', (req, res)=>{
    console.log(req.params)
    res.send('hello World')
})


//Port Listener
app.listen(5000, ()=>{
    console.log('Server is listening on port 5000...')
})