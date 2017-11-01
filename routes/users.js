var express = require('express');
var router = express.Router();
var userService = require('../services/user.service');

/* GET users listing. */
router.get('/', function(req, res, next) {
  userService.getAllUsers().then ((users) => {
    res.send(users);
  }).catch ( (e)  => {
    console.log(e);
    res.status(500).send({message: e.message});
  }) 
});

module.exports = router;
