const express=require("express");
const port=8000;

const app=express();

app.get('/',function(req,res)
{
           return res.send("project is up and working");
})

app.listen(port,function(err)
{
           if(err)
           {
                      console.log("error in firing up the server");
                      return;
           }
           console.log("server is up and running @",port);
})