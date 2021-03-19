import express from 'express';
// rest of the code remains same
const app = express();
app.get('/', (req, res) => res.send('Express + TypeScript Server'));

export default app;
