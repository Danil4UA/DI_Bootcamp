import express, { Application, Request, Response } from "express";
import userRouter from "./routes/userRoutes"
import postRouter from "./routes/postRoutes"
import cookieParser from "cookie-parser"
import 'dotenv/config';
const app: Application = express();

app.use(express.json())
app.use(cookieParser())

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 5001;

app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`);
});

