//Started operating system process

console.log('first')

//SetTimeout function is asynchronous, so it will be executed after the 'third'
//instruction according to the functionning of the event loop. 
setTimeout(()=>{
    console.log('second')
}, 0)

console.log('third')
// completed and exited operating system process

//The order of execution will be first, third, second. 
