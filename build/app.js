import express, { urlencoded } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import path from 'path';
import router from './routes/testRouter';
const app = express();


const host = '10.173.0.2';
const port = 8001;

app.set('view engine', 'pug');
app.set('port', process.env.PORT || 8001);
app.set('views', path.resolve(__dirname, 'views'));

app.use(helmet());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));


app.use('/', router);

app.listen(port, host, () => {
  console.log(`Server running on http://${host}:${port}`);
});

