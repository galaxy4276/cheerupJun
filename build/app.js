import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';

const app = express();
const host = '10.173.0.2';
const port = 8001;

app.set('view engine', 'pug');

app.use(helmet());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('hello jun. you will get standard skill of service develop.');
});

app.listen(port, host, () => {
  console.log(`Server running on http://${host}:${port}`);
});

