var http = require('http')
var fs = require('fs')

http.createServer(function(req, res){

    const fileStream = fs.createReadStream('./content/big.txt','utf8');
    fileStream.on('open', (result) => {
        //.pipe help us to write text on the responnse
        //we then write data in chunked
        fileStream.pipe(res)
    })

    fileStream.on('error', (err)=>{
        res.end(err)
    })
})
.listen(5000)