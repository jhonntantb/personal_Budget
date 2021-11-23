const { Router } = require('express');
const { Category}=require('../db')
const router = Router();
router.get("/",async(_req,res,next)=>{
    try {
        const activities=await Category.findAll()
        res.send(activities)
    } catch (error) {
        next(error)
    }
});


module.exports = router;