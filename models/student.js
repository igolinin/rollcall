const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// Student Schema
const StudentSchema = mongoose.Schema({
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
  },
  course: {
    type: String,
    required: true
  },
  group: {
    type: String,
    required: true
  }
});

const Student = module.exports = mongoose.model('Student', StudentSchema);

// Methods
getStudentById = (id, callback) => {
  Student.findById(id, callback);
}

module.exports.getStudentByName = (name, callback) => {
  const query = {name: name};
  Student.findOne(query, callback);
}

module.exports.getStudentByEmail = (email, callback) => {
  const query = {email: email};
  Student.findOne(query, callback);
}

module.exports.addStudent = function(newStudent, callback) {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newStudent.password, salt, (err, hash) => {
      if (err) throw err;
      newStudent.password = hash;
      newStudent.save(callback);
    });
  });
}

module.exports.deleteStudentByName = (name, callback) =>  {
  const query = {name: name};
  Student.remove(query, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err
    callback(null, isMatch);
  });
};
