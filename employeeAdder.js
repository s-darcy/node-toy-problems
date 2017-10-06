var mongoose = require('mongoose');

var EmployeeAdder = mongoose.model('EmployeeAdder', {
    employeeID: {
        type: Number,
        required: false
    }, 
    name: {
        type: String,
        required: false
    },    
    salary: {
        type: Number,
        default: null
    }, 
    department: {
        type: String,
        default: null
    } 
});

module.exports = {EmployeeAdder};