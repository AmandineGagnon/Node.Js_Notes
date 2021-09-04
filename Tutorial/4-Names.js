//local
const secret = 'SUPER SECRET';

// share with the rest of our application
const john = 'John';
const peter = 'Peter';

// Here, we can see that the module contains exports, which is an object. Everything that we dump in exports
// could be accessible elswehre in the program. We only want to share the minimum. 


//I put it in an object as I have multiple objects to export
module.exports = {john, peter};

