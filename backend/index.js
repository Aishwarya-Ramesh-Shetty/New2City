const express = require('express')
const app = express();
const dotenv = require('dotenv')
dotenv.config();
const connectDB = require('./config/db')
connectDB();

const userRoute = require('./routes/userRoute')

app.use(express.json());


app.use('/api/users',userRoute);

app.listen(process.env.PORT,()=>{
    console.log(`Server running on port ${process.env.PORT}`);
})