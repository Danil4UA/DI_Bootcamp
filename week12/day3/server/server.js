const express = require("express")
const dotenv = require("dotenv")
dotenv.config();
const productRouter = require("./routes/productsRoutes.js")

const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json())

// console.log(process.env)

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Running on port ${PORT}`)
})

app.use("/products", productRouter)