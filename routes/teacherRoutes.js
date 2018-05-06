const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');

// Authenticate
router.post('/teacherAuthenticate', (req, res, next) => {

  const username = req.body.username;
  const password = req.body.password;

  /*
  User.getUserByUsername(username, (err, user) => {
    if(err) throw err;
    if(!user) {
      return res.json({success: false, msg: 'User not found'});
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch) {
  */

        const token = jwt.sign({data: "user"}, config.secret, {
          expiresIn: 7200 // 2 hours
        });

        if(username == 'teacher' && password == 'password') {
        res.json({
          success: true,
          token: 'JWT ' + token,
          user: {
            user: 'admin',
          //  id: user._id,
          //  email: user.email,
            username: username
          }
        });
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });


module.exports = router;
