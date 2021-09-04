/* EVENT MODULE*/

/*EventEmitter is a class and NOT an object*/
const EventEmitter = require('events');

/*We are creating a instance of EventEmitter class */
const emitter = new EventEmitter();

//Register a listener

/*The first args is the name of the event and the second is the callback function, which will be called
back function (the action that is performed when messageLogged happens)*/

/* The arg refer to the data that is passed when the event is produced*/
emitter.on('messageLogged', function(arg){
    console.log('Listener called', arg);
})

//emit Raise an event
//Making a noise, produce something - signaling that an event has happen
/*the first args is the name of the event that is raise. The second argument is an object
that allows passing data when this event is produced. */
emitter.emit('messageLogged', {id: 1, url: 'http://'});

