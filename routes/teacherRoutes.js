
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Lecture = require('../models/lectures');
const Student = require('../models/student')

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

router.post('/genpin', (req, res)=>{
  let newLecture = new Lecture();
  let lecture_id='5aedbde5270fe506683620a7';
  newLecture.genPin(lecture_id, (err,result)=>{

    if(err)res.json({success:false})
    else {
      console.log(result);
      newLecture.findByID('5aedbde5270fe506683620a7',(err,result1)=>{
        if(err)console.log(err)
        else {
          let pin=result1.pin;
          let time=result1.pin_time;
          console.log(result1);
          res.json({success:true, pin:pin, time:time});}
        })
      };
    });
  });

  router.get('/dayslectures', (req, res)=>{
    let newLecture = new Lecture();
    newLecture.findByDate('2018-05-9',(err,result)=>{
      if(err)console.log(err)
      else{
        res.json(result);
      }
    })
  })

router.post('/getstats/:id',(req,res)=>{
  var id = req.params.id
  Lecture.findOne({_id:id}).populate({path:'students.student',model:'Students', select:'Studentname email'}).exec().then((lecture)=>{
      console.log(lecture.students)
      res.json(lecture.students);
  })
})
 /*  router.post('/getstats/:id', (req,res)=>{
    var id = req.params.id;
    let newLecture =new Lecture;
    let students=[];
    newLecture.findByID(id, (err, result)=>{
      if(err) console.log(err);
      else {
        console.log(result.students.length);
        for (let i=0; i < result.students.length; i++){
          Student.getStudentById(result.students[i].student, (err, result1)=>{
            if(err) console.log(err);
            else {
              students.push(result1);
              if(i==result.students.length-1)
              res.json(students);

            }
          })
        }
      }
    })
  }) */

  /*
  router.post('/getstats/:id', (req,res)=>{
  var id = req.params.id;
  newLecture =new Lecture;
  newLecture.findByID(id, (err, result)=>{
  if(err)console.log(err);
  else
  res.json(result);
})
})
*/

module.exports = router;
