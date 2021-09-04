const {readFileSync, writeFileSync} = require('fs');

console.log('start');

//To read file on the system. 
const first = readFileSync('../content/first.txt', 'utf8');
const second = readFileSync('../content/second.txt', 'utf8');

//To create a new file on the system.
// If the file is not there node will create a new file. If it is already there node will overwrite all values in the file 
//If we want to append to the file add {flag: 'a'}

writeFileSync(
    '../content/result.-sync.txt', 
    `Here is the result: ${first}, ${second}`,
    {flag: 'a'}
)

console.log('done with this task');
console.log('starting the next one');

/*The big difference between asynchronous and synchronous is that synchronous tasks
require that all request are completed before starting to another one. In asynchronous
mode, two tasks can be executed at the same time.*/ 




