const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require('./database.js');
dotenv.config({path:'./config.env'});
connectDatabase();

const PORT = process.env.PORT || 4101;
app.listen((PORT),()=>{
console.log(`server  running on https://localhost:${PORT}`);
});
