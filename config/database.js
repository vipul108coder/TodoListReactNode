const mongoose = require('mongoose');

function connectDatabase (){
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("database is successfully connected");
}).catch((err)=>{
    console.log(err);
})

}

module.exports = connectDatabase;