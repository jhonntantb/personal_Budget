const { Router } = require('express');
const { Operation }=require('../db')
const router = Router();
router.get("/",async(_req,res,next)=>{
    try {
        const operations=await Operation.findAll()
        res.send(operations)
    } catch (error) {
        next(error)
    }
});
router.post("/",async(req,res,next)=>{
    const operation=req.body.operation;
    const category=req.body.category;
    try {
        const newOperation=await Operation.create(operation)
        res.send(newOperation)
    } catch (error) {
        next(error)
    }
})
router.put("/", async(req,res,next)=>{
    const id=req.body.id;
    const changes=req.body.changes
    try {
        const operationUpdate=await Operation.update(changes,{where:{id:id}})
        res.status(200)
    } catch (error) {
        next(error)
    }
})
router.delete("/:operationId",async(req,res,next)=>{
    const id=req.params.operationId
    try {
        const operation=await Operation.destroy({where:{id:id}})
        if (operation) return res.send("operation delete")
        return res.sendStatus(400)
    } catch (error) {
        next(error)
    }
})

module.exports = router;