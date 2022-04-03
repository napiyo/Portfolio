const mongoose  =require('mongoose');
const messageSchema =  mongoose.Schema({
    message:{
        type:String,
        required:[true,"message cannot be empty"]
    },
    sentOn:{
        type:Date,
        default:Date.now
    },
    sender:{
        type:String,
        required:[true,"message sender name/ip cannot be empty"]
    }
})
module.exports=mongoose.model("messages",messageSchema);