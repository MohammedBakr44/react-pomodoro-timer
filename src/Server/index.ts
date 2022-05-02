import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();
export const app = express();
app.use(express.json());
const { PORT } = process.env;

app.get('/', (request: Request, respons: Response) => {
    respons.status(200).send("Hello( ͡° ͜ʖ ͡°)");
})

app.listen(PORT, () => {
    console.log(`Server running in port ${PORT}`);
})