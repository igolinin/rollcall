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
    Lecture.findOne({_id:{$eq:lecture_id}, 'students.student':{$in:student_id}}, {'students.$.present': 1}, (err,result)=>{
        if(err)console.log(err)
        else 
        return result.students[0].present;
    });

}
LectureSchema.methods.checkIn = function(lecture_id, student_id, callback){
    Lecture.update({_id:{$eq:lecture_id}, 'students.student':{$in:student_id}},{ $set: { 'students.$.present': 'true' }},callback);
};
LectureSchema.methods.genPin = function(course_id, callback){
    var pin = Math.floor(Math.random()*(9999-1000+1)+1000);
    var time =  Date.now();
    Lecture.update( {_id:{$eq:course_id}},{$set:{pin:pin,  pin_time:time}}, callback);

};

var Lecture = mongoose.model('Lecture', LectureSchema);
module.exports = Lecture;