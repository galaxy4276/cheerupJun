// Import Server Modules
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import path from 'path';
import cookie from 'cookie-parser';
// import session from 'express-session';


// Import Database(Mariadb) Modules
import { verifyConnectingMariaDB } from './middlewares/middlewares';


// Import Router 
import router from './routes/testRouter';


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
// app.use(session({
//   resave: false,
//   saveUninitialized: false,
//   secret: process.env.COOKIE_SECRET,
// }));


app.use('/', router);


app.listen(app.get('port'), () => {
  console.log(`서버가 ${app.get('port')}에서 실행중입니다!`);
});

