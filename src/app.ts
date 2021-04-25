import express, { Express } from 'express';

const app: Express = express();

app.get('/', (req, res) => res.send('Express + TypeScript Server'));

export default app;
