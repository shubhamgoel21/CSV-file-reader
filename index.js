const express=require("express");
const port=8000;
const path=require("path");
var expressLayouts = require('express-ejs-layouts');

const app=express();

app.use(expressLayouts);
app.set("layout extractScripts", true)
app.set("layout extractStyles", true)

app.use(express.static('assets'))

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/',require("./routes"));


app.listen(port,function(err)
{
           if(err)
           {
                      console.log("error in firing up the server");
                      return;
           }
           console.log("server is up and running @",port);
})