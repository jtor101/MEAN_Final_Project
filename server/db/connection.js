const Sequelize = require("sequelize");

const sequelize = new Sequelize("hca", "hca", "password", {
  host: "localhost",
  dialect: "postgres",
  operatorsAliases: false
});

const Leagues = sequelize.import("../models/Leagues");
const Teams = sequelize.import("../models/Teams");
const Members = sequelize.import("../models/Members");
const Users = sequelize.import("../models/Users");

Teams.belongsTo(Leagues);
Leagues.hasMany(Teams);

Members.belongsTo(Teams);
Teams.hasMany(Members);

sequelize.authenticate().then(() => {
  console.log("connected");
});

module.exports = {
  Sequelize,
  sequelize,
  Leagues,
  Teams,
  Members,
  Users
};
