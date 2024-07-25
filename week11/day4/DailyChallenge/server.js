import express from 'express';
import cors from "cors"
import path from 'path';
import { emojis } from './config/emojis.js';

let score = 0


const app = express();
const port = 3000;
const __dirname = path.resolve();

app.use(cors())
app.use("/", express.static(__dirname + "/public"))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});


const shuffleArray = (arr) =>{
    for(let i = arr.length-1; i>0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr
}

app.get('/emojis', (req, res) => {
    const randomIndex = Math.floor(Math.random() * emojis.length + 1)
    const randomEmoji = emojis[randomIndex]
    res.json(
        {randomEmoji, 
            shuffleEmojis : shuffleArray(emojis)
        }
    );
});

app.post('/emojis', (req, res) => {
    const { name, guess } = req.body;
    if (name === guess) {
        score++;
        return res.json({
            message: 'Correct! Wow!',
            score,
            code: 'ok'
        });
    }
    res.json({
        message: 'Try again :(',
        code: 'notok'
    });
});