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
    var user='5ae3217b099468229c6081e7';
    var lectures;
    var options = {
        weekday: "short",
        year: "numeric",
        month: "2-digit",
        day: "numeric",
    };
    
    Lecture.find({'students.student':{$eq:user}}, (err,result)=>{
        if(err)console.log(err)
        else {
            lectures=result.slice();
            
            for(let i=0;i<lectures.length;i++){
                
                for(let j=0;j<lectures[i].students.length;j++){
                    
                    if(lectures[i].students[j].student==user&&lectures[i].students[j].present==true)
                        {
                            lectures[i].date=lectures[i].date.toLocaleString('da',options);
                            console.log(lectures[i].date)
                            lectures[i].pin='green';break;
                                                   
                        }
                    else {
                        lectures[i].pin='red';
                        
                    }
                }
            }
            res.render('./lectures.ejs',{
                
                lectures: lectures,

                user : "user"
            })
                
        }
    });
    
    
});
module.exports = router;