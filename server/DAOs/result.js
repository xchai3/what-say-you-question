let resultModel =require('../models/result');

class resultDAO{
    //check if this question has already exist
   static  async existOne(description){
       const res= await resultModel.findOne({description});
       if(res)
           return true;
       return false;
   }

   //insert a new record
    static async insertOne(description){
       const res=new resultModel({description});
        try {
            await res.save();
        } catch (err) {
            return false;
        }
        return true;
    }


    //increase the option count
    static async increaseFirst(description){
        const thisOne= await resultModel.findOne({description});
        const updateStr = { $inc: { op1: 1 } };
        const myquery = {description:thisOne.description};
        const change = await resultModel.findOneAndUpdate(myquery, updateStr);
        if(change){
            return true;
        }
        return false;
    }

    static async increaseSec(description){
        const thisOne= await resultModel.findOne({description});
        const updateStr = { $inc: { op2: 1 } };
        const myquery = {description:thisOne.description};
        const change = await resultModel.findOneAndUpdate(myquery, updateStr);
        if(change){
            return true;
        }
        return false;
    }

    static async increaseThrid(description){
        const thisOne= await resultModel.findOne({description});
        const updateStr = { $inc: { op3: 1 } };
        const myquery = {description:thisOne.description};
        const change = await resultModel.findOneAndUpdate(myquery, updateStr);
        if(change){
            return true;
        }
        return false;
    }

}
module.exports=resultDAO;
