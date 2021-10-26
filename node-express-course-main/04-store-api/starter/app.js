// async errors
const express = require('express')
const app = express()
const connectDB = require('./db/connect')
require('dotenv').config()

//This package helps with the management of error. Thus, we avoid to make our own middleware or doing try catch 
require('express-async-errors')

const productsRouter = require('./routes/products')

const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

// middleware
app.use(express.json())

//rootes
app.get('/', (req, res) =>{
    res.send('<h1>Store API</h1><a href="/api/v1/products">Products route</a>')
})

app.use('/api/v1/products', productsRouter)

//products route
app.use(notFoundMiddleware)
app.use(errorMiddleware)

const port = process.env.PORT || 3001

const start = async() =>{
    
    try{
        //connect DB
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening to the port ${port}...`))
    
    }catch(error){
        console.log(error)
    }

}

start()