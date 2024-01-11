const express = require('express') 
const app = express()

app.set("view engine", "ejs")

app.get("/",(req,res)=>{
    const person = {
      name : "Manish Basnet", 
      age : 21, 
      address : "Itahari"
    }
    const name = "Manish Basnet"
    res.render("home",{haha : name,person : person})
})

app.get("/about",(req,res)=>{
    res.render("about")
})

app.get("/contact",(req,res)=>{
    res.render("contact")
})

app.listen(3000,()=>{
    console.log("NodeJs Project Has started at port 3000")
  })