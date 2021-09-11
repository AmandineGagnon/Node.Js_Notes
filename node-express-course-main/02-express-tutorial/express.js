const express = require('express')
const app = express()

//everytime the user navigate to the / and do a GET request, the callback function is called. 
app.get('/',(req, res)=>{
    res.status(200).send('Home Page')
})

app.get('/about', (req, res)=>{
    res.status(200).send('About page')
})

//Everytime someone 
app.all('*', (req, res)=>{
    res.status(404).send('<h1>Resource not found!</h1>')
})

//set up the port
app.listen(5000,()=>{
    console.log('server is listening on port 5002')
})

//app.get
//app.post
//app.put
//app.delete
//app.all
//app.use
//app.listen 