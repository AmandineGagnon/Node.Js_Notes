const http = require('http')

const server = http.createServer((req, res) => {

    //The req object is a very big object
    console.log(req)

    //If the client is asking for the home page represented by a /, then...
    if(req.url === '/'){
        res.end('Welcome to our page!')
    } 

    if(req.url === '/about'){
        res.end('This is the about page')
    }

    /*This is the default response. If the user try to access a page that does not
    exist on our webserver, this response will appear on the client browser */
    res.end(`<h1> Ooops! </h1>
            <p> This page does not exist </p>
            <a href = "/">Back home </a>
    `)
})

//The port the server is listening on
server.listen(5000)