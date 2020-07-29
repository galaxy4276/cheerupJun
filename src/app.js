import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';

const app = express();

app.set('view engine', 'pug');
app.set('port', process.env.PORT || 8001);

app.use(helmet());
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('hello jun. you will get standard skill of service develop.');
});



app.listen(app.get('port'), () => {
  console.log(`Server running on http://localhost:${app.get('port')}`);
});

