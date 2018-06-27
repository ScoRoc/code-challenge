var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/user');
// var bcrypt = require('bcrypt');
var expressJWT = require('express-jwt');
var jwt = require('jsonwebtoken');

router.post('/signup', (req, res) => {
  User.findOne({ email: req.body.email.toLowerCase() }, function(err, user) {
    if (user) {
      res.redirect('/auth/signup')
    } else {
      User.create({
        name: req.body.name,
        email: req.body.email.toLowerCase(),
        password: req.body.password,
      }, function(err, user) {
        if (err) {
          console.log("GOT AN ERROR CREATING THE USER")
          res.send(err)
        } else {
          console.log("JUST ABOUT TO SIGN THE TOKEN")
          var token = jwt.sign(user.toObject(), process.env.JWT_SECRET, {
            expiresIn: 60 * 60 * 24
          });
          res.json({user: user.toObject(), token})
        }
      });
    }
  });
});

module.exports = router;
