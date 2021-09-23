const logger = (req, res, next) =>{
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
    
    //IMPORTANT
    //When we are working with middleware, either we terminate our function
    //with our own respond or we pass to the next middleware. 
    next()
}

module.exports = logger;