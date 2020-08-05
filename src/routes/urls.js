// 홈페이지
const WELCOME_PAGE = '/';

const HOME = '/';
// const USER_COMMUNITY = '/main/community';
const TEST = '/test';
const TEST_LOGIN_FAILED  = '/loginFailed';
const TEST_USER_LIST = '/userList';


// User Page
const USER_DETAIL = '/user/detail';


// login API Urls
const LOGIN = '/login';
const LOGOUT = '/logout';
const JOIN = '/join';

const LOGIN_NAVER = '/passport-naver';
const NAVER_CALLBACK = '/callback/naver';
const LOGIN_FACEBOOK = '/passport-facebook';
const LOGIN_GOOGLE = '/passport-google'


const urls = {
  test: TEST,
  loginFailed: TEST_LOGIN_FAILED,
  userList: TEST_USER_LIST,

  welcomePage: WELCOME_PAGE,
  
  home: HOME,
  userDetail: USER_DETAIL,
  login: LOGIN,
  logout: LOGOUT,
  join: JOIN,

  loginNaver: LOGIN_NAVER,
  naverCallback: NAVER_CALLBACK,
  loginFacebook: LOGIN_FACEBOOK,
  loginGoogle: LOGIN_GOOGLE,
};


export default urls;