const express = require("express")
const {users} = require("./config/users.js")
const bcrypt = require('bcrypt');


const app = express()
const port = 3000;

app.listen(port, ()=>{
    console.log(`Server running on port ${port}`)
})
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static("public"))

app.post("/register", async (req,res) =>{
    try {
        const {username, password} = req.body
        console.log(username,password)
        const saltRounds = 5
        const salt = bcrypt.genSaltSync(saltRounds)
        const hash = bcrypt.hashSync(password, salt)
        const user = {id: users.length + 1, username, password: hash}
        console.log(user)
        users.push(user)
        res.json(user).status(200)
    } catch (error) {
        console.log(error)
        res.status(400)
    }
})

app.post("/login", async (req,res)=>{
    try {
        const {username, password} = req.body
        console.log(username, password)
        const index = users.findIndex(user=>user.username === username)
        if(index === -1){
            return res.json({message: "User is not registered"}).status(404)
        }
        const ifPasswordCorrect = bcrypt.compareSync(password, users[index].password)
        if(ifPasswordCorrect){
            res.json({message: `Hi ${username}, welcome back again!`})
        }
        else{
            res.json({message: "Password is not correct"})
        }
    } catch (error) {
        console.log(error)
        res.status(400)
    }
})

app.get("/users", async (req,res)=>{
    try {
        const data = users;
        if(!data)res.json({message: "Oooops... Something went wrong"})
        res.json(users)
    } catch (error) {
        console.log(error)
        res.status(404).json({error})
    }
})

app.get("/users/:id", async (req,res)=>{
    try {
        const {id} = req.params;
        const index = users.findIndex(user=>user.id == id);
        if(index === -1)res.json({message: "User not found"})
        res.json(users[index])
    } catch (error) {
        console.log(error)
        res.status(404).json({error})
    }
})

app.put("/users/:id", async (req,res) => {
    try {
        const {id} = req.params;
        const {username, password} = req.body

        const salt = bcrypt.genSaltSync(saltRounds)
        const hash = bcrypt.hashSync(password, salt)

        const index = users.findIndex(user=>user.id == id);
        if(index === -1)res.json({message: "User not found"})
        users[index] = {username, password: hash}
        res.json(users[index]).status(200)
    } catch (error) {
        console.log(error)
        res.status(404).json({error})
    }
})
