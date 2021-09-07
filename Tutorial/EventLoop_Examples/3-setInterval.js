setInterval(()=>{
    console.log('hello world');
}, 2000)

console.log('I will run first') //setInterval is a asynchronous function that will be executed after this one finishes.

//Process stays alive unless. We are note execting the process.
//setInterval works that every two seconds the eventLoop will call this callback function
//Kill process CONTROL + C
//unexpected error. 