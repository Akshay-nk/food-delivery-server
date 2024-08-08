require('dotenv').config();
const express =require('express')
const cors=require('cors')
require('./DB/connection')
const router=require('./Router/router')

//creating express server

const foodapp=express()

//use cors,json
foodapp.use(cors())
foodapp.use(express.json())
foodapp.use(router)

const PORT=4000 || process.env.PORT

foodapp.listen(PORT,()=>{
    console.log(`Foo Delivery Application running on the port ${PORT}`);
})

foodapp.get('/' ,(req,res)=>{
    res.send('<h3>Food delivery Application</h3>')
})