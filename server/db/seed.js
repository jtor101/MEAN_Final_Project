const connection = require("./connection");
const usersData = require("./seed_data/users_data.json");
const leaguesData = require("./seed_data/leagues_data.json");
const teamsData = require("./seed_data/teams_data.json");
const membersData = require("./seed_data/members_data.json");

connection.Users.destroy({ where: {} }).then(() => {
  connection.Users.bulkCreate(usersData).then(() => {
    connection.Leagues.destroy({ where: {} }).then(() => {
      connection.Leagues.bulkCreate(leaguesData).then(() => {
        connection.Teams.destroy({ where: {} }).then(() => {
          connection.Teams.bulkCreate(teamsData).then(() => {
            connection.Members.destroy({ where: {} }).then(() => {
              connection.Members.bulkCreate(membersData).then(() => {
                process.exit();
              });
            });
          });
        });
      });
    });
  });
});
