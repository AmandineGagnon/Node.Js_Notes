# Module Wrapper function

The point here is that node.js is not executing our code directly. In a module our code is embedded in a function called a wrapper function. 

```
(function(exports, require, module, __filename, __dirname)){

    //Our code

})
```