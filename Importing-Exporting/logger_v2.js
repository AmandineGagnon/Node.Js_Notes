/*This version is an update of logger.js It will show us a better way to
handling events with classes.  */

const EventEmitter = require('events');
var url = 'http://mylogger.io/log';


//This logger class will have all the capabilities that EventEmitter has. 
class Logger extends EventEmitter {

    //log become a method of the class Logger
    log(message){
        console.log(message);
    
        //Raise event when log is called
        this.emit('messageLogged', {id: 1, url: 'http://'});
    }
}

//Instead of exporting the function, we are exporting the class
module.exports = Logger;

//To export the URL
module.exports.url = url;

//We can change the name of the export objects
//module.export.endPoint = url;