//Since it is a built in module, we can just type os
const os = require('os');

// info about current users
const user = os.userInfo();
console.log(user);

//method returns system uptime in seconds
console.log(`The System uptime is ${os.uptime()} seconds`);

//Returns currentOS

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMemory:os.totalmem(),
    freeMemory:os.freemem(),
}

console.log(currentOS);

