//Importing the FileSystem Built in module

const fs = require('fs');

//A best practice is always to use asynchronous method.

//This will return all files in the specified directory

//CALL BACK FONCTION.
/*In asynchronous method, we have what we call an asynchronous function. This function
is executed each time the function is called. It will prompt an error or the result */

fs.readdir('./', function(err, files){
    if (err) console.log('Error', err);
    else console.log('Result', files);
});

console.log(files);

