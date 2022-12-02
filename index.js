const express = require ("express");
const app = express();

app.get('/',(req,res)=>{
    res.send('hello from  home server')
});

app.get('/',(req,res)=>{
    res.send('hello from about server')
});

app.listen(8080,()=>{
    console.log("server is running at port 8080...");
})