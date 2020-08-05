/* eslint-disable no-undef */
'use strict';

const path = require('path');
const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require(path.join(__dirname, '..', 'config', 'config.json'))[env];
const db = {};


const sequelize = new Sequelize(config.database, config.username, config.password, config, {
  dialectOptions: {
    useUTC: false,
  },
  timezone: 'Etc/GMT0',
});


db.User = require('./User')(sequelize, Sequelize);


db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = db;