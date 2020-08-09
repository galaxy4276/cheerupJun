/* eslint-disable no-undef */
// Import Server Modules
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import path from 'path';
import cookie from 'cookie-parser';
import passport from 'passport';
import passportConfig from './controllers/passport';
import session from 'express-session'; 


// Import Database(Mariadb) Modules
import { verifyConnectingMariaDB, sharePug } from './middlewares/middlewares';


// Import Router 
import router from './routes/testRouter';
import globalRouter from './routes/globalRouter';
import authRouter from './routes/authRouter';
import urls from './routes/urls';


// 사용자 지정 환경변수를 사용할 수 있게 불러옵니다.
require('dotenv').config();


const app = express(); // 서버 메인 객체
verifyConnectingMariaDB(); // MariaDB 에 연결을 요청하고 성공, 실패 여부를 반환합니다.


app.set('view engine', 'pug'); // pug 사용 값 설정
app.set('port', process.env.PORT || 8001); // 서버 포트 값 설정
app.set('views', path.resolve(__dirname, 'views')); // views 디렉터리 위치 설정


app.use(helmet()); // Security Module
app.use(morgan('dev')); // Logging System Module
app.use(express.urlencoded({ extended: false })); // Body Data Parsing
app.use(express.json()); // json Data Parsing
app.use(express.static(path.resolve(__dirname, 'public'))); // 정적 파일 디렉터리 설정
app.use(cookie(process.env.COOKIE_SECRET)); 
app.use(session({
  resave: true,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
}));
app.use(passport.initialize());
app.use(passport.session());
passportConfig();
app.use(sharePug);


app.use(urls.home, globalRouter);
app.use(urls.login, authRouter);
app.use(urls.test, router); // 프론트 개발자 전용 test 라우터입니다. http://localhost/test 접근이 가능합니다.



app.use((err, req, res, next) => {
  console.log('에러가 발생했습니다.');
  console.error(err);

  res.status(500).send('에러 발생');
  next(err);
});


app.listen(app.get('port'), () => {
  console.log(`서버가 ${app.get('port')}에서 실행중입니다!`);
}); 