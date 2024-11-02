import express from 'express';
import {
  getall,
  addtask,
  updatetask,
  deltask,
} from '../controller/taskcontroller.js';

const router = express.Router();

router.get('/all', getall);
router.post('/add', addtask);
router.patch('/update/:id', updatetask);
router.delete('/delete/:id', deltask);
export default router;
