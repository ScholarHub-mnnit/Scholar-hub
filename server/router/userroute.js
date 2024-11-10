import express from 'express';
const router = express.Router();

import {
  update,
  logout,
  getme,
  deleteme,
  getall,
} from '../controller/usercontroller';

router.patch('/update', update);
// router.post('/forgotpassword', forgotpassword);
router.get('/logout', logout);
router.get('/me', getme);
router.delete('/delete/:id', deleteme);
router.get('/all', getall);
export default router;
