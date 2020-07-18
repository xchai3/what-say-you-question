var express =require('express');
const questionDAO = require("../DAOs/question");
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
