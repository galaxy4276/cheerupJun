import urls from '../routes/urls';
import express from 'express';
import { renderIndex, loginNaver, callbackNaver, postJoin } from '../controllers/globalControllers';
import passport from 'passport';


const globalRouter = express.Router();


globalRouter.get(urls.home, renderIndex);

globalRouter.get(`${urls.test}${urls.userList}`, );

globalRouter.post(urls.join, postJoin);

globalRouter.get(`${urls.login}${urls.loginNaver}`, loginNaver);
globalRouter.get(`${urls.login}${urls.naverCallback}`, passport.authenticate('naver', {
  failureRedirect: `${urls.test}${urls.loginFailed}`, successRedirect: urls.home
}), callbackNaver);



export default globalRouter;