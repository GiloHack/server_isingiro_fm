const express = require("express")
const cors = require("cors")
const dotenv = require("dotenv")
const MAIN_ROUTE = require("./routes/main.js")
//configure .env
dotenv.config()


//app
const app = express();
const PORT = process.env.SERVER_PORT;
app.listen(PORT, ()=>{
    console.log("I am listening on PORT : "+PORT)
})


app.use(cors({origin:"http://localhost:3000"}))
//middle ware
app.use("/en", MAIN_ROUTE)