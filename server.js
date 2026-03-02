const express= require('express');
const cors= require('cors');

const app = express();

const PORT = 3000;

app.use(cors());

app.get("/",(req,res)=>{
    res.send("The server is working!");
})

app.get("/about",(req,res)=>{
    res.send("This route is for about");
})

app.listen(PORT,()=>{
    console.log(`The server is running in: ${PORT}`);
})
