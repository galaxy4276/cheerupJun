import urls from '../routes/urls';
import { sequelize } from '../models';


export const sharePug = (req, res, next) => {
  res.locals.urls = urls;
  next();
};


export const verifyConnectingMariaDB = async () => {
  sequelize.sync();

  try {
    await sequelize.authenticate();
    console.log('MariaDB 연결 성공했습니다.');
  } catch (err) {
    console.log(`MariaDB 연결에 실패했습니다.\n 사유: ${err}`);
  }
};

