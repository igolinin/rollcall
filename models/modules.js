

const mongoose = require('mongoose');

var ModuleSchema =  mongoose.Schema({
    courseName:{type: String},
    date:{type: Date},
    pin:{type: String},
    pin_time:{type: Date},



    students:[{
        id:String,
        present:Boolean
    }],

});
ModuleSchema.methods.addModule = function(newModule, callback){
    newModule.save(callback);

};
ModuleSchema.methods.findByStudent = function(id, callback){
    Module.find({'students.id':{$eq:id}},callback)
};

var Module = mongoose.model('Module', ModuleSchema);
module.exports = Module;