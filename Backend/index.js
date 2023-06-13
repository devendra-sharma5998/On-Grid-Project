const express=require('express')
const ConnectDB=require('./Database/Db')
const bodyParser=require('body-parser')
const app=express()
const router=require('./Routes/Router')
const cors=require('cors')

app.use(bodyParser.json())


app.use(cors({origin :"*"}))
app.use(router)

app.get("/",(req,res)=>{
    res.send('Hello World')
})
app.listen(8001,()=>{
    console.log("Its working")
    ConnectDB()
})