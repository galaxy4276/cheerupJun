import express from 'express';
import urls from './urls';
import passport from 'passport';
import { callbackNaver, loginNaver } from '../controllers/authControllers';


const authRouter = express.Router();


authRouter.get(urls.loginNaver, loginNaver);
authRouter.get(urls.naverCallback, passport.authenticate('naver', {
  failureRedirect: urls.loginFailed, successRedirect: urls.home
}, callbackNaver));


export default authRouter;