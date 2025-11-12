import { Router } from 'express';
import * as authController from './auth/auth.controller.js';

const router = Router();

router.post('/register', authController.registerController);
router.post('/login', authController.loginController);

export default router;
