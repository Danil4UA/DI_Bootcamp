import express from "express"
import {fetchPosts} from "./data/dataService.js"

const app = express()
const port = 5001;

app.listen(port, ()=>{
    console.log(`Server runs on port ${port}...`)
})

app.get("/", async (req, res) => {
    try {
        const data = await fetchPosts("https://jsonplaceholder.typicode.com/posts");
        res.send(data);
    } catch (error) {
        res.status(500).send("An error occurred while fetching posts.");
    }
});