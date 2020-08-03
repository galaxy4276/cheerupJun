import urls from '../routes/urls';
import { sequelize } from '../models';

export const sharePug = (req, res, next) => {
  res.locals.pugVariables = urls;
  next();
};

export const verifyConnectingMariaDB = () => {
  
}