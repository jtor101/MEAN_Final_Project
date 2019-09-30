var service = require("../services/usersService");

var Controller = {};

// GET: http://localhost:3000/users/allusers
Controller.listUsers = (req, res) => {
  service
    .listUsers()
    .then(users => {
      if (users) {
        res.json(users);
      } else {
        res.end("No Users found.");
      }
    })
    .catch(err => {
      console.log(`Listing Users error: ${err}`);
      res.end("Listing Users error.");
    });
};

Controller.getUser = (req, res) => {
  service
    .getUser(req.params.id)
    .then(user => {
      if (user) {
        res.json(user);
      } else {
        res.end("No Users found for User ID.");
      }
    })
    .catch(err => {
      console.log(`Listing User for User ID error: ${err}`);
      res.end("Listing User for User ID error.");
    });
};

// POST: http://localhost:3000/users/login
Controller.loginUser = (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  service
    .loginUser({
      USERNAME: username,
      PASSWORD: password
    })
    .then(userl => {
      if (userl) {
        console.log(1);
        res.json(userl);
      } else {
        console.log(2);
        res.send("User not logged in.");
        res.status(403).send;
      }
    })
    .catch(err => {
      console.log(`User login error: ${err}`);
      res.end("User login error.");
    });
};

// POST: http://localhost:3000/users/register
Controller.createUser = (req, res) => {
  let username = req.body.username;
  let password = req.body.password;
  let email = req.body.email;
  service
    .createUser({
      USERNAME: username,
      PASSWORD: password,
      EMAIL: email
    })
    .then(userv => {
      if (userv) {
        res.json(userv);
      } else {
        res.end("User not created.");
      }
    })
    .catch(err => {
      console.log(`Creating User error: ${err}`);
      res.end("Creating User error.");
    });
};

Controller.updateUser = (req, res) => {
  console.log("*****");
  let id = req.params.id;
  let email = req.body.email;
  console.log(`${id}: ${email}`);
  service
    .updateUser(id, {
      EMAIL: email
    })
    .then(user => {
      if (user) {
        res.json(user);
      } else {
        res.end("User not updated.");
      }
    })
    .catch(err => {
      console.log(`Updating User error: ${err}`);
      res.end("Updating User error.");
    });
};

Controller.deleteUser = (req, res) => {
  let id = req.params.id;
  service
    .deleteUser(id)
    .then(user => {
      if (user) {
        res.json(user);
      } else {
        res.end("User not deleted.");
      }
    })
    .catch(err => {
      console.log(`Deleting User error: ${err}`);
      res.end("Deleting User error.");
    });
};

module.exports = Controller;
