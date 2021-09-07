/*This example is to show the function of the eventLoop in NodeJS. When we are running
the code, we can note that the first task is executed followed by the next task, then just after
the first task is completed. This is what the eventLoop in node.JS do. As we have use the function readFile
in the asynchronous mode, the eventLoop will execute the instruction in the call back function only
after all other regular function have been executed. It will offload the callBack function. This will prevent that the others requests
are standing by while a long lasting instructions is being performed */

const {readFile} = require('fs')

console.log('started a first task')

//CHECK FILE PATH
readFile('../content/first.txt', 'utf8', (err, result) => {

    if(err){
        console.log(err)
        return 
    }

    console.log(result)
    console.log('You have completed the first task')
}) 

console.log('starting next task');

