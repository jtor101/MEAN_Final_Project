const Users = require("../db/connection").Users;
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

var Service = {};

// GET: localhost:3000/users/allusers
Service.listUsers = () => {
  return Users.findAll()
    .then(users => {
      return users;
    })
    .catch(error => {
      throw error;
    });
};

// GET: localhost:3000/users/:id
Service.getUser = userId => {
  return Users.findOne({ where: { USERID: userId } })
    .then(user => {
      return user;
    })
    .catch(error => {
      throw error;
    });
};

// POST: localhost:3000/users/login
Service.loginUser = userObj => {
  return Users.findOne({
    returning: true,
    where: {
      USERNAME: userObj.USERNAME,
      PASSWORD: userObj.PASSWORD
    }
  })
    .then(user => {
      return user;
    })
    .catch(error => {
      throw error;
    });
};

// POST: localhost:3000/users/register
Service.createUser = userObj => {
  console.log(userObj);
  return Users.create(userObj)
    .then(user => {
      return user;
    })
    .catch(error => {
      throw error;
    });
};

// PUT: localhost:3000/users/edituser/:id
Service.updateUser = (id, userObj) => {
  return Users.update(userObj, { returning: true, where: { USERID: id } })
    .then(userUd => {
      return userUd;
    })
    .catch(error => {
      throw error;
    });
};

// DELETE: localhost:3000/users/deleteuser/:id
Service.deleteUser = id => {
  return Users.destroy({ returning: true, where: { USERID: id } })
    .then(user => {
      return user;
    })
    .catch(error => {
      throw error;
    });
};

module.exports = Service;
