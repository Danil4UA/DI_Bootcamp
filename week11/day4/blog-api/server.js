import express from "express"
import { fileURLToPath } from 'url';
import {dirname} from "path"
import bodyParser from "body-parser";

const app = express()
const port = 3000
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.listen(port, ()=>{
    console.log("Server listening on port " + port + "...")
})


const data = [
    {
        id: 1,
        title: "my title",
        content: "my content"
    },
    {
        id: 2,
        title: "my title 2",
        content: "my content 3"
    },
    {
        id: 3,
        title: "my title 3",
        content: "my content 3"
    }
]


app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.get("/posts", (req,res)=>{
    res.send(data)
})

app.get("/posts/:id", (req,res)=>{
    const { id } = req.params
    const filteredData = data.filter((item)=>item.id == id)
    if(filteredData.length === 0) return res.send({msg: "Data not found "})
    res.send(filteredData)
})

app.post("/posts", async (req,res)=>{
    const newPost = {...req.body, id: data.length + 1}
    console.log(newPost)
    data.push(newPost)
    res.json(data)
})

app.put("/posts/:id", (req,res)=>{
    const { id } = req.params
    const { title, content } = req.body
    const index = data.findIndex((item)=>item.id == id)
    if(index === -1)res.status(404).json({message: "Post not found, can't fint the index"})
    data[index] = {...data[index], title,content}
    res.json(data)
})

app.delete("/posts/:id", (req,res)=>{
    const { id } = req.params
    const index = data.findIndex((item)=>item.id == id)
    if(index === -1)res.status(404).json({message: "Post not found, can't fint the index"})
    data.splice(index, 1)
    res.json(data)
})