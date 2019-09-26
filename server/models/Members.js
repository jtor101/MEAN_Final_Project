module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "MEMBERS",
    {
      ID: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      EMAIL: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      MEMBERNAME: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      TEAMNAME: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      TEAMID: {
        type: DataTypes.INTEGER(50),
        allowNull: false
      },
      CONTACTNAME: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      AGE: {
        type: DataTypes.INTEGER(3),
        allowNull: false
      },
      GENDER: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      PHONE: {
        type: DataTypes.STRING(35),
        allowNull: false
      }
    },
    {
      tableName: "MEMBERS"
    }
  );
};
