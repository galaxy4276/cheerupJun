export const testRouing = (req, res) => {
  res.render('index', {});
};

export const testLoginFailed = (req, res) => {
  res.render('temp/backend/loginFailed', { title: '네이버 로그인 실패' });
};
