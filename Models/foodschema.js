const mongoose=require('mongoose')
const foodschema=new mongoose.Schema({

    id:{type:Number, required: true, unique: true},
    name:{type:String, required: true},
    description:{type:String,required:true},
    ingredients:{type:String,required:true},
    price:{type:Number,required:true},
    nutritional_info:{
        calories:{type:Number,required:true},
        protein:{type:Number,required:true},
        carbs:{type:Number,required:true},
       fats:{type:Number,required:true},
    },
    availability:{type:Boolean},
    image_url:{type:String,required:true}


})

const foods=mongoose.model('foods',foodschema)
module.exports=foods