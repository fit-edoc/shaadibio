const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()
const Authroutes = require("./routes/authRoutes.js")
const dbConnect = require("./config/Db.js")

const app = express()

app.use(cors())
app.use(express.json())

dbConnect()
app.use("/api",Authroutes)

app.get("/check", (req, res) => {
  res.json({ message: "hello", status: "API is running!" });
});

const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{

    console.log(`app is running on ${PORT}`)
})

