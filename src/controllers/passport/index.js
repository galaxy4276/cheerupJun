/* eslint-disable no-undef */
import passport from 'passport';
import urls from '../../routes/urls';
import { callbackNaver } from '../authControllers';
import User from '../../models/User';
import local from './localStrategy';
const NaverStrategy = require('passport-naver').Strategy;
require('dotenv').config();


module.exports = () => {
  
  passport.serializeUser((user, done) => {
    console.log(`userId: ${user.userId}`);
    done(null, user.userId);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      if (err) done(err, null);
      done(null, user);
    });
  });

  local();

  passport.use(new NaverStrategy({
    clientID: process.env.NAVER_CLIENT,
    clientSecret: process.env.NAVER_SECRET,
    callbackURL: `http://localhost:8001${urls.login}${urls.naverCallback}`,
  }, callbackNaver));
  
}
