const Task = require('../models/Task')
const asyncWrapper = require('../middleware/async')
const {createCustomError} = require('../errors/custom-error')

/*GET ALL TASK*/

const getAllTasks = asyncWrapper(async (req, res)=>{

        const tasks = await Task.find({})
        //res.status(200).json({tasks})
        //res.status(200).json({tasks, amount:tasks.length})
        res.status(200).json({success:true, data:{tasks, nbHits:tasks.length}})
})

/*GET TASK*/
const getTask = asyncWrapper(async (req, res, next)=>{
    
        const {id:taskID} = req.params
        const task = await Task.findOne({_id:taskID})

        if(!task){
            return next(createCustomError(`No task with the id ${taskID}`, 404))
        }

        res.status(200).json({task})
})


/*CREATE TASK*/
const createTask = asyncWrapper(async (req, res)=>{
    
        const task = await Task.create(req.body)
        res.status(201).json({task})
})

/*DELETE TASK*/
const deleteTask = asyncWrapper(async (req, res)=>{
    
        const {id:taskID} = req.params
        const task = await Task.findOneAndDelete({_id:taskID})
        
        if(!task){
            return next(createCustomError(`No task with the id ${taskID}`))   
        }
        
        //res.status(200).json({task})
        res.status(200).send()
   
})

/*UPDATE TASK*/
const updateTask = asyncWrapper(async (req, res)=>{
    
        const {id:taskID} = req.params
        
        const task = await Task.findOneAndUpdate({_id:taskID}, req.body, {
            new:true, //return the new values to the res.body
            runValidators: true, //do the check validator when modify datas
        })

        if(!task){
            return next(createCustomError(`No task with the id ${taskID}`))
        }

        res.status(200).json({task})
})

/*PUT method - REPLACE AND REMOVED*/
const editTask = asyncWrapper(async (req, res)=>{

        const {id:taskID} = req.params
        
        const task = await Task.findOneAndUpdate({_id:taskID}, req.body, {
            new:true, //return the new values to the res.body
            runValidators: true, //do the check validator when modify datas
            overwrite:true
        })

        if(!task){
            return next(createCustomError(`No task with the id ${taskID}`))
        }

        res.status(200).json({task})
})




module.exports = {
    getAllTasks, 
    createTask, 
    getTask, 
    updateTask, 
    deleteTask,
    editTask
}