//Using let because we're going to make some modifications to the variable
let {people} = require('../data.js')

const getPeople = (req, res)=>{
    res.status(200).json({success:true, data:people})
}

const createPerson = (req, res)=>{
    const { name } = req.body;
    if(!name){
        return res
            .status(400)
            .json({success:false, msg:'Please provide credentials'})
    }
    res.status(201).send({success:true, person: name})}

const createPersonPostman = (req, res) =>{

    const { name } = req.body

    if(!name){
        return res
            .status(400)
            .json({success:false, msg:"Please Provides credentials"})
    }
    res.status(200).send({success:true, data:[...people, name]})
}

const updatePerson = (req, res)=>{
    const {id} = req.params
    const {name} = req.body
    
    //iterates through the people array. Then find the person whose match the array
    const person = people.find((person)=> person.id === Number(id))

    //If person does not exist send 404 status
    if(!person){
        return res
        .status(404)
        .json({success:false, msg:`No person with id ${id}`})
    }

    //if the person does exists, change its name for the name parameters coming from the body request
    const newPeople = people.map((person)=>{
        if(person.id === Number(id)){
            person.name = name
        }
        return person
    })
    res.status(200).json({success:true, data:newPeople})
}

const deletePerson = (req, res)=>{

    //We are directly accessing the params objects. 
    const person  = people.find((person) => person.id === Number(req.params.id))

    if(!person){
        return res
        .status(400)
        .json({success:false, msg:`no person with id ${id}`})
    }

    //We are filtering the people array and keep all persons whose ID does not match the req.params.id 
    const newPeople = people.filter((person)=> person.id !== Number(req.params.id)) 
    
    return res.status(200).json({success:true,data:newPeople })
}

module.exports = {

    getPeople,
    createPerson,
    deletePerson,
    updatePerson,
    createPersonPostman
}