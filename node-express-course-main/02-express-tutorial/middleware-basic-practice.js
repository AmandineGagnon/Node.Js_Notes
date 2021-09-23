const express = require('express')

const app = express()

const morgan = require('morgan')
const logger = require('./logger.js')
const authorize = require('./authorize.js')

//req => middleware => res

//This is my middleware function to be referenced
//It would be better to have this logger function in a separate file. 

/*const logger = (req, res, next) =>{
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
    
    IMPORTANT
    When we are working with middleware, either we terminate our function
    with our own respond or we pass to the next middleware. 
    next()
} */

/*If app.use is place after a method in the code this will not be applied to the methods before. 
If I do add a routes, this will apply to every method whose route is /api[...].
If we omit the path, this will invoke the logger function for all routes of the app. */

/*If we want to invoke mutiple method, we can put it in []. The functions will be executed in order. 
[logger, authorize] != [authorize, logger] */

//app.use('/api',[logger, authorize])
app.use(express.static('./public'))

app.use(morgan('tiny'))

//Everytime a user hit the home page. We get the method, url and yearTime.
//logger function is my  
app.get('/', (req, res)=>{
    
    //A proper method would be to attach this to a function and call it in other page or method I need. 
        //const method = req.method
        //const url = req.url
        //const time = new Date().getFullYear
        //console.log(method, url, time)

    res.send('Home')
})

app.get('/about', (req, res)=>{
    res.send('About')
})

app.get('/api/products', (req, res)=>{
    res.send('Products')
})

// If wanted, we can only invoke those methods with /api/items routes. 
app.get('/api/items', /*[logger, authorize]*/ (req, res)=>{
    res.send('Items')
    
    //The user is attached to all routes. 
    console.log(req.user)
})

app.listen(5000, ()=>{
    console.log('Server is listening on port 5000...')
})