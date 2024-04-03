const express = require("express");
const cors = require("cors");
const sendMail = require("./sendMail");
const app = express();
app.use(express.json());
app.use(cors());
app.get('/',(req,res)=>{
    res.send("server is working");
})
app.post('/email',sendMail);

const start = async() =>{
    try{
        app.listen(8000,()=>{
            console.log("i am working");
        })
    }
    catch(error){
        res.send("error while listening in server");
    }
}
start();