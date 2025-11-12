import { Router } from 'express';

const router = Router();

router.post('/login', (req, res) => {
    res.send('User login');
});

router.post('/register', (req, res) => {
    res.send('User registration');
});

export default router;
