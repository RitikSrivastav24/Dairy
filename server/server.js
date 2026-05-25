import express from "express"; 
import cors from  "cors";
import router from "./routes/authRoute.js";
import cookieParser from "cookie-parser";
import dotenv from 'dotenv'
import notesRouter from "./routes/entryRoutes.js";
import getNotesRouter from "./routes/notesRoute.js";
const app = express();

dotenv.config()
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.use(express.json())
app.use(cookieParser())


app.use("/api/auth", router)
app.use("/api/notes", notesRouter)
app.use("/api/notes", getNotesRouter)
app.get("/", (req, res) =>{
    res.send("API running...")
})


app.listen(5000,()=>{
    console.log("Server is running on port 5000")
})