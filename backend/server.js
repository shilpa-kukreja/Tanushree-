import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import adminRoute from './routes/adminRoutes.js'
import contactRouter from './routes/contactRoutes.js'


dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

connectDB()

app.use("/api/admin", adminRoute);
app.use("/api/contact", contactRouter);




const PORT=process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('Server is ready')
})

app.listen(PORT, () => {
    console.log('Server is running on port', PORT)
})