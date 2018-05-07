const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var LectureSchema =  mongoose.Schema({
    courseName:{type: String},
    date:{type: Date},
    pin:{type: String},
    pin_time:{type: Date},
    students:[{student:{
        type: Schema.Types.ObjectId,
        ref: 'Student'},
        present:Boolean
    }],
});
LectureSchema.methods.addLecture = function(newLecture, callback){
    newLecture.save(callback);

};
LectureSchema.methods.findByStudent = function(id, callback){
    Lecture.find({'students.student':{$eq:id}},callback).populate('students');
};
LectureSchema.methods.findByStudentAndDate = function(id, date, callback){
    Lecture.find({'students.student':{$eq:id}, 'date':{$eq:date}},callback);
};
LectureSchema.methods.findByDate = function( date, callback){
    Lecture.find({date:{$eq:date}},callback);
};
LectureSchema.methods.findPresense = function(lecture_id, student_id, callback){
    Lecture.findOne({_id:{$eq:lecture_id}, 'students.student':{$in:student_id}}, 'students.$.present', callback);

}
LectureSchema.methods.findByID=function(lecture_id, callback){
    Lecture.findOne({_id:{$eq:lecture_id}}, callback);
}
LectureSchema.methods.checkIn = function(lecture_id, student_id, callback){
    Lecture.update({_id:{$eq:lecture_id}, 'students.student':{$in:student_id}},{ $set: { 'student.$.present': 'true' }},callback);
};
/* function getResult(result){
    return result.slice();
}
LectureSchema.methods.LecturesWithPresense = function(student_id){
    var lectures;
    Lecture.find({'students.student':{$eq:student_id}}, (err,result)=>{
        if(err)console.log(err)
        else {
            lectures=getResult(result);
            console.log(lectures.length);
            for(let i=0;i<lectures.length;i++){
                console.log(i);
                for(let j=0;j<lectures[i].students.length;j++){
                    console.log(lectures[i].students.length);
                    console.log(lectures[i].students[j].student+'current');
                    //console.log(student_id);
                    if(lectures[i].students[j].student==student_id&&lectures[i].students[j].present==true)
                        {
                            lectures[i].pin='0000';
                            console.log(lectures[i].present12+Date.now());
                        
                        }
                    else {
                        lectures[i].pin='1111';
                        console.log(lectures[i].present12+Date.now());
                    }
                }
            }
            console.log(lectures+Date.now());
                
        }
    });
    /* for(let i=0;i<lectures.length;i++){
        for(let j=0;j<lectures[i].students[j].lenght;j++){
            if(lectures[i].student[j].student==student_id&&lectures[i].student[j].present==true)
                lectures[i].present12=true;
        }
    } 
    console.log(lectures);
}; */
LectureSchema.methods.genPin = function(course_id, callback){
    var pin = Math.floor(Math.random()*(9999-1000+1)+1000);
    var time =  new Date();
    time = time.setMinutes(time.getMinutes()+20);
    console.log(time-Date.now());
    Lecture.update( {_id:{$eq:course_id}},{$set:{pin:pin,  pin_time:time}}, callback);

};

var Lecture = mongoose.model('Lecture', LectureSchema);
module.exports = Lecture;