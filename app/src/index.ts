import express from 'express';
const app = express();

const dotenv = require('dotenv');
dotenv.config()
const port = process.env.PING_LISTEN_PORT == null ? 3000 : process.env.PING_LISTEN_PORT;

app.get('/ping', (req, res) => {
    res.send(req.headers);
})

app.get('*', (req, res) => {
    res.status(404);
    res.send();
})

app.listen(port, () => {
    console.log('The application is listening on port '+port+'!');
})
    