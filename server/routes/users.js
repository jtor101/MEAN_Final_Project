var express = require("express");
const controller = require("../controllers/usersController");
var router = express.Router();

// GET: localhost:3000/users/allusers (show all users)
router.get("/allusers", controller.listUsers);

/* GET User Profile Data by User Name. */
// http://localhost:3000/users/:id
router.get("/:id", controller.getUser);

// START ALL POSTS
// POST: localhost:3000/users/register
router.post("/register", controller.createUser);

// POST localhost:3000/users/login
router.post("/login", controller.loginUser);
// END ALL POSTS

// START PUT
// PUT: localhost:3000/users/edituser/:id
router.put("/edituser/:id", controller.updateUser);

// START DELETE
// DELETE: localhost:3000/users/deleteuser/:id
router.delete("/deleteuser/:id", controller.deleteUser);

module.exports = router;
