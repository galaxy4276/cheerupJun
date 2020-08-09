const User = (sequelize, DataTypes) => {
  return sequelize.define('userTBL', {
    userId: {
      type: DataTypes.STRING(100),
      primaryKey: true,
    },
    userPassword: {
      type: DataTypes.STRING(15),
      allowNull: true,
    },
    userName: {
      type: DataTypes.STRING(25),
      allowNull: true,
    },
    userAge: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    userEmail: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
  }, {
    timestamp: true,
  });
};


export default User;