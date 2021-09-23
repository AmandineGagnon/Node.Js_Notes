const express = require('express')
const app = express()

//Importing json object products from data.js
const {products} = require('./data.js')


app.get('/', (req, res)=>{
    res.json(products)
})


app.post('/login', (req, res)=>{
    res.send('POST')
})



app.listen(5000, ()=>{
    console.log('Server is listening on port 5000...')
})