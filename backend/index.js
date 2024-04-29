const express  = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const {TodoModel} = require('./model.js')


const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/todo')

// routes

// post route
app.post('/add',(req,res)=>{

    const task = req.body.task;
    TodoModel.create({
        task:task
    }).then(result => res.json(result))
    .catch(err=> res.json((err)))


})


// get route

app.get('/todos',(req,res)=>{
    TodoModel.find()
    .then(result=>res.json(result))
    .catch(err=>res.json(err))
})


// put 

app.put('/update/:id',(req,res)=>{

    const {id} = req.params;
    TodoModel.findByIdAndUpdate({_id:id},{done:true})
    .then(result=>res.json(result))
    .catch(err=>res.json(err))


})


app.delete('/delete/:id',(req,res)=>{

    const {id} = req.params;
    TodoModel.findByIdAndDelete({_id:id})
    .then(result=>res.json(result))
    .catch(err=>res.json(err))


})



const port = 3030;


app.listen(port,()=>{
    console.log(`Server is running at ${port}`);
})