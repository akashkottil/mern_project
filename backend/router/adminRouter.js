const express = require('express');
const router = express.Router();
const AdminCredential = require("../Mongo");

router.post("/adlogin", async (req, res) => {
    console.log(req.body);
    const{email,password,officeid}= await req.body
    console.log("k");
    // console.log(user);
    
        

})

router.post("/check", async (req, res) => {
    console.log(req.body);
    let email = req.body.email
    let pass = req.body.pass
    let officeid =req.body.officeid

    // let {email,password}=req.body
    let admin = await AdminCredential.findOne({email:email})
    console.log(user);
    // console.log("db pass=",admin.password);
    console.log("post pass=",pass);
    if(admin){
       if(pass==admin.password){
            res.send(true)
        }
        else{
            res.send(false)
        }       
    }
    else{
        res.send(false)
        
    }
    if(admin){
        if(officeid==admin.officeid){
             res.send(true)
         }
         else{
             res.send(false)
         }       
     }
     else{
         res.send(false)
         
     }
    
})




module.exports = router;