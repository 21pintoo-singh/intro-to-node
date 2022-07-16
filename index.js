const express = require("express");
const bodyParser=require("body-parser");

const app=express();
app.listen(3000, function(){
      console.log("server runnig on 3000")
});
app.use(bodyParser.urlencoded({extended:true}))

app.get("/", function (req,res){
      res.sendFile(__dirname + "/index.html");
});

app.post("/",function(req,res){
      var n1=Number(req.body.n1)
      var n2=Number(req.body.n2)
      var ans = n1+n2;
      res.send( "the ans is:" + ans); 
});


app.get("/about", function (req,res){
      res.send("<h1>Hi my name is Pintoo Singh");
      Console.log(req.body);
});