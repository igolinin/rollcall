// Imports
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config/database');
const student = require('./models/student');
const course = require('./models/course');
const teacher = require('./models/teacher');
const uniClass = require('./models/uniclass');

// DATABASE CONNECTION

// Promise libary
mongoose.Promise = require('bluebird');

// Connect To Database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database ' + config.database)
})

// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error : ' + err);
});

// Declare express variable
const app = express();

// CORS Middleware
app.use(cors());

//Body Parser Middleware
app.use(bodyParser.json());

// DB test
// Create objects
let ogyun = new student({
  name : "Ogyun Dzambazov",
  email: "ogyun@gmail.dk",
  password: "ogyun",
  phonenumber: "+4540404040",
  keaMail: "ogyudza@kea.dk",
  course: "Computer Science",
  group: "SoftwareTeam11"
});

let igor = new student({
  name : "Igor Akulinin",
  email: "igor@gmail.dk",
  password: "igor",
  phonenumber: "+4540505050",
  keaMail: "igaku@kea.dk",
  course: "Computer Science",
  group: "SoftwareTeam11"
});

let softDev = new course({
  name : "Software Development",
  campus: "Lygten 37",
  length: 3
});

let webDev = new course({
  name : "Web Development",
  campus: "Lygten 16",
  length: 3
});

let dora = new teacher({
  name : "Dora Dimitrova",
  email: "dora@gmail.dk",
  password: "dora",
  phonenumber: "+4540122112",
  keaMail: "dodi@kea.dk"
});

let andrea = new teacher({
  name : "Andrea Corradini",
  email: "andrea@gmail.dk",
  password: "andrea",
  phonenumber: "+4540233223",
  keaMail: "anco@kea.dk"
});

// Add objects to db
// student.addStudent(ogyun);
// student.addStudent(igor);
// course.addCourse(softDev);
// course.addCourse(webDev);
// teacher.addTeacher(dora);
// teacher.addTeacher(andrea);
// uniClass.addUniClass(si);

// Set port number
const port = process.env.PORT || 3000;
// Start server
app.listen(port, () => {
  console.log('Server startet on port ' + port);
});

//Get id's 
var ogyid;
student.getStudentByEmail("igor@gmail.dk", (err, student) => {
  if(err) throw err;
  ogyid = student._id
  console.log("Ogyun: " + ogyid);
} );
var igorid;
student.getStudentByEmail("ogyun@gmail.dk", (err, student) => {
  if(err) throw err;
  igorid = student._id
  console.log("Igor: " + igorid);
} );
var andreaid;
teacher.getTeacherByEmail("andrea@gmail.dk", (err, teacher) => {
  if(err) throw err;
  andreaid = teacher._id
  console.log("Andrea: " + andreaid);
} );
var doraid;
teacher.getTeacherByEmail("dora@gmail.dk", (err, teacher) => {
  if(err) throw err;
  doraid = teacher._id
  console.log("Dora: " + doraid);
} );
var courseid;
course.getCourseByCampus("Lygten 37", (err, course) => {
  if(err) throw err;
  courseid = course._id
  console.log("Soft Dev: " + courseid);
} );

// var dateToGet = new Date();
// let si = new uniClass({
//   course: courseid,
//   teacher: andreaid,
//   date: dateToGet,
//   room: "A555",
//   pincode: "thisshouldbeautomatic",
//   start: new Date(),
//   numOfUniClasses: 7,
//   supposedStudents: ["5ae32801de47cf31085007f3", "5ae32801de47cf31085007f2"],
//   presentStudents: ["5ae32801de47cf31085007f3", "5ae32801de47cf31085007f2"]
// });
// uniClass.addUniClass(si);

uniClass.getUniClassRoom("A555", (err, uniClass) => {
  if(err) throw err;
  console.log("Class: " + uniClass);
} );
// uniClass.deleteUniClassByDateAndRoom(dateToGet, "A222",(err, uniClass) => {
//   if(err) throw err;
// } );