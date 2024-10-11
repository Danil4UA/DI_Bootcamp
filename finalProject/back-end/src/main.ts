import express, { Application, Request, Response } from "express";
import userRouter from "./routes/userRoutes"
import postRouter from "./routes/postRoutes"
import cookieParser from "cookie-parser"
import cors from "cors"

import 'dotenv/config';
const app: Application = express();

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin:["http://localhost:5173"]
}))

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 5001;

app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`);
});

