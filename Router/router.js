const express=require('express')
const router=new express.Router()
const usercontroller=require('../Controller/usercontroller')
const jwtmiddleware=require('../Middleware/jwtmiddilware')
const foodcontroller=require('../Controller/foodcontroller')



//register

router.post('/user/register',usercontroller.register)

router.post('/user/login',usercontroller.Login)

router.get('/foodview',foodcontroller.viewfood)

router.get('/onefood/:id',foodcontroller.singleFood)

module.exports=router