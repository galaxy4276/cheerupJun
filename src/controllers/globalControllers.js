import passport from "passport";
import { User } from "../models";

export const renderIndex = (req, res) => {
  res.render('index', { title: '섹시준재닷컴' });
};


export const loginNaver = passport.authenticate('naver');


export const callbackNaver = async (accessToken, refreshToken, profile, done) => {
  await User.findOne({ where: { userId: profile.id } }
    , (err, user) => {
      if (!user) {
        const newUser = User.create({
          userId: profile.id,
          userPassword: null,
          userName: profile.displayName,
          userAge: profile.age,
          userEmail: profile.emails[0],
        });
      }
        if (err) {
          console.error(err);
          done(err, null);
        }
        return done(null, user);
  })};
