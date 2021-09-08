//Basic HTTP method

const http = require('http')

const {readFileSync} = require('fs');

//get all files
//We are note invoking this method each time a resquest is made. That's why ReadFileSync is ok.
const homePage = readFileSync('./index.html')


//The callback method is called everytime the user called the server. 
const server = http.createServer((req, res)=>{
    console.log(req.method) //return the method name
    console.log(req.url) //return the URL
    const url = req.url
    
    if(url === '/'){
        res.writeHead(200, {'content-type':'text/html'}) //Writing the header
        res.write(homePage) //Body
        res.end() //tell that the communication is complete. Always put res.end at the end
    
    //about page
    }else if(url === '/about'){
        res.writeHead(200, {'content-type':'text/html'}) //Writing the header
        res.write('<h1>About Page</h1>') //Body
        res.end() //tell that the communication is complete. Always put res.end at the end
    
    } else{ //404
        res.writeHead(400, {'content-type':'text/html'}) //Writing the header
        res.write('<h1>404 Page Not Found</h1>') //Body
        res.end() //tell that the communication is complete. Always put res.end at the end
    }

    console.log('user hit the server')
})

//Arbitrary port for developpment
server.listen(5000)
