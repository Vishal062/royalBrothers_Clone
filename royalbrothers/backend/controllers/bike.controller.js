const express = require("express");
const router = express.Router()
const Bike = require("../model/bike.model");


router.get("",async(req,res)=>{
    const data = await Bike.find({});
    return res.send(data)
})

router.post("",async(req,res)=>{
    const data = await Bike.create(req.body);
    return res.send(data)
})


router.get("/:id",async(req,res)=>{
    const data = await Bike.findById(req.params.id)
    res.send(data)
})

router.patch("/:id",async(req,res)=>{
    const data = await Bike.findByIdAndUpdate(req.params.id,req.body);
    res.send(data)
})


router.delete("/:id",async(req,res)=>{
    const data = await Bike.findByIdAndDelete(req.params.id);
    res.send(data)
})


module.exports = router