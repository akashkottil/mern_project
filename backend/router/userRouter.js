const express = require("express")
const router = express.Router()


const UserCredential = require("../model/userModal");
const collection = require("../Mongo");



router.get("/about",function (req,res){
   
    res.send("about")
})  
router.post("/register",async function (req,res){
    console.log(req.body);
    const {email, password}= req.body
    console.log("hai");
    // let n = req.body.name
    // let p = req.body.password
    // console.log(",un,m,p",n,p);

    // let dataUser =await  UserCredential.findOne({name:n})
    // console.log("jhft==",dataUser);
    // if(dataUser){
    //    if(dataUser.password==p){
    //     res.send(true)
    //    }
    //    else{
    //     res.send(false)
    //    }
    // }
    // else{
    //     console.log("no");
    //     res.send(false)
    // }

    const newUser = new collection({
        email,
        password
    })
    console.log("=======",newUser);
    newUser.save()
    res.send(true)
    
})  
router.get("/getUser",async function (req,res){
    // console.log(req);

    const user = await UserCredential.find()
    res.json(user)
}) 

module.exports = router
