import express from 'express';
import {
  addcourse,
  updatecourse,
  getall,
  getcourse,
  delcourse,
  deleteall,
} from '../controller/coursecontroller.js';

import taskrouter from './taskrouter.js';

const router = express.Router();

router.get('/get/:id', getcourse);
router.get('/all', getall);
router.post('/add', addcourse);
router.patch('/update/:id', updatecourse);
router.delete('/delete/:id', delcourse);
router.delete('/deleteall', deleteall);
router.post('/:id/task', taskrouter);

export default router;
