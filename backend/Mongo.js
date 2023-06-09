const mongoose=require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/loginData")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema= mongoose.Schema({
    email:String,
    password:String,
    username:String,
    firstname:String,
    middlename:String,
    lastname:String
})

const   collection = mongoose.model("userCollection",newSchema)

module.exports=collection