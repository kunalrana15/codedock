import express from 'express';
import projectRouter from './projects.js';

const router = express.Router();

router.use('/projects',projectRouter);

export default router;