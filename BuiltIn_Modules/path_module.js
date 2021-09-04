/*PATH MODULE*/

/*If nothing is found amongst the built-in modules, node will assume 
that it will be a file in the application */

//Importing the module in an object
const path = require('path');

var pathObj = path.parse(__filename);

console.log(pathObj);
