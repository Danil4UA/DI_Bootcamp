import express from "express";
import authMiddleware from "./authMiddleware.js"
import cookieParser from "cookie-parser";

const port = 3000;

const app = express()

app.use(express.json());
app.use(cookieParser())



app.get('/', (req, res) => {
    res.send('Hello, JWT Authentication!');
});

// Protected route that requires authentication
app.get('/profile', authMiddleware, (req, res) => {
    // Access the authenticated user's information via req.user
    res.json({ message: `Welcome, ${req.user.username}!` });
  });

app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}...`)
})