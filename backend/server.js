const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser");
const db = require("./config/db")

const app = express()
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));
app.use(cors())

const userRouter = require('./router/userRouter')
const adminRouter = require('./router/adminRouter')
const port=3000
app.listen(port,all)

function all(){
    console.log("server started in port",port);
}

db(()=>{
    try {
        console.log("database connected successfully");
    } catch (error) {
        console.log("db not connected = ", error);
    }
})


app.use('/',userRouter)
// app.use('/admin',adminRouter)