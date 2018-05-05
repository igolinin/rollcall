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


var Lecture = mongoose.model('Lecture', LectureSchema);
module.exports = Lecture;