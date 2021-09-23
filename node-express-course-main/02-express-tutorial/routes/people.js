const express = require('express');

const router = express.Router();

//Using let because we're going to make some modifications to the variable
let {people} = require('../data.js')

//Importing all functionnalilty from the controllers
const { 
    getPeople,
    createPerson,
    deletePerson,
    updatePerson,
    createPersonPostman} = require('../controllers/people')

//Parse Data
router.get('/', getPeople)

//PUT METHODS
router.put('/:id',updatePerson)

//DELETE METHODS
router.delete('/:id',deletePerson) 

router.post('/', createPerson)


router.post('/postman', createPersonPostman )

//exporting the router
module.exports = router

