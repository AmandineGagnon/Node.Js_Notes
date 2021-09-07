const http = require('http');

const server = http.createServer((req, res)=>{
    console.log('request event')
    res.end('Hello World')
})


//This process stay alive. It is asynchronous. We are asking server to listen on port 5000
//and when a request came in, then respond appropriately.
server.listen(5000, () =>{
    console.log('Server Llistening on port 5000')
})