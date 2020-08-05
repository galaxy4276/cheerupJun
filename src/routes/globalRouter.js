import urls from '../routes/urls';
import express from 'express';
import { renderIndex, loginNaver, callbackNaver } from '../controllers/globalControllers';
import passport from 'passport';


const globalRouter = express.Router();


globalRouter.get(urls.home, renderIndex);

globalRouter.get(`${urls.login}${urls.loginNaver}`, loginNaver);
globalRouter.get(`${urls.login}${urls.naverCallback}`, passport.authenticate('naver', {
  failureRedirect: `${urls.test}${urls.home}`, successRedirect: urls.home
}), callbackNaver);



export default globalRouter;