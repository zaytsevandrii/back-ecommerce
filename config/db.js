import mongoose from "mongoose";
mongoose.set('strictQuery', true)
const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect('mongodb+srv://andrii:04071990@cluster0.bpsvecv.mongodb.net/users?retryWrites=true&w=majority',{
            useUnifiedTopology: true,
            useNewUrlParser: true,
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`)
    }catch(error){
        console.error(`Error:${error.message}`)
        process.exit(1)

    }
}



export default connectDB