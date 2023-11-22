const app = require("./app.js");
const dotenv = require('dotenv');

//config
dotenv.config({path:"./config/config.env"})

//connect database
const connectDatabase = require("./config/database.js");
connectDatabase();

app.listen(process.env.PORT, ()=>{
    console.log(`server is working on ${process.env.PORT}`);
})