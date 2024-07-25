const express = require("express")
const productsRouter = require("./routes/productsRouter.js")
const usersRouter = require("./routes/usersRouter.js")
const app = express()
const port = 3000;

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.listen(port, ()=>{
    console.log(`server running on port ${port}...`)
})

app.use("/", productsRouter)
app.use("/users", usersRouter)


app.get("*", (req,res)=>{
    res.send("The page doesn't exist")
})
/**
 * server.js
 *  |_config - connections to database
 *  |_models - queries to database/files
 *  |_controllers - function implements code - request, response
 *  |_routes - route for api
 */