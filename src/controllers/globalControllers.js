import { User } from "../models";
import urls from "../routes/urls";
import { v4 as uuidv4 } from 'uuid';

export const renderIndex = (req, res) => {
  console.log('유저 출력' + req.user);
  res.render('index', { title: '섹시은기닷컴' });
};




export const postJoin = async (req, res) => {
  const { joinEmail } = req.body;
  
  try {
    const searchUser = await User.findOne({ where: { userEmail: joinEmail }});
    const namingCount = await User.findAll({});
  
    console.log(`searchUser: ${searchUser}`);

    if (!searchUser && joinEmail !== ('null' || 'undefined')) {
      const uuidID = uuidv4().split('-')[0];

      console.log('새 유저를 생성합니다.');
      await User.create({
        userId: uuidID,
        userPassword: null,
        userAge: 0,
        userName: `Anonymous${namingCount.length + 1}`,
        userEmail: joinEmail 
      });
    } else {
      console.log('이미 유저가 존재하거나 이메일이 존재하지 않습니다.');
    }

    res.redirect(urls.home);

  } catch (err) {
    console.error(err);
    res.redirect(urls.test + urls.loginFailed);
  }
}


export const userList = async (req, res) => {
  const list = await User.findAll({});

  console.log(list);

  res.render('backend/userList', { title: '회원가입 리스트', list });
}