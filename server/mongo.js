const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/schoolDB")
.then(() => {
    console.log('mongodb connected')
})
.catch((e)=>{
    console.log('connection failed')
    console.log(e)
})


const newSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = mongoose.model('collection',newSchema)

module.exports = collection