const mongoose = require("mongoose");
const dev = require("./config");

dbUrl = dev.db.db_url ;

mongoose.connect(dbUrl)
.then(()=>{
    console.log("Mongo Atlas connected")
})
.catch((err)=>{
    console.log("Database Connection Failed");
    console.log(err)
})

