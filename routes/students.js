const express = require("express");
const router=express.Router();

const students=require("./students.json");



router.get("/",(req,res) =>{
    res.send(students);
});

router.post("/",(req,res) =>{
    
    res.send({...req.body,id:11});
});

router.put("/:id",(req,res) =>{
    
    res.send({...req.body,...req.params});
});

router.delete("/:id",(req,res) =>{
    res.send({});
});

module.exports=router;