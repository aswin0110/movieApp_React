const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())


const MovieModel = require('./model/MovieModel')


// api creation

app.post('/api/movie', async (req,res)=>{
    

    try {
        var data = new MovieModel(req.body)
        await data.save()
        res.json({status:"1"})
        
    } catch (error) {
        res.json({status:error.message})
        
    }
})


app.get('/api/movie', async (req,res)=>{
    try {

        let data = await MovieModel.find()
        res.json(data)
        
    } catch (error) {
        res.json({status:error.message})

        
    }
})


app.delete('/api/movie/:id', async (req,res)=>{

    try {
        
        console.log(req.params);
        let id = req.params.id
        await MovieModel.findByIdAndDelete({_id:id})
        res.json({status:"1"})


    } catch (error) {
        console.log(error.message);
        res.json({status:"2"})

    }

})


app.put('/api/movie/:id', async (req,res)=>{

    try {
        let id = req.params.id;
        let data = await MovieModel.findByIdAndUpdate({_id:id}, req.body)
        data.save()
        res.json({status:'1'})
    } catch (error) {
        console.log(error.message);
        
    }
})






app.listen(3002,()=>{
    console.log('SERVER STARTED at 3002');
})