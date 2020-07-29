import express from 'express';
import { testRouing } from '../controllers/testControllers';

const router = express.Router();

router.get('/', testRouing);

export default router;