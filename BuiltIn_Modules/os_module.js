/*OS MODULE*/
const os = require('os');

var totalMemory =  os.totalmem();
var freeMemory =  os.freemem();

//With concatenation
//console.log('Total Memory' + totalMemory);

//Template string.
//ECMA6 string.
//Allow to avoid concatenation of strings.

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);