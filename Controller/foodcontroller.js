const foods=require('../Models/foodschema')


exports.viewfood=async(req,res)=>{
    console.log("inside food view");
    try {
        const food=await foods.find()
        res.json(food)      
    
        
    } catch (error) {
        res.status(401).json('api failed')
    }
}

exports.singleFood=async(req,res)=>{
    console.log("inside single food view");
    try {
        const food=await foods.findById(req.params.id)
        res.json(food)
        
        
    } catch (error) {
        res.status(401).json(error)
    }
    }
