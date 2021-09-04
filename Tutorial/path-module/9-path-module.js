const path = require('path')

//Returns a plateform specific separator
console.log(path.sep);

//Returns a normalize filePath
const filePath = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);

//Returns only the only part of the path
const base = path.basename(filePath)
console.log(base)

//Returns an absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);


