const express = require("express");
const app = express();
PORT = "8080"



app.get("/test", (req, res)=>{
    res.send("Hi")
})



app.listen(PORT, ()=>{
    console.log(`Server is runing on port ${PORT}`)
})