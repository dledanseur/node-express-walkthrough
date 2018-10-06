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

router.post('/', function(req, res, next) {
  let user = {
    name: req.body.name,
    email: req.body.email
  }

  userService.saveUser(user).then ( (user) => {
    res.send(user);
  }).catch ( (e) => {
    console.log(e);
    res.status(500).send({message: e.message});
  })
});

module.exports = router;
