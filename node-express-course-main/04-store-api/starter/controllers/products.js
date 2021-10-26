const Product = require('../models/product')

const getAllProductsStatic = async (req, res) =>{
    
    const search = 'ab'
    const products = await Product.find({
        name:{$regex:search, $options:'i'}, //$option:'i'. means case insensitive. 
    })
    
    
   
    res.status(200).json({products, nbHits: products.length})
}

const getAllProducts = async (req, res) =>{

    //Only looking for the featured in the query. If other params in the query is set, it will ignore them.
    const {featured, company, name} = req.query
    const queryObject = {} 

    if(featured){
        queryObject.featured = featured === 'true'? true : false
    }

    //if the company propriety exists, then add it to the queryObject. 
    if(company){
        queryObject.company = company
    }

    if(name){
        queryObject.name = {$regex:name, $options:'i'}
    }

    const products = await Product.find(queryObject)
    res.status(200).json({products, nbHits: products.length})
}

module.exports = {
    getAllProductsStatic,
    getAllProducts,
}