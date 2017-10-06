
//Mongoose Setup
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
var Schema = mongoose.Schema;


// MEDIUM: Create an express API that will have 10 employees in it, their employeeID, 
// their name, their salary and department name. When you hit the endpoint with a GET request 
// we want the api to respond with all data on the employees. If you hit 
// the endpoint with their employeeID, we want to hand up only the information 
// on that one employee. If you hit the endpoint with an incorrect employeeID, 
// send back the correct HTTP status code and an error message stating that the employee was not found.
// GET::myendpointname.com/employees = Json with information from all 10 employees.
// GET::myendpointname.com/employees/<employeeID> = Json with the information from that specific employee.
var _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const { data } = require('./data/employeeDB.json');
const {EmployeeAdder} = require('./employeeAdder');

var app = express();

app.use(bodyParser.json()); //The server now understands the information submitted in forms

console.log(data.employees);

//1. When you hit the endpoint with a GET request we want the api to respond with all data on the employees. 
app.get('/', (req, res) => {
    res.send(data.employees);
});

//2. If you hit the endpoint with their employeeID, we want to hand up only the information on that one employee.
//3. If you hit the endpoint with an incorrect employeeID, 
// send back the correct HTTP status code and an error message stating that the employee was not found.

app.get('/:id', (req, res) => {
    const employeeID = req.params.id;
    console.log(req.params);

    const employeeObj = data.employees.find( (employee) => {
        return employeeID == employee.employeeID;
    });

    if (!employeeObj) {
      res.status(404).send('Opps, we could not find that employee.');  
    };
    res.send(employeeObj);    
});


//HARD: Add the remaining CRUD functionality to your medium problem. 
// Make sure you return the proper HTTP status codes based on the outcome 
// of the request. Be sure to implement error checking here. If an invalid 
// request is made, we want to return some sort of error message and the 
// correct HTTP status code for the situation.
// HTTP Status Codes: http://www.restapitutorial.com/httpstatuscodes.html
 
// POST::myendpointname.com/employees  =  Inserts new employee into your data.
app.post('/form', (req, res) => {
    var newEmployee = new EmployeeAdder({
        employeeID: req.body.employeeID,
        name: req.body.name,
        salary: req.body.salary,
        department: req.body.department
    });

    newEmployee.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});
  
// GET::myendpointname.com/employees = Returns json with information from all employees.
// GET::myendpointname.com/employees/<employeeID>  =  Returns json with the information from that specific employee.
// PUT::myendpointname.com/employees/<employeeID>  =  Updates information for specified employee.
app.put('/form', (req, res) => {

});
// DELETE::myendpointname.com/employees/<employeeID>  =  Removes the employee with that ID from your data.



app.listen(3000, () => {
    console.log(`Shane's application is running on localhost:3000!`);
});

module.exports = {app};