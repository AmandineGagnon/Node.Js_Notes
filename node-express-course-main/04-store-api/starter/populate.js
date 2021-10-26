//To add dynamically products in our database with a JSON file. 

require('dotenv').config()

// We need to add another connection to DB
const connectDB = require('./db/connect')

const Product = require('./models/product')

const jsonProducts = require('./products.json')

const start = async ()=>{

    try {
        await connectDB(process.env.MONGO_URI)
        console.log("Sucess!")

        await Product.deleteMany(); //delete all products that are already on the package
        await Product.create(jsonProducts)
        process.exit(0)

    } catch (error) {
        console.log(error)
        process.exit(1)
    }

}

start()