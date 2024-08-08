const mongoose=require('mongoose')
const connection=process.env.DATABASE
mongoose.connect(connection).then(()=>{
    console.log("database connected successfully");
}).catch((err)=>{
    console.log("connection failed",err);
})