
// MEDIUM: Create an express API that will have 10 employees in it, their employeeID, 
// their name, their salary and department name. When you hit the endpoint with a GET request 
// we want the api to respond with all data on the employees. If you hit 
// the endpoint with their employeeID, we want to hand up only the information 
// on that one employee. If you hit the endpoint with an incorrect employeeID, 
// send back the correct HTTP status code and an error message stating that the employee was not found.
// GET::myendpointname.com/employees = Json with information from all 10 employees.
// GET::myendpointname.com/employees/<employeeID> = Json with the information from that specific employee.

const express = require('express');
const bodyParser = require('body-parser');
const { data } = require('./data/employeeDB.json');

var app = express();

app.use(bodyParser.urlencoded({extended: false})); //The server now understands the information submitted in forms


console.log(data.employees);

//1. When you hit the endpoint with a GET request we want the api to respond with all data on the employees. 
app.get('/', (req, res) => {
    res.send(data.employees);
});

//2. If you hit the endpoint with their employeeID, we want to hand up only the information on that one employee.
app.get('/:shane', (req, res) => {
    const employeeID = req.params.shane;
    console.log(req.params);
    const employeeObj = data.employees.find( (employee) => {
        return employeeID == employee.employeeID;
    });
    if (!employeeObj) {
      res.status(404).send('Opps, we could not find that employee.');  
    };
    res.send(employeeObj);    
});

app.get('/:shane', (req, res) => {

});

    //     if (!employeeID == employee.employeeID) {
    //         res.status(400).send('Bad Request');
    //         res.status(404).send('Opps, we could not find that employee.');
    //         res.status(500).send(`I'm sorry. It seems like our system is down. Try back later.`);
    //     } else {
    //         res.send(employeeObj);
    //     }
    // }); 

//3. If you hit the endpoint with an incorrect employeeID, 
// send back the correct HTTP status code and an error message stating that the employee was not found.


// Best place to put 404 error handling is after all the other routes have been declared
    // app.use((req, res, next) => {
    //     const err = new Error('Not Found');
    //     err.status = 404;
    //     next(err);
    // });


app.listen(3000, () => {
    console.log(`Shane's application is running on localhost:3000!`);
});

module.exports = {app};

//HARD: Add the remaining CRUD functionality to your medium problem. 
// Make sure you return the proper HTTP status codes based on the outcome 
// of the request. Be sure to implement error checking here. If an invalid 
// request is made, we want to return some sort of error message and the 
// correct HTTP status code for the situation.
// HTTP Status Codes: http://www.restapitutorial.com/httpstatuscodes.html
 
// POST::myendpointname.com/employees  =  Inserts new employee into your data.
// GET::myendpointname.com/employees = Returns json with information from all employees.
// GET::myendpointname.com/employees/<employeeID>  =  Returns json with the information from that specific employee.
// PUT::myendpointname.com/employees/<employeeID>  =  Updates information for specified employee.
// DELETE::myendpointname.com/employees/<employeeID>  =  Removes the employee with that ID from your data.