import express from 'express';
import {
  deleteme,
  getme,
  logout,
  update,
  forgotpassword,
} from '../controller/usercontroller.js';
const router = express.Router();

router.patch('/update', update);
// router.post('/forgotpassword', forgotpassword);
router.get('/logout', logout);
router.get('/me', getme);
router.delete('/delete/:id', deleteme);
// router.get('/all', getall);
export default router;
