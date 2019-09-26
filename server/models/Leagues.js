module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "LEAGUES",
    {
      NAME: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
      },
      ID: {
        type: DataTypes.INTEGER(100),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      DESCRIPTION: {
        type: DataTypes.STRING(200),
        allowNull: false,
        unique: true
      }
    },
    {
      tableName: "LEAGUES"
    }
  );
};
