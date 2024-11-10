import express from 'express';
import { deleteme, getme, logout, update, forgotpassword } from '../controller/usercontroller.js';
const router = express.Router();

<<<<<<< HEAD
=======
import {
  update,
  logout,
  getme,
  deleteme,
  getall,
} from '../controller/usercontroller';

>>>>>>> 541b1b808b4e90ccc74c020914345f87f632efb3
router.patch('/update', update);
// router.post('/forgotpassword', forgotpassword);
router.get('/logout', logout);
router.get('/me', getme);
router.delete('/delete/:id', deleteme);
<<<<<<< HEAD
=======
router.get('/all', getall);
>>>>>>> 541b1b808b4e90ccc74c020914345f87f632efb3
export default router;
