const express = require("express");
const app = express();
const mongoose = require("mongoose");
const TableData = require("./model");
const cors = require("cors");
require('dotenv').config();

mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true,useUnifiedTopology:true});

mongoose.connection.on('connected',() => {
    console.log("DATABASE CONNECTED");
});

mongoose.connection.on('error',() => {
    console.log('E R R O R');
});
app.use(cors());
app.use(express.json());

app.get('/',function(req,res){
    res.send(" H E L L O");
});


app.get('/:dept',function(req,res){
    if(req.params.dept === 'all'){
        TableData.find({},(err,allTableItem) => {
            if(err) console.log(err);
            else{
                res.json(allTableItem);
            }
        });

    }else{
        TableData.find({department:req.params.dept},function(err,AllData){
            if(err){
                console.log(err);
            }else{
                res.json(AllData);
            }
        })
    }

})


app.listen(8000,() =>{
    console.log("Server running");
});
