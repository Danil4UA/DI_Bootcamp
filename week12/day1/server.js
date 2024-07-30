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

app.use("/products", productsRouter)
app.use("/users", usersRouter)

// logger
// const logger = (req, res, next) => {
//     console.log(req.url, req.method)
//     next()
// }

// app.use("/users") // only for users / if we dont specify route we do middleware for every route.


app.get("*", (req,res)=>{
    res.send("The page doesn't exist")
})

/**
 * routes - router
 * controllers
 * config
 * module
 * 
 * middleware 
 * middleware - ites a function. its coming between request and response 
 * request -> middleware -> response
 */


/**
 * server.js
 *  |_config - connections to database
 *  |_models - queries to database/files
 *  |_controllers - function implements code - request, response
 *  |_routes - route for api
 */