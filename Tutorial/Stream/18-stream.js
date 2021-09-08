const {createReadStream} = require('fs')
const stream = createReadStream('./content/big.txt', { 
    highWaterMark:90000, 
    encoding = 'utf8' });

// We are reading the data not in big on block, but in chunks. 
// Stream has is an extension of EventEmitter by default. 

// default 64 kb
// last buffer - remainder
// {highWaterMark} - control size of the buffer

stream.on('data', (result)=>{
    console.log(result)
})


stream.on('error', (err)=>{
    console.log(err)
})