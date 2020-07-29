import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';

const app = express();
const host = '10.178.0.2';
const port = 8001;

app.set('view engine', 'pug');

let connect = 0;

app.use(helmet());
app.use(morgan('dev'));

app.get('/', (req, res) => {
	res.write("Hello jun. we will get standard skill of service develop. \n");
	res.write(`your connect sequence: ${connect}`);
	connect++;
	res.end();
});

app.listen(port, host, () => {
  console.log(`Server running on http://${host}:${port}`);
});

