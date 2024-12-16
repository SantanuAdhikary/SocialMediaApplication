let express = require("express");
const { connectDB } = require("./config/db");
const cors = require("cors")

const userRouter = require("./router/userRouter")
const contactRouter = require("./router/contactRouter")

const errorHandler = require("./middleware/errorHandler")

let app = express();

connectDB()

require("dotenv").config()

const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH",
    credentials: true,
  };
  
  app.use(cors(corsOptions));
  app.use(express.json())


app.use("/api/auth",userRouter)
app.use("/api",contactRouter)


const port = process.env.PORT

app.use(errorHandler)

app.listen(port,err=>{
    if(err) throw err;

    console.log(`server is running on port ${port}`)
})