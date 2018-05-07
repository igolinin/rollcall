const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Student = require('../models/student');

// Authenticate
router.post('/studentAuthenticate', (req, res, next) => {

  const email = req.body.username;
  const password = req.body.password;

  Student.getStudentByEmail(email, (err, student) => {
    if(err) throw err;
    if(!student) {
      return res.json({msg : 'student not found'});
    }

    if(password == student.password) {

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

        res.json({
          success: true,
          token: 'JWT ' + token,
          user: {
            user: 'admin',
            id: student._id,
          //  email: user.email,
            username: email
          }
        });
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
});




module.exports = router;
