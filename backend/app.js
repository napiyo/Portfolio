const app = require('express')();
const express = require('express');
const messageRoutes = require('./routes/messageRoutes');
const path =require('path');
// const cors = require('cors');
// const corsOpts = {
//   origin: 'https://napiyo.github.io',

//   methods: [
//     'GET',
//     'POST',
//   ],

// };

// app.use(cors(corsOpts));
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "https://napiyo.github.io");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });
app.use(express.json())
app.use('/api/msg',messageRoutes);
app.use(express.static(path.join(__dirname,"../")));
app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../index.html"))
})

// app.get('/', (req, res) => {
//     res
//       .status(200)
//       .send('Hello server is running')
//       .end();
//   });
module.exports=app;