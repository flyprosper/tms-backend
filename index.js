const express = require("express");
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cors = require("cors");
const Students = require("./StudentModel.js");
const app = express();
const port = 8080 || process.env.PORT;

app.use(express.json());            //body parser
app.use(cors());                    //cross origin resources
dotenv.config();                    //environment variables

const connectionURL = process.env.MONGO_URL;
mongoose.connect(connectionURL,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
},() => {
  console.log("Connected to the database!")
});

app.get("/",(req,res)=>{
  res.send("The Rest Api is working!");
})

app.get("/view",(req,res)=>{
  Students.find((err,data)=>{
    if(err){
      res.send(err);
    } else {
      res.send(data);
    }
  })
})

app.post("/create",(req,res)=>{
  const sampleStudent = req.body;
  Students.create(sampleStudent, (err,data) => {
    if(err){
      res.send(err);
    } else {
      res.send(data);
    }
  })
})

app.post("/name",(req,res)=>{
  res.send("Hello "+req.body.name);
})

app.listen(port, () => {
  console.log("App listening on http://localhost:8080")
})
