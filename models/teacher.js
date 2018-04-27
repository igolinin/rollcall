const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// Teacher Schema
const TeacherSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  phonenumber: {
    type: String,
    required: false
  },
  keaMail: {
    type: String,
    required: false
  }
});

const Teacher = module.exports = mongoose.model('Teacher', TeacherSchema);

// Methods
getTeacherById = (id, callback) => {
  Teacher.findById(id, callback);
}

module.exports.getTeacherByName = (name, callback) => {
  const query = {name: name};
  Teacher.findOne(query, callback);
}

module.exports.getTeacherByEmail = (email, callback) => {
  const query = {email: email};
  Teacher.findOne(query, callback);
}

module.exports.addTeacher = function(newTeacher, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newTeacher.password, salt, (err, hash) => {
      if (err) throw err;
      newTeacher.password = hash;
      newTeacher.save(callback);
    });
  });
}

module.exports.deleteTeacherByName = (name, callback) =>  {
  const query = {name: name};
  Teacher.remove(query, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err
    callback(null, isMatch);
  });
};
