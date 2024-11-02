import express from 'express';
import { getall, addtask } from '../controller/taskcontroller.js';

const router = express.Router();

router.get('/all', getall);
router.post('/add', addtask);
// router.patch('/update/:id', updatetask);
// router.delete('/delete/:id', deltask);
// router.delete('/deleteall', deleteall);
// router.post('/:id/task', taskrouter);
export default router;
