const { Router } = require('express');
const { User }=require('../db')
const router = Router();

router.get("/",async(_req,res,next)=>{
    try {
        const user=await User.findAll()
        res.send(user)
    } catch (error) {
        next(error)
    }
});

router.put("/",async(req,res,next)=>{
    try {
        const useUpdate=await User.update({balance:req.body.balance},{where:{id:req.body.id}})
    } catch (error) {
        next(error)
    }
})
module.exports = router;