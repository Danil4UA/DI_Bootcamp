import express from "express"
import { triviaQuestions } from "./config/data.js"


const app = express();
const port = 3000;

app.listen(port, ()=>{
    console.log("Server running in port " + port + "...")
})

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static('public'));  

// app.get("/questions", (req,res)=>{
//     res.json(triviaQuestions)
// })

// app.get("/quiz/:id", (req,res)=>{
//     const {id} = req.params
//     const question = triviaQuestions[id].question
//     const answer = triviaQuestions[id].answer
//     res.json({question, answer})
// })

app.post("/quiz", (req,res)=>{

})

app.get("/quiz/score", (req,res)=>{
    
})