import express from "express"; 
import cors from  "cors";
import router from "./routes/authRoute.js";

const app = express();

app.use(cors())
app.use(express.json())

app.use("/api/auth", router)
app.get("/", (req, res) =>{
    res.send("API running...")
})


app.listen(5000,()=>{
    console.log("Server is running on port 5000")
})