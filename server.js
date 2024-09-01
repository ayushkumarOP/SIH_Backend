const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv');
const userRoute = require("./routes/userRoute");
const invoiceRoute = require("./routes/InvoiceRoute");
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

app.get("/",(req,res) =>{
    res.json("Hello");
})

//user routes
app.use("/api/users", userRoute);
app.use("/api/invoice", invoiceRoute);

//port
const PORT = 8080 || process.env.PORT;

//listen server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
