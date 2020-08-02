import urls from '../routes/urls';

export const sharePug = (req, res, next) => {
  res.locals.pugVariables = urls;
  next();
};

