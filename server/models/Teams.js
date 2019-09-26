module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "TEAMS",
    {
      ID: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      TEAMNAME: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      LEAGUENAME: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      LEAGUEID: {
        type: DataTypes.INTEGER(50),
        allowNull: false
      },
      MANAGERNAME: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      MANAGERPHONE: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      MANAGEREMAIL: {
        type: DataTypes.STRING(50),
        allowNull: false
      },
      MAXTEAMMEMBERS: {
        type: DataTypes.INTEGER(2),
        allowNull: false
      },
      MINMEMBERAGE: {
        type: DataTypes.INTEGER(2),
        allowNull: false
      },
      MAXMEMBERAGE: {
        type: DataTypes.INTEGER(2),
        allowNull: false
      },
      TEAMGENDER: {
        type: DataTypes.STRING(10),
        allowNull: false
      }
    },
    {
      tableName: "TEAMS"
    }
  );
};
