//const express = require('express');
const mongoose = require('mongoose');
//const path = require('path');
//const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('../config/database');
const Lecture = require('../models/lectures');
const Schema = mongoose.Schema;



mongoose.connect(config.database); // connect to our database
mongoose.connection.on('connected',()=>{
    console.log('Connecected to mongoDB')
})
mongoose.Promise = global.Promise;

newLecture = new Lecture();

var Present = newLecture.findPresense('5aedbde5270fe506683620a7','5ae3217b099468229c6081e9', ()=>{})
console.log(Present);
/* newLecture.findPresense('5aedbde5270fe506683620a7','5ae3217b099468229c6081e9', (err,result)=>{
    if(err)console.log(err)
    else 
   console.log(result.students[0].present);
    
}); */
/* newLecture.genPin('5aedbde5270fe506683620a7',(err,result)=>{
    if(err)console.log(err)
    else console.log(result)}); */
/* newLecture.checkIn('5aedbde5270fe506683620a7','5ae3217b099468229c6081e9', (err,result)=>{
    if(err)console.log(err)
    else console.log(result)
}); */

/* Lecture.update({_id:{$eq:'5aedbde5270fe506683620a7'}, 'students.student':{$in:'5ae3217b099468229c6081e8' }},{ $set: { 'students.$.present': 'true' }},(err,result)=>{
    if(err)console.log(err)
    else console.log(result)
}); */

/* newLecture.findByDate('2018-05-24',(err,result)=>{
    if(err)console.log(err);
    else console.log(result);
})
 */

/* newLecture.findByStudentAndDate('5ae3217b099468229c6081e7','2018-05-24',(err,result)=>{
    if(err)console.log(err);
    else console.log(result);
}) */
/* newLecture.findByStudent('5ae3217b099468229c6081e7' ,(err,result)=>{
    if(err)console.log(err);
    else console.log(result);
}) */

/* Lecture.find({'students.student':{$eq:'5ae3217b099468229c6081e8'},'date':{$eq:'2018-05-24T00:00:00.000Z'}},(err, result)=>{
    if(err)console.log(err);
    else console.log(result.toString());
}).populate('students'); */ 

/* var newLecture = new Lecture();
newLecture.courseName = "Development of the large systems";
var date = new Date("2018-05-9");
date.setDate(date.getDate()+35);

newLecture.date = date;

newLecture.pin = "1234"
newLecture.pin_start = new Date();
newLecture.students = [{student:"5ae3217b099468229c6081e7",present:false},
{student:"5ae3217b099468229c6081e8",present:false},
{student:"5ae3217b099468229c6081e9",present:false},
{student:"5ae3217b099468229c6081e9",present:false},
{student:"5ae3217b099468229c6081ec",present:false},
{student:"5ae3217b099468229c6081ed",present:false},
{student:"5ae3217b099468229c6081ee",present:false},
{student:"5ae3217b099468229c6081ef",present:false},
{student:"5ae3217b099468229c6081f0",present:false},
{student:"5ae3217b099468229c6081f1",present:false},
{student:"5ae3217b099468229c6081f2",present:false},
{student:"5ae3217b099468229c6081f3",present:false},
{student:"5ae3217b099468229c6081f4",present:false},
{student:"5ae3217b099468229c6081f5",present:false}];
newLecture.addLecture(newLecture,(err,lecture)=>{
    if(err)console.log(err);
    else console.log('success');
}) */