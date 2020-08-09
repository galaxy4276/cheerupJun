import passport from 'passport';
import sequelize from '../models';


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
  const { User } = sequelize;

  try {
    let userSearch = await User.findOne({ where: { userId: profile.id }});

    if (userSearch === 'undefined') {
      await User.create({
        userId: profile.id,
        userPassword: null,
        userName: profile.displayName,
        userAge: profile.profile.age,
        userEmail: profile.emails[0],
      });
      userSearch = await User.findOne({ where: { userId: profile.id }});

    }

    done(null, userSearch);

  } catch (err) {
    console.log('네이버 로그인에 문제가 생겼습니다.');
    console.error(err);
    done(err, null);
    } 
  };