//Modules
//CommonJS, every file is a module (by default)
//Modules - Encapsulated Code (only share minimum)

//We are importing variables from the ./4-Names modules. 
const names = require('./4-Names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');


sayHi(names.john);
sayHi(names.peter);
sayHi('Susan');

/* The addValue() from the module function will be executed even if nothing is exported. When we are requiring a module
we are actually invoking it. */
require('./7-mind-grenad');