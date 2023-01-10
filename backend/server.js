const express = require("express");
const dotenv = require("dotenv");
//const cors = require("cors");
const connectDB = require("./config/db");
const app = express();


dotenv.config();
connectDB();
app.use(express.json());
//app.use("*", cors());


app.get('/',(req,res)=>{
    res.send("API is running..");
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server Started on port ${PORT}..`));
