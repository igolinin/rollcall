

const mongoose = require('mongoose');

var ModuleSchema = new mongoose.Schema({
    courseName:{type: string},
    date:{type: Date},
    pin:{type: string},
    pin_time:{type: Date},



    students:[{
        id:string,
        present:boolean
    }],

})
ModuleSchema.methods.addModule = function(newModule, callback){
    newModule.save(callback);

}
var Module = mongoose.model('Module', ModuleSchema);
//module.exports = Module;