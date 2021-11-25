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
router.post("/",async(req,res,next)=>{
    const newUser=req.body
    try {
        const [user,created]=await User.findOrCreate({
            where:{email:newUser.email},
            defaults:{
                name:newUser.name,
                email:newUser.email,
                balance:newUser.balance
            }})
        console.log(created)
        res.send(user)
    } catch (error) {
        next(error)
    }
})
router.put("/",async(req,res,next)=>{
    try {
        const useUpdate=await User.update({balance:req.body.balance},{where:{id:req.body.id}})
        res.status(200).json(useUpdate)
    } catch (error) {
        next(error)
    }
})
module.exports = router;