const express = require('express')
const app = express()

//Here is the router that we import
const peopleRouter = require('./routes/people')
const authRouter = require('./routes/auth')

//app.use places the middleware to our routes. 
app.use(express.static('./methods-public'))

//Form encoded
app.use(express.urlencoded({extended:false}))

// parse json
app.use(express.json())

app.use('/api/people', peopleRouter)
app.use('/login', authRouter)

app.listen(5000, ()=>{
    console.log("Server is listening on port 5000")
})

