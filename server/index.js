const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const app = express()
const PORT = config.get('serverPort')
const corsMiddleware = require("./middleware/cors.middleware")
const fileRouter = require("./routes/file.routes")
const authRouter = require("./routes/auth.routes")

app.use(corsMiddleware)
app.use(express.json())
app.use("/api/auth", authRouter)
app.use("/api/files", fileRouter)


const start =  async () =>{
    try{
        await mongoose.connect(config.get("dbUrl"))
        app.listen(PORT,()=>{
            console.log('Server started on port', PORT)
        })
    }catch (e){

    }
}
start()