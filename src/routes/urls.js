// 홈페이지
const WELCOME_PAGE = '/';

const HOME = '/main';
// const USER_COMMUNITY = '/main/community';


// User Page
const USER_DETAIL = '/user/detail';


// login API Urls
const LOGIN = '/login';
const LOGOUT = '/logout';
const JOIN = '/join';

const LOGIN_NAVER = '/login/passport-naver';
const LOGIN_FACEBOOK = '/login/passport-facebook';
const LOGIN_GOOGLE = '/login/passport-google'


const urls = {
  welcomePage: WELCOME_PAGE,
  
  home: HOME,
  userDetail: USER_DETAIL,
  login: LOGIN,
  logout: LOGOUT,
  join: JOIN,

  loginNaver: LOGIN_NAVER,
  loginFacebook: LOGIN_FACEBOOK,
  loginGoogle: LOGIN_GOOGLE,
};


export default urls;