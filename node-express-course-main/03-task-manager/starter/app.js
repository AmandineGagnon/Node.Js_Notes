const express = require('express');
const app = express();
const connectDB = require('./db/connect')
require('dotenv').config()

const task = require('./routes/task')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

//middleware
app.use(express.static('./public'))
app.use(express.json());

// routes
app.use('/api/v1/tasks', task)
app.use(notFound)
app.use(errorHandlerMiddleware) //to have a custom error handler function

//For deployement
const port = process.env.PORT || 5000;

const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        //connecting to the server only if the connection to DB is successful
        app.listen(port, console.log(`Server is listening on port ${port}`))
    
    }catch(error){
        console.log(error)
    }
}

start() 