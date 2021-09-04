//This variable is local to the module logger.js (private)
var url = 'http://mylogger.io/log';

/*EventEmitter is a class and NOT an object*/
const EventEmitter = require('events');

/*We are creating a instance of EventEmitter class */
const emitter = new EventEmitter();

//This function is local to the module logger.js (private)
function log(message){
    console.log(message);

    //When we called the function log, we raise an Event. This will not works. See LoggerV2
    emitter.emit('messageLogged', {id: 1, url: 'http://'});
}

/*If we want to access this variable or function, we need to make it available
to the outside. We need to export it. We can export a function or an object */

//We can export a function to another module this way
module.exports = log;

//To export the URL
module.exports.url = url;

//We can change the name of the export objects
//module.export.endPoint = url;