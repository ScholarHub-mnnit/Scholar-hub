import express from 'express';
import {
  addcourse,
  updatecourse,
  getall,
  getcourse,
  delcourse,
  deleteall,
} from '../controller/coursecontroller.js';

const router = express.Router();

router.get('/get/:id', getcourse);
router.get('/all', getall);
router.post('/add', addcourse);
router.patch('/update/:id', updatecourse);
router.delete('/delete/:id', delcourse);
router.delete('/deleteall', deleteall);
export default router;
