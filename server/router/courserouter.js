import express from 'express';
import {
  addcourse,
  updatecourse,
  getall,
  delcourse,
  deleteall,
} from '../controller/coursecontroller.js';

const router = express.Router();

router.get('/all', getall);
router.post('/add', addcourse);
router.patch('/update', updatecourse);
router.delete('/delete', delcourse);
router.delete('/deleteall', deleteall);
export default router;
