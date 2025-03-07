import express from 'express';
import { greetUser } from '../controller/user/user.js';


const router = express.Router();

router.post("/greetUser", greetUser)

export default router;