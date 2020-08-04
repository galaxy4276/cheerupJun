/* eslint-disable no-undef */
import passport from 'passport';
import urls from '../routes/urls';
import { callbackNaver } from './globalControllers';
const NaverStrategy = require('passport-naver').Strategy;
require('dotenv').config();


passport.use(new NaverStrategy({
  clientID: process.env.NAVER_CLIENT,
  clientSecret: process.env.NAVER_SECRET,
  callbackURL: `http://localhost:8001/${urls.login}/${urls.naverCallback}`,
}, callbackNaver));


export default passport;