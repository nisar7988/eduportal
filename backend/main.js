const express = require('express')
//establish database connections
const db = require('./config/dbConnection')
const cors = require("cors");
const authRouter= require('./routers/authRoutes')
const studentrouter = require('./routers/studentroute');
const emailrouter = require('./routers/emailRoute')
const multer = require("multer");
const path = require("path");
const teacherRouter = require("./routers/teacherrouter");
const uploadRouter = require("./routers/uploadRouter")

const crypto = require("crypto");
const { Cashfree } = require("cashfree-pg");
const paymentRoute = require("./routers/paymentRoutes");
Port=5000
const app = express();
app.use(express.json())


app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/uploads", express.static(path.join(__dirname, "uploads")));



//routes
app.use('/auth',authRouter)
app.use('/student',studentrouter)
app.use('/teacher',teacherRouter);
app.use('/email',emailrouter);
app.use("/payment", paymentRoute);
app.use("/upload", uploadRouter);



app.listen(Port,()=>{
    console.log(`port listen on ${Port}`)
})

