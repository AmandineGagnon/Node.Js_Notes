// npm - global command, comes with node
// npm --version

// local dependency - use it only in this particular project
// npm i <package name>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo install -g <packageName> (mac)

// package.json - manifest file (stores important info avout project/package)
// manual approach (create package.json in the root, create properties, etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default - change the value if needed)

//To install devDependencies: npm i nodemon -D 
// We wil prefer install nodemon globally to have access to it to all of our projects. 

//In the script section of package.json, we can add dev command a specify a file path. This will
//automatically run the application everytime we save. 

//To uninstall a package: npm uninstall bootstrap

// A great articles on packages.json https://nodesource.com/blog/the-basics-of-package-json-in-node-js-and-npm/#:~:text=The%20package.,understanding%20and%20working%20with%20Node.&text=json%20is%20used%20as%20what,streamlined%2C%20modular%2C%20and%20efficient.

//To have access to the loadash package and make use of it
const _=require('lodash')

const items = [1, [2, [3, [4]]]]

const newItems = _.flattenDeep(items);

console.log(newItems);

console.log('HelloPeople');

/*On Git we do not want to include all dependency in our github repo. This
will be very too much. Instead, we just have to run npm install in our repository
with the terminal. This will automatically import all dependency that are listed in our package.json file */
