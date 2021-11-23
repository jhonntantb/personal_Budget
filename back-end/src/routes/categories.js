const { EROFS } = require('constants');
const { Router } = require('express');
const { Category }=require('../db')
const router = Router();
router.get("/",async(_req,res,next)=>{
    try {
        const activities=await Category.findAll()
        res.send(activities)
    } catch (error) {
        next(error)
    }
});
router.post("/",async(req,res,next)=>{
    const category=req.body
    try {
        const newCategory=await Category.create(category)
        res.send(newCategory)
    } catch (error) {
        next(error)
    }
})
router.delete("/:categoryId",async(req,res,next)=>{
    try {
        const category=await Category.destroy({where:{id:req.params.categoryId}})
        if (category) return res.send("category delete")
        return res.sendStatus(400)
    } catch (error) {
        next(error)
    }
})


module.exports = router;