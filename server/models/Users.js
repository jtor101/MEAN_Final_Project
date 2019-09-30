module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "USERS",
    {
      USERID: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      USERNAME: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
      },
      PASSWORD: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      EMAIL: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
      },
      IS_ADMIN: {
        type: DataTypes.INTEGER(1),
        allowNull: true,
        defaultValue: 0
      }
    },
    {
      tableName: "USERS"
    }
  );
};
