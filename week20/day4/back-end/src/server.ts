import express, { Request, Response } from 'express';
import 'dotenv/config'

const app = express();
app.use(express.json());

app.get('/', (_: Request, res: Response) => {
    res.send('JWT Auth API');
});

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));