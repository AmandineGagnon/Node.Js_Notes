const http = require('http')

const server = http.createServer()

//server extends EventEmitter by default
server.on('request', (req, res)=>{
    res.end('Welcome')

})