var service = require("../services/bandsService");

var Controller = {};

// START ALL GETS
// GET: http://localhost:3000/bands
Controller.listLeagues = (req, res) => {
  service
    .listLeagues()
    .then(leagues => {
      if (leagues) {
        res.json(leagues);
      } else {
        res.end("No Leagues found.");
      }
    })
    .catch(err => {
      console.log(`Listing Leagues error: ${err}`);
      res.end("Listing Leagues error.");
    });
};

// GET: http://localhost:3000/bands/all
Controller.listBands = (req, res) => {
  service
    .listBands()
    .then(bands => {
      if (bands) {
        res.json(bands);
      } else {
        res.end("No Bands found.");
      }
    })
    .catch(err => {
      console.log(`Listing Bands error: ${err}`);
      res.end("Listing Bands error.");
    });
};

// GET: http://localhost:3000/bands/bandsbyleague/:id
Controller.listBandsByLeague = (req, res) => {
  let id = req.params.id;
  service
    .listBandsByLeague(id)
    .then(bands => {
      if (bands) {
        res.json(bands);
      } else {
        res.end("No Bands found for Leagues.");
      }
    })
    .catch(err => {
      console.log(`Listing Bands for Leagues error: ${err}`);
      res.end("Listing Bands for Leagues error.");
    });
};

// GET: http://localhost:3000/bands/membersbyteam/:id
Controller.listMembersByBand = (req, res) => {
  let id = req.params.id;
  service
    .listMembersByBand(id)
    .then(members => {
      if (members) {
        res.json(members);
      } else {
        res.end("No Members found for Band.");
      }
    })
    .catch(err => {
      console.log(`Listing Members for Bands error: ${err}`);
      res.end("Listing Members for Bands error.");
    });
};
// END ALL GETS

// START ALL POSTS
// POST: http://localhost:3000/bands/allbands
Controller.createBand = (req, res) => {
  let bandName = req.body.bandName;
  let leagueName = req.body.leagueName;
  let leagueId = req.body.leagueId;
  let managerName = req.body.managerName;
  let managerPhone = req.body.managerPhone;
  let managerEmail = req.body.managerEmail;
  let maxTeamMembers = req.body.maxTeamMembers;
  let minMemberAge = req.body.minMemberAge;
  let maxMemberAge = req.body.maxMemberAge;
  let teamGender = req.body.teamGender;
  service
    .createBand({
      TEAMNAME: bandName,
      LEAGUENAME: leagueName,
      LEAGUEID: leagueId,
      MANAGERNAME: managerName,
      MANAGERPHONE: managerPhone,
      MANAGEREMAIL: managerEmail,
      MAXTEAMMEMBERS: maxTeamMembers,
      MINMEMBERAGE: minMemberAge,
      MAXMEMBERAGE: maxMemberAge,
      TEAMGENDER: teamGender
    })
    .then(band => {
      if (band) {
        res.json(band);
      } else {
        res.end("Band not created.");
      }
    })
    .catch(err => {
      console.log(`Creating Band error: ${err}`);
      res.end("Creating Band error.");
    });
};

// POST: http://localhost:3000/bands/membersbyband/:id
// NOT FUNCTIONAL
Controller.createMemberForBand = (req, res) => {
  let email = req.body.email;
  let memberName = req.body.memberName;
  let teamName = req.body.teamName;
  let teamId = req.params.id;
  let contactName = req.body.contactName;
  let age = req.body.age;
  let gender = req.body.gender;
  let phone = req.body.phone;

  service
    .createMemberForBand({
      EMAIL: email,
      MEMBERNAME: memberName,
      TEAMNAME: teamName,
      TEAMID: teamId,
      CONTACTNAME: contactName,
      AGE: age,
      GENDER: gender,
      PHONE: phone
    })
    .then(member => {
      if (member) {
        res.json(member);
      } else {
        res.end("Member not created for Band.");
      }
    })
    .catch(err => {
      console.log(`Creating Member for Band error: ${err}`);
      res.end("Creating Member for Band error.");
    });
};
// END ALL POSTS

// START ALL PUTS
// PUT: http://localhost:3000/bands/all/:id
Controller.updateBand = (req, res) => {
  let id = req.params.id;
  let bandName = req.body.bandName;
  let leagueName = req.body.leagueName;
  let leagueId = req.body.leagueId;
  let managerName = req.body.managerName;
  let managerPhone = req.body.managerPhone;
  let managerEmail = req.body.managerEmail;
  let maxTeamMembers = req.body.maxTeamMembers;
  let minMemberAge = req.body.minMemberAge;
  let maxMemberAge = req.body.maxMemberAge;
  let teamGender = req.body.teamGender;
  service
    .updateBand(id, {
      ID: id,
      TEAMNAME: bandName,
      LEAGUENAME: leagueName,
      LEAGUEID: leagueId,
      MANAGERNAME: managerName,
      MANAGERPHONE: managerPhone,
      MANAGEREMAIL: managerEmail,
      MAXTEAMMEMBERS: maxTeamMembers,
      MINMEMBERAGE: minMemberAge,
      MAXMEMBERAGE: maxMemberAge,
      TEAMGENDER: teamGender
    })
    .then(band => {
      if (band) {
        res.json(band);
      } else {
        res.end("Band not updated.");
      }
    })
    .catch(err => {
      console.log(`Updating Band error: ${err}`);
      res.end("Updating Band error.");
    });
};

// PUT: Edit Member WIP
// END ALL PUTS

// START ALL DELETES
// DELETE: http://localhost:3000/bands/all/:id
Controller.deleteBand = (req, res) => {
  let id = req.params.id;
  service
    .deleteBand(id)
    .then(band => {
      if (band) {
        res.json(band);
      } else {
        res.end("Band not deleted.");
      }
    })
    .catch(err => {
      console.log(`Deleting Band error: ${err}`);
      res.end("Deleting Band error.");
    });
};
// END ALL DELETES

module.exports = Controller;
