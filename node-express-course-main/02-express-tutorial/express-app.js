const express = require('express')
const app = express()
const path = require('path')

//static when server does needs to change the files or the content. middleware. 
app.use(express.static('./public'))

//index.html has been added to the folder public cause it is a static asset. 
// app.get('/', (req, res)=>{
//     res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))   
// })

app.all('*', (req,res)=>{
    res.status(404).send('resource not found')
})

app.listen(5000, ()=>{
    console.log('server is listening on port 5000...!')
})