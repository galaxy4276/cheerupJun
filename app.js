import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';

const app = express();
const host = '34.64.104.195';

app.set('port', process.env.PORT || 8001);
app.set('view engine', 'pug');

app.use(helmet);
app.use(morgan('dev'));

app.get('/', (req, res) => {
  console.log('hello jun. you will get standard skill of service develop.');
});

app.listen(app.get('port'), host, () => {
  console.log(`Server running on http://${host}:${port}`);
});

