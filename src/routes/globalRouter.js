import urls from '../routes/urls';
import express from 'express';
import { renderIndex, postJoin } from '../controllers/globalControllers';


const globalRouter = express.Router();


globalRouter.get(urls.home, renderIndex);


globalRouter.post(urls.join, postJoin);


export default globalRouter;