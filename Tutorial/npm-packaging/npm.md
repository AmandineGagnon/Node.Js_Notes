# NPM

npm - global command, comes with node

To check for npm version
```
npm --version
```

To install a package locally - use it only in this particular project
```
npm i <package name>
```

To install a package globally  - use it in any project

```
npm install -g <packageName>

On MAC
sudo install -g <packageName>

```

# package.json

package.json - manifest file (stores important info avout project/package)

## To initiate package.json in our project. 

### manual approach 

We can do it manually by creating package.json in the root, and  create all properties, etc.

###  init approach 
```
# step by step, press enter to skip
npm init

# everything default - change the value if needed
npm init -y 

```

## devDependencies

### To install devDependencies 

We wil prefer install nodemon globally to have access to it to all of our projects.
```
npm install -g nodemon -D 
``` 

Once the dev dependencies is istalled, in the script section of package.json, we can add dev command a specify a file path. This will automatically run the application everytime we save. 


## To uninstall a package: 

npm uninstall bootstrap


# Ressources
A great articles on packages.json https://nodesource.com/blog/the-basics-of-package-json-in-node-js-and-npm/#:~:text=The%20package.,understanding%20and%20working%20with%20Node.&text=json%20is%20used%20as%20what,streamlined%2C%20modular%2C%20and%20efficient.
