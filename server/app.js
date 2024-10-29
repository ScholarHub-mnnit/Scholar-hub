import express from 'express';
import morgan from 'morgan';
import globalerrorhandler from './controller/errorcontroller.js';
import authroute from './router/authrouter.js';
import userroute from './router/userroute.js';
import courseroute from './router/courserouter.js';
import taskroute from './router/taskrouter.js';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));
app.use('/api/auth', authroute);
app.use('/api/user', userroute);
app.use('/api/course', courseroute);
app.use('/api/task', taskroute);
app.use(globalerrorhandler);

export default app;
