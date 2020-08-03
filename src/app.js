// Import Server Modules
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import path from 'path';
import cookie from 'cookie-parser';
// import session from 'express-session';


// Import Database(Mariadb) Modules
import { sequelize } from './models'


// 사용자 지정 환경변수를 사용할 수 있게 불러옵니다.
import dotenv from 'dotenv';
dotenv.config();


// Import Router 
import router from './routes/testRouter';


const app = express();
sequelize.sync()
  .then(() => {
    console.log('MariaDB connected');
  })
  .catch(err => {
    console.log('connect fail');
    console.error(err);
  });


app.set('view engine', 'pug');
app.set('port', process.env.PORT || 8001);
app.set('views', path.resolve(__dirname, 'views'));


app.use(helmet());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(cookie(process.env.COOKIE_SECRET));
// app.use(session({
//   resave: false,
//   saveUninitialized: false,
//   secret: process.env.COOKIE_SECRET,
// }));


app.use('/', router);


app.listen(app.get('port'), () => {
  console.log(`Server running on http://localhost:${app.get('port')}`);
});

