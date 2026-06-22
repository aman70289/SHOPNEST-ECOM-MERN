const express=require("express");
const cors=require("cors");
const dotenv=require("dotenv");
const userRoutes=require("./routes/authRoutes")
dotenv.config();
const connectDB=require("./config/db")

connectDB();
const app=express();
app.use(cors());

app.get("/",(req,res)=>{
    res.send("ShopNest Backend is working properly")
})

app.use('api/auth',require('./routes/authRoutes'));






const PORT=process.env.PORT||5000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
   
})