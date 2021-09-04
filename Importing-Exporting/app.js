/*The require module in node.js allow us to import function/object from others
module. */

/*We are importing the function from the logger.js module*/
const logger=require('./logger.js');

/*We are calling the logger function of the module ./logger*/
logger('message');

