import express from 'express';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.patch('/update', update);
router.post('/forgotpassword', forgotpassword);
router.get('/logout', logout);
router.get('/me', getme);
router.delete('/delete/:id', deleteme);
export default router;
