const Leagues = require("../db/connection").Leagues;
const Bands = require("../db/connection").Teams;
const Members = require("../db/connection").Members;

var Service = {};

// START ALL GETS
// GET: http://localhost:3000/bands
Service.listLeagues = () => {
  return Leagues.findAll()
    .then(leagues => {
      return leagues;
    })
    .catch(error => {
      throw error;
    });
};

// GET: http://localhost:3000/bands/all
Service.listBands = () => {
  return Bands.findAll()
    .then(bands => {
      return bands;
    })
    .catch(error => {
      throw error;
    });
};

// GET: http://localhost:3000/bands/bandsbyleague/:id
Service.listBandsByLeague = id => {
  return Leagues.findByPk(id, {
    include: [
      {
        model: Bands
      }
    ]
  })
    .then(bands => {
      return bands;
    })
    .catch(error => {
      throw error;
    });
};

// GET: http://localhost:3000/bands/membersbyband/:id
Service.listMembersByBand = id => {
  return Bands.findByPk(id, {
    include: [
      {
        model: Members
      }
    ]
  })
    .then(members => {
      return members;
    })
    .catch(error => {
      throw error;
    });
};
// END ALL GETS

// START ALL POSTS
// POST: http://localhost:3000/bands/all
Service.createBand = bandObj => {
  return Bands.create(bandObj)
    .then(band => {
      return band;
    })
    .catch(error => {
      throw error;
    });
};

// POST: http://localhost:3000/bands/membersbyband/:id
// NOT FUNCTIONAL
Service.createMemberForBand = memberObj => {
  return Members.create(memberObj)
    .then(member => {
      return member;
    })
    .catch(error => {
      throw error;
    });
};
// END ALL POSTS

// START ALL PUTS
// PUT: http://localhost:3000/bands/all
Service.updateBand = (id, bandObj) => {
  return Bands.update(bandObj, { returning: true, where: { ID: id } })
    .then(bandUd => {
      return bandUd;
    })
    .catch(error => {
      throw error;
    });
};
// END ALL PUTS

// START ALL DELETES
// DELETE: http://localhost:3000/bands/all/:id
Service.deleteBand = id => {
  return Bands.destroy({ returning: true, where: { ID: id } })
    .then(band => {
      return band;
    })
    .catch(error => {
      throw error;
    });
};
// END ALL DELETES
module.exports = Service;
