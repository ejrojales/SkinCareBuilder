import 'dotenv/config';
import * as routines from './model.mjs';
import express from 'express';

const app = express();

app.use(express.json());

const PORT = process.env.PORT;


app.get('/api', (req, res) => {
    res.send('Server home')
});

app.post('/routines', (req, res) => {
    routines.createRoutine(req.body.title, req.body.author, req.body.comments, req.body.date, req.body.hidden, req.body.products)
        .then(routine => {
            res.status(201).json(routine)
        })
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});