var MongoClient = require("mongodb").MongoClient;
var url="mongodb://localhost:27017/trainingDB";
var express=require("express");
var exp=express();


exp.get("/createUserData", (req ,res)=>{
    MongoClient.connect(url).then((db)=>{
        var DBlocation= db.db("trainingDB");
        var userObj={name:"talha",age:21}
        DBlocation.collection('users').insertOne(userObj).then((data)=>{
            console.log("inserted successfully",data);
            res.send("user created successfully")
        })

    })
})

exp.get("/getUserData",(req,res)=>{
    MongoClient.connect(url).then((db)=>{
        var DBlocation= db.db("trainingDB");
        DBlocation.collection("users").find({}).toArray().then((data)=>{
            console.log("the Data has been uploaded to the server")
            res.send(data)
            
        })
})
})

exp.listen(3000,()=> console.log("server is hosted on port 3000"))