const getAllTasks = (req, res)=>{
    res.send('get all items from the files')
}

const getTask = (req, res)=>{
    res.send('get one Task')
}

const createTask = (req, res)=>{
    res.send('create a task')
}

const updateTask = (req, res)=>{
    res.send('update task')
}

const deleteTask = (req, res)=>{
    res.send('delete Task')
}



module.exports = {
    getAllTasks, createTask, getTask, updateTask, deleteTask
}