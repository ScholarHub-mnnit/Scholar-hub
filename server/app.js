import express from 'express';
import userroute from './router/userroute.js';
const app = express();

app.use(express.json);
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));
app.use('/api/user', userroute);
