const {readFile, writeFile} = require('fs').promises

// const util = require('util')

// const readFilePromise = util.promisify(readFile)
// const writeFilePrmise = util.promisify(writeFile)

/*This is an alternative to nested callback function. This is a way more cleaner and the
better approach to take, when we are working in asynchronous mode*/

const start = async()=>{
    //always put await function in a try catch
    try{
        //We are waiting for the promise to resolve. Then,
        const first = await readFile('./content/first.txt', 'utf8')
        const second = await readFile('./content/second.txt', 'utf8')
        await writeFile('./content/result-mind-grenade.txt', `THIS IS AWESOME!!!! ${first}, ${second}`) 
        console.log(first, second)
        
    }catch(error){
        console.log(error)
    }
}

start()

// const getText = (path) =>{
//     //We are returning a promise
//     return new Promise((resolve, reject)=>{
        
//         readFile(path, 'utf8', (err, data) => {
//             if(err){
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
                    
//         })
//     })

// }


// getText('./content/first.txt')
//     .then(result => console.log(result))
//     .catch(err => console.log(err))