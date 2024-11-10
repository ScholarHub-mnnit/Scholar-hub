import express from 'express';
import {
  getall,
  addevent,
  updateevent,
  delevent,
} from '../controller/eventcontroller.js';

const router = express.Router();

router.get('/all', getall);
router.post('/add', addevent);
router.patch('/update/:id', updateevent);
router.delete('/delete/:id', delevent);
export default router;
