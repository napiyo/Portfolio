const messageSchema = require("../models/messageSchema");

exports.sendMessage = async(req,res,next)=>{
    console.log(`recived send msg api - ${req.body}`);
    if(!req.body.message || !req.body.sender){
        return next("message and sender are required")
    }
    const {message,sender} = req.body;
        const msg = await messageSchema.create({message,sender});
      
        res.status(201).json({
            sucess:true,
            msg,
        })

}