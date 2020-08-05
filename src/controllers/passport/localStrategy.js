/* eslint-disable no-undef */
import passport from 'passport';
import User from '../../models/User';

const LocalStrategy = require('passport-local').Strategy;

module.exports = () => {
  console.log('로컬 로그인 수행..');
  passport.use(new LocalStrategy({
    usernameField: 'id',
    passwordField: 'password',
  }, async (id, pw, done) => {
    const user = await User.findOne({ where: { id }});
    try {
      if (user) {
        done(null, user);
      }
    } catch (err) {
      console.error(err);
      done(err);
    }
  }));
};