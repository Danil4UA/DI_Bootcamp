const express = require("express")
const usersRouter = require("./router/usersRouter.js")
const registerRouter = require("./router/registerRouter.js")
const loginRouter  = require("./router/loginRouter.js")


const app = express()
const port = 3000;

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static("public"))

app.use("/users", usersRouter)
app.use("/register", registerRouter)
app.use("/login", loginRouter)

