import express  from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import { notFound,errorHandler } from './middleware/errorMiddleware.js'

const app = express()
dotenv.config() 

connectDB()

app.use(cors())
app.get('/',(req,res)=>{
    res.send('API is running...')
})


app.use('/api/products',productRoutes)

app.use(notFound)

app.use(errorHandler)



const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))