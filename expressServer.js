import express from "express";

const data=[
    {id:1, name:"ketan"},
    {id:2, name:"garvit"},
    {id:3, name:"arun"},
    {id:4, name:"lalit"}
]



const app =express();
const port=4000;

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("This is my first Server")
})
app.post("/",(req,res)=>{
    res.send(data)
})
app.post("/name/add",(req,res)=>{
    const username=  req.body
    data.push(username)
    res.send(data)
})
app.put("/name/update/:id",(req,res)=>{
           let {id }=req.params
         const value=  data.map((obj)=>{
         return  obj.id==id?[{...obj,...req.body}]:obj
           })
             res.send(value)
        
})
app.delete("/name/delete/:id",(req,res)=>{
       const {id}=req.params
       console.log(req.params)
       data.filter((obj,index)=>{obj.id==id?data.splice(index,1):obj})
       res.send(data)
})

app.listen(port,()=>{   
    console.log("Server Started at port" + port)
})