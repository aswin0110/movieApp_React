const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://aswinkannur1:Aswinkannur01@cluster0.amfjccq.mongodb.net/Movie_App_React?retryWrites=true&w=majority")
.then(()=>{
    console.log('MONGODB CONNECTED');
})
.catch(err=>console.log(err))

const Schema = mongoose.Schema

const MovieModel = new Schema({
    mname:String,
    actor:String,
    actress:String,
    director:String,
    year:Number,
    cameraman:String,
    producer:String,
    language:String
})

var movmodel = mongoose.model("MovieDB_React",MovieModel )

module.exports = movmodel