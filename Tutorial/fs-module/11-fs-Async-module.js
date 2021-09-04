const {readFile, writeFile} = require('fs');

//Asynchronous involve a callback function
readFile('../content/first.txt','utf8', (err, result) => {

    if(err){
        console.log(err);
        return;
    }
    
    /*If there is no error we want to put the result of our first text in a variable, and then
    read the second file, and then write the new file. */
    const first = result;

    readFile('../content/second.txt', 'utf8', (err, result)=>{

        if(err){
            console.log(err)
            return;
        }

        const second = result;
        
        writeFile(
            '../content/result-async.txt', //Path of the file we want to create
            
            `Hello is the result: ${first}, ${second}`, //What will be written in the file
            
            //Here, we add a callback function for the writeFile
            (err, result)=>{
                
                if(err){
                    console.log(err);
                    return;
                }
                console.log('Done with this task');
            }
            )
        });
    })

    console.log('Starting the next task')