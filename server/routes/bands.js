var express = require("express");
const controller = require("../controllers/bandsController");
var router = express.Router();

// START ALL GETS
// GET: localhost:3000/bands (show leagues)
router.get("/leagues", controller.listLeagues);

// GET: localhost:3000/bands/all (show all bands)
router.get("/allbands", controller.listBands);

// GET: localhost:3000/bands/bandsbyleague/:id (teams sort by league)
router.get("/bandsbyleague/:id", controller.listBandsByLeague);

// GET: localhost:3000/bands/membersbyband/:id (members sort by team)
router.get("/membersbyband/:id", controller.listMembersByBand);
// END ALL GETS

// START ALL POSTS
// POST: localhost:3000/bands/all
router.post("/allbands", controller.createBand);

/*
// POST: http://localhost:3000/bands/membersbyband/:id
// NOT FUNCTIONAL
router.post("/membersbyband/:id", controller.createMemberForBand);
// END ALL POSTS 
*/

// START ALL PUTS
// PUT: localhost:3000/bands/all/:id
router.put("/allbands/:id", controller.updateBand);
// END ALL PUTS

// START ALL DELETES
// DELETE: http://localhost:3000/bands/all/:id
// DELETES EMPTY TEAM, DOES NOT DELETE TEAM WITH MEMBERS
router.delete("/allbands/:id", controller.deleteBand);
// END ALL DELETES
module.exports = router;
