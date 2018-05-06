const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Lecture = require('../models/lectures');


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

router.post('/getpin', (req, res)=>{
  newLecture = new Lecture();

  newLecture.genPin('5aedbde5270fe506683620a7', (err,result)=>{

    if(err)res.json({success:false})
    else {
      console.log(result);
      newLecture.findByID('5aedbde5270fe506683620a7',(err,result1)=>{
        if(err)console.log(err)
        else
        {let pin=result1.pin;
          let time=result1.pin_time;
          console.log(result1);
          res.json({success:true, pin:pin, time:time});}
      })
    };
  });
});

router.get('/dayslectures', (req, res)=>{
  newLecture = new Lecture();
  newLecture.findByDate('2018-05-9',(err,result)=>{
    if(err)console.log(err)
    else{
      res.json(result);
    }
  })

})



module.exports = router;
