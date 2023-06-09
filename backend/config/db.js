const mongoose=require("mongoose")

const db = async()=>{
    try {
        const connection = await mongoose.connect("mongodb://0.0.0.0:27017/ShopKart",{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log(`mongodb connected succesfully:${connection.connection.host}`);
    } catch (error) {
        console.log("mongodb connection failed = ",error);
    }
   
}

module.exports = db