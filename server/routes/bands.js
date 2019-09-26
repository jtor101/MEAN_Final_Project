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

// START ALL PUTS
// PUT: localhost:3000/bands/all/:id
router.put("/allbands/:id", controller.updateBand);
// END ALL PUTS

module.exports = router;
