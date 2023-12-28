import express from "express"
import dotenv from "dotenv"
dotenv.config()
import connectDB from "./config/connectDB.js";

const app = express();

const PORT = process.env.PORT

app.get("/", (req, res) => {
  res.send("API is running")
})

const startServer = async () => {
  try {
    await connectDB()
    app.listen(PORT, () => console.log(`App listening to ${PORT}`))
  } catch (error) {
    console.log(error)
  }
}

startServer()