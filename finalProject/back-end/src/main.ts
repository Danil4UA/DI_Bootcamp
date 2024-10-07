import express, { Application, Request, Response } from "express";
import 'dotenv/config';
import userRouter from "./routes/userRoutes"


const app: Application = express();
app.use(express.json())

const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 5001;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`);
});

app.use("/user", userRouter)