import Sequelize from 'sequelize';
import { development } from './config';

// 데이터 모델
import User from './User';


const config = development; // 디비 환경설정
const db = {};


const sequelize = new Sequelize(config.database, config.username, config.password, config);


db.User = User(sequelize, Sequelize);


db.sequelize = sequelize;
db.Sequelize = Sequelize;


// module.exports = db;
export default db;