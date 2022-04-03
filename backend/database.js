const mongoose = require('mongoose');
connectDatabase = ()=>{
    mongoose.connect(process.env.DATABASE_URL).then((res)=>{
        console.log('connected to dataBase');
    })
}
module.exports = connectDatabase;