const express= require("express");


const server= express();
server.listen(3100,()=>{

    console.log("helloooo");
})

server.get("/",(req, res)=>{

    res.end("hello from expresss");
}

)