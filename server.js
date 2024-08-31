const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv');
const userRoute = require("./routes/userRoute");
const connectDb = require('./config/connectDb'); 
//config dot env file
dotenv.config();

//database call
connectDb();

const app = express()

//middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

//user routes
app.use("/api/users", userRoute);

//port
const PORT = 8080 || process.env.PORT;

//listen server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});