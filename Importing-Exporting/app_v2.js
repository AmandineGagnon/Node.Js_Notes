/*An update of app.js, with better handling event and class*/

/*We are now importing a class thats extends EventEmitter*/
const Logger = require('./logger_v2.js');

/*We are creating an instance of Logger*/
const logger = new Logger();

//Register a Listener
logger.on('messageLogged', (arg)=>{
    console.log('Listener called', arg);
});

logger.log('message');
