import express from 'express';
// import { testRouing } from '../controllers/testControllers';
import { renderIndex, userList } from '../controllers/globalControllers';
import urls from './urls';
import { testLoginFailed } from '../controllers/testControllers';


const router = express.Router();


router.get(urls.home, () => { console.log('로그인 실패'); }, renderIndex);
router.get(urls.loginFailed, testLoginFailed);
router.get(urls.userList, userList);

export default router;