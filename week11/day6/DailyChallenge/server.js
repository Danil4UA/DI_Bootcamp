import express from "express"
import { emojis } from "./emojis.js";
import path from "path"


const app = express()
const port = 3000;


app.listen(port, ()=>{
    console.log(`Server runs on port ${port}`)
})

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static('public'));  

app.get("/emojis", (req,res)=>{
    res.json(emojis)
})

app.post("/emojis", (req,res)=>{
    const data = req.body
    const foundEmoji = emojis.find(item=>item.name === data.name)

})
