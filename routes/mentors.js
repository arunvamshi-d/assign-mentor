const express = require("express");
const router=express.Router();

const mentors= require("./mentors.json");



router.get("/mentors",(req,res) =>{
    res.end("Assign-Mentor");
});

router.get("/",(req,res) =>{
    res.send(mentors);
});

router.post("/",(req,res) =>{
    
    res.send({...req.body,id:8});
});

router.put("/:id",(req,res) =>{
    
    res.send({...req.body,...req.params});
});

router.delete("/:id",(req,res) =>{
    res.send({});
});

module.exports=router;