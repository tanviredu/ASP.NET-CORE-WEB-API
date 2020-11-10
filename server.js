const express  = require("express");
const mongoose = require("mongoose");
const app      = express();
const config   = require("./config/config");
const api      = require("./api/api");
const PORT     = process.env.PORT || 3000
const mongourl = config.mongourl;
const connect  = mongoose.connect(mongourl);
const appMw    = require("./middleware/AppMiddleware");

appMw(app);
app.use("/api",api);

app.use((err,req,res,next)=>{
    res.json({err:"Some Error Occured"})
})


app.listen(PORT,()=>{
    console.log(`SERVER RUNNING ON PORT ${PORT}`);
})