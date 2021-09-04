const http = require('http');

//Server creation
//This server object can handle some events
const server = http.createServer((req, res)=>{

    if(req.url === '/'){
        //Send something to the client
        res.write('Hello World');
        res.end(); //end the response
    }


    if(req.url === '/api/courses'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

//For the server to listen on port 3000
server.listen(3000);

console.log('Listening on port 3000...');