import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import path from 'path';
import router from './routes/testRouter';
import { sharePug } from './middlewares/middlewares';

const app = express();

app.set('view engine', 'pug');
app.set('port', process.env.PORT || 8001);
app.set('views', path.resolve(__dirname, 'views'));

app.use(helmet());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));

app.use(sharePug);

app.use('/', router);


app.listen(app.get('port'), () => {
  console.log(`Server running on http://localhost:${app.get('port')}`);
});

