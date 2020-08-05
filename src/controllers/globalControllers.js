import passport from "passport";
import { User } from "../models";

export const renderIndex = (req, res) => {
  console.log('유저 출력' + req.user);
  res.render('index', { title: '섹시준재닷컴' });
};


export const loginNaver = passport.authenticate('naver');


export const callbackNaver = async (accessToken, refreshToken, profile, done) => {
  // await User.findOne({ where: { userId: profile.id } }
  //   , (err, user) => {
  //     if (!user) {
  //       const newUser = User.create({
  //         userId: profile.id,
  //         userPassword: null,
  //         userName: profile.displayName,
  //         userAge: profile.age,
  //         userEmail: profile.emails[0],
  //       });
  //     }
  //       if (err) {
  //         console.error(err);
  //         done(err, null);
  //       }
  //       return done(null, user);
  // });
  try {
    const userSearch = await User.findOne({ where: { userId: profile.id }});

    if (userSearch === 'undefined') {
      await User.create({
        userId: profile.id,
        userPassword: null,
        userName: profile.displayName,
        userAge: profile.profile.age,
        userEmail: profile.emails[0],
      });
      userSearch = await User.findOne({ where: { userId: profile.id }});
      console.log(`userSearch: ${userSearch}`);
    }

    done(null, userSearch);
  } catch (err) {
    console.log('네이버 로그인에 문제가 생겼습니다.');
    console.error(err);
    done(err, null);
    } 
  };
