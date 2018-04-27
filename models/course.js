const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database');

// Teacher Schema
const CourseSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  campus: {
    type: String,
    required: true
  },
  length: {
    type: Number,
    required: true
  }
});

const Course = module.exports = mongoose.model('Course', CourseSchema);

// Methods
getCourseById = (id, callback) => {
    Course.findById(id, callback);
}

module.exports.getCourseByName = (name, callback) => {
  const query = {name: name};
  Course.findOne(query, callback);
}

module.exports.getCourseByCampus = (campus, callback) => {
    const query = {campus: campus};
    Course.findOne(query, callback);
}

module.exports.getCourseByLength = (length, callback) => {
    const query = {length: length};
    Course.findOne(query, callback);
}

module.exports.addCourse = function(newCourse, callback) {
    newCourse.save(callback);
}

module.exports.deleteCourseByCourseName = (name, callback) =>  {
  const query = {name: name};
  Course.remove(query, callback);
}

