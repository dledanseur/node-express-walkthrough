var express = require('express');
var router = express.Router();
var userService = require('../services/user.service');

/* GET users listing. */
router.get('/', function(req, res, next) {
  let users = userService.getAllUsers();

  res.send(users);
});

module.exports = router;
