const Users=require('../Models/userschema')
const jwt = require('jsonwebtoken');


exports.register=async(req,res)=>{
    console.log('inside register');

    const {email,password,username}=req.body

    try {

        const existingUser=await Users.findOne({email})
        if (existingUser) {
            res.status(406).json("user already exists ...please login!!!")
        } else {
            const newuser=new Users({
                email,password,username
            })
            await newuser.save()
            res.status(200).json(newuser)
        }
        
    } catch (error) {
        res.status(401).json('api failed')
    }
}

exports.Login=async(req,res)=>{
    console.log('inside login')

    const {email,password}=req.body

    try {
        const exisitingUser = await Users.findOne({email,password})
        if(exisitingUser){
            const token= jwt.sign({userId:exisitingUser._id},"secret123")
            res.status(200).json({
                exisitingUser,token
            });
        }else{
            res.status(404).json("incorrect email/password")
        }

    } catch (error) {
        console.error('Error during login:', error);

        res.status(401).json('login api failed')
    }
}