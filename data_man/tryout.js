var express  = require('express');
var app      = express();
var port     = process.env.PORT || 8080;
var mongoose = require('mongoose');
var passport = require('passport');
var flash    = require('connect-flash');

var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser   = require('body-parser');
var session      = require('express-session');
var Module = require('./app/models/module');

var configDB = require('./config/database.js');

mongoose.connect(configDB.url, {useMongoClient: true}); // connect to our database
mongoose.connection.on('connected',()=>{
    console.log('Connecected to mongoDB')
})
mongoose.Promise = global.Promise;

newModule = new Module();
newModule.findByStudent('1234',(err,result)=>{
    if(err)console.log(err);
    else console.log(result);
})

/* Module.find({'students.id':{$eq:'1234'}},(err, result)=>{
    if(err)console.log(err);
    else console.log(result);
}) */

/* var newModule = new Module();
newModule.courseName = "System Integration";
var date = new Date("2018-05-10");
date.setDate(date.getDate()+14);

newModule.date = date;

newModule.pin = "1234"
newModule.pin_start = new Date();
newModule.students = [{id:"1234",present:true},
{id:"1234",present:true},
{id:"2345",present:false},
{id:"3456",present:false},]
newModule.addModule(newModule,(err,module)=>{
    if(err)console.log(err);
    else console.log('success');
}) */