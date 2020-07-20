var express =require('express');
const questionDAO = require("../DAOs/question");
const resultDAO=require("../DAOs/result");
const router = express.Router();
var HttpStatus=require('http-status-codes');
module.exports=router;   //分开用router一定要 export


/***retrieve all questions ****/
router.get('/', async (req,res)=>{
    // const todos=["ABC","DEF"];
    const questions= await questionDAO.findAll();
    // console.log("questions",questions);
    //json 发送Array 或者Object
    console.log("questions",questions);
    if(questions.length!==0) {
        await res.json(questions);
    }
});

/***** Update question result *************************/
router.put('/:description',async(req,res)=>{
    const{description,index}=req.body;
    console.log("res",description);
    console.log("index",index);
    //check if this question has already registered
    const exist=await resultDAO.existOne(description);
    console.log(exist);
    if(!exist){
        await resultDAO.insertOne(description);
    }
    let add=false;
    if(index==0){
        console.log("index",index);
        add= await resultDAO.increaseFirst(description);
        console.log(add);
    }
    else if(index==1){
        console.log("index",index);
         add= await resultDAO.increaseSec(description);
        console.log(add);
    }
    else if(index==2){
        console.log("index",index);
         add= await resultDAO.increaseThrid(description);
        console.log(add);
    }
    if(add){
        res.status(HttpStatus.OK).send();
    }
    else{
        res.status(HttpStatus.BAD_REQUEST).send();
    }
});
