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

app.get("/quiz", (req,res)=>{
    res.json(triviaQuestions)
})

app.post("/quiz", (req, res) => {
    const response = { ...req.body };
    if (response.data.quizAnswer === response.correctFinal.answer) {
        return res.json({ message: "Correct" });
    }
    res.json({ message: "Not correct" });
    console.log(response);
});