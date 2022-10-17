"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PING_LISTEN_PORT == null ? 3000 : process.env.PING_LISTEN_PORT;
app.get('/ping', (req, res) => {
    res.send(req.headers);
});
app.get('*', (req, res) => {
    res.status(404);
    res.send();
});
app.listen(port, () => {
    console.log('The application is listening on port ' + port + '!');
});
