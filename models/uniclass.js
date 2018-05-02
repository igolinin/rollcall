const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');
const Schema = mongoose.Schema;

// Teacher Schema
const UniClassSchema = mongoose.Schema({
  course: {
    type: Schema.ObjectId,
    ref: 'Course'
  },
  date: {
    type: Date,
    required: true
  },
  room: {
    type: String,
    required: true
  },
  teacher: {
    type: Schema.ObjectId,
    ref: 'Teacher'
  },
  pincode: {
      type: String,
      required: true
  },
  start: {
      type: Date,
      required: true
  },
  numOfUniClasses: {
    type: Number,
    required: true
  },
  //we should have documents for all Uniclasses like in fronter, instead of writing every single student
  //this should become SoftwareTeam11 id; (for example)
  supposedStudents: [{
      type: Schema.Types.ObjectId,
      ref: 'Student'   
  }],
  presentStudents: [{
      type: Schema.Types.ObjectId,
      ref: 'Student'
  }]
});

const UniClass = module.exports = mongoose.model('UniClass', UniClassSchema);

// Methods
getUniClassById = (id, callback) => {
    UniClass.findById(id, callback);
}

module.exports.getUniClassByDateAndRoom = (date, room, callback) => {
  const query = {date: date, room: room};
  UniClass.findOne(query, callback);
}

module.exports.getUniByClassRoom = (room, callback) => {
  const query = {room: room};
  UniClass
  .findOne(query, callback)
  .populate({ path: 'supposedStudents', select: 'name -_id'})
  .populate({ path: 'presentStudents', select: 'name -_id'});
}

module.exports.getUniClassByPincode = (pincode, callback) => {
    const query = {pincode: pincode};
    UniClass.findOne(query, callback);
}

//teacher should be auto generated (taken from the current user who's logged in)
module.exports.addUniClass = function(newUniClass, callback) {
    newUniClass.save(callback);
}

module.exports.deleteUniClassByDateAndRoom = (date, room, callback) =>  {
  const query = {date: date, room: room};
  UniClass.remove(query, callback);
}

