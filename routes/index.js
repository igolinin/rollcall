var express = require('express');
var router = express.Router();
const Lecture = require('../models/lectures');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("hello world")
});
//CHEK IN======================================================================================================
router.get('/checkin'/* , isLoggedIn */, function(req, res) {
    var options = {
        weekday: "short",
        year: "numeric",
        month: "2-digit",
        day: "numeric",
        hour:"numeric",
        minute:"numeric",
        second:"numeric"
    };
    time = Date.now().toLocaleString('da', options);
    console.log(time);
    res.render('./checkin.ejs', {
        user : "req.user",
        time : time
    });
});
//LECTURES================================================================================================================
router.get('/lectures'/* , isLoggedIn */, function(req, res) {
    var newLecture = new Lecture();
    var lectures;
    newLecture.findByStudent('5ae3217b099468229c6081e7' ,(err,result)=>{
        if(err)console.log(err);
        else {
            res.render('./lectures.ejs',{
                lectures: result,
                user : "user"
            })}
    });
    
});
module.exports = router;