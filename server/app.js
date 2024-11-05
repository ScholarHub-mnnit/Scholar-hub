import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import globalerrorhandler from './controller/errorcontroller.js';
import authroute from './router/authrouter.js';
import userroute from './router/userroute.js';
import courseroute from './router/courserouter.js';
import taskroute from './router/taskrouter.js';
import { protect } from './controller/authcontroller.js';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
const app = express();

app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(cookieParser()); 
const corsOptions = {
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, 
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.use('/api/auth', authroute);
app.use(protect);
app.use('/api/user', userroute);
app.use('/api/course', courseroute);
app.use('/api/task', taskroute);
app.use(globalerrorhandler);

export default app;
