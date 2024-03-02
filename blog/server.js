 



const express = require ("express");
const cors = require("cors");
const app = express();
const {MongoClient}=require('mongodb')

const connection="mongodb+srv://janaqtanani:janaq2003@cluster0.dnjmvqv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client=new MongoClient(connection)

const mydb= client.db('jana') 
var bodyParse= require('body-parser')
var urlencoded= bodyParse.urlencoded({extended:false}) 

const collection= mydb.collection('users') 

app.get("/form", function(req,res)
{
    res.json({ message: "Hello from server!" });
    res.sendFile(__dirname+"/src/login.js") 
    
})

app.post("/login",urlencoded, async(req,res)=>
{
      const finduser= await collection.findOne({'email':req.body.email})

      if (finduser) 
      {
          res.sendFile(__dirname+"/userInfo.js")
      n}
      else{
          res.sendFile(__dirname+"/register.js")
      } 
})

app.post("/register",urlencoded, async(req,res)=>{
    // {    const finduser= await collection.findOne({'userName':req.body.userName})
    // if (finduser) 
    // {
    //     res.sendFile(__dirname+"/userInfo.html")
    // }
    // else{
        const createuser= await collection.insertOne({'username': req.body.username,'email': req.body.email, 'passowrd': req.body.password  , 'confirmPassword': req.body.confirmPassword })
        res.end("usr added")
    }) 

app.use(cors());
app.use(express.json());


app.get('/',function(req,res)
{
    res.send("start server")
})



app.get("/message", (req, res) => {
    res.json({ message: "Hello from server!" });
  });
  
  
  
  
  var server=app.listen(9000,function(){
  
      var host= server.address().address
      var port=server.address().port
  })