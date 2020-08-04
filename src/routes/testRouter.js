import express from 'express';
// import { testRouing } from '../controllers/testControllers';
import { renderIndex } from '../controllers/globalControllers';
import urls from './urls';


const router = express.Router();


router.get(urls.join, renderIndex);


export default router;