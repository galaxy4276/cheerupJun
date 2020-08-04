module.exports = (sequelize, DataTypes) => {
  return sequelize.define('userTBL', {
    userId: {
      type: DataTypes.STRING(15),
      primaryKey: true,
    },
    userPassword: {
      type: DataTypes.STRING(15),
    },
    userName: {
      type: DataTypes.STRING(10),
    },
    userAge: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userEmail: {
      type: DataTypes.STRING(20),
    },
  }, {
    timestamp: true,
  });
};