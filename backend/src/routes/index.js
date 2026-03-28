import express from "express";
import mainRouter from './v1/index.js'

const router = express.Router();

router.use('/v1',mainRouter);

export default router;