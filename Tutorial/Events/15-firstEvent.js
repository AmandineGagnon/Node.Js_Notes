//We are creating a class
const EventEmitter = require('events')

//Instance of our our class EventEmitter. 
const customEmitter = new EventEmitter();

//Listening to a specific event to occur
//The first args is the name of the event
customEmitter.on('response', ()=>{
    //This call back function is called when the response event is triggered
    console.log(`data received`)
})

//We can have many others function linked to the same event. 
customEmitter.on('response', (name, age)=>{
    //This call back function is called when the response event is triggered
    console.log(`Some other logic here. Nom: ${name} and age: ${age}`)
})

//Here we are emitting the response event.
// IMPORTANT: The order matters. We can not emit an event after listening to it. 
customEmitter.emit('response', 'john', 34)