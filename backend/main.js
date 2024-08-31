const express = require('express')
//establish database connections
const db = require('./config/dbConnection')
const app = express();
const authRouter= require('./routers/authRoutes')
const studentrouter = require('./routers/studentroute');
const emailrouter = require('./routers/emailRoute')

const teacherRouter = require("./routers/teacherrouter");

Port=5000
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
//routes
app.use('/auth',authRouter)
app.use('/student',studentrouter)
app.use('/teacher',teacherRouter);
app.use('/email',emailrouter);

app.listen(Port,()=>{
    console.log(`port listen on ${Port}`)
})

