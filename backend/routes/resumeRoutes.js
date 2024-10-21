
import express from 'express';
import { updateProfile } from '../controllers/resumeController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.put('/', protect, updateProfile);

export default router;
