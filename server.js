
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
// const router = express.Router();
const { data } = require('./data/employeeDB.json');

var app = express();

app.use(bodyParser.urlencoded({extended: false})); //The server now understands the information submitted in forms

app.set('view engine', 'pug'); //Pug is shorthand syntax for HTML 
// const routes = require('./routes'); //because this folder has a index.js file, we don't need to refer to it when we require it

// app.use(routes); 
// app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send(data.employees);
});

// app.get( ,() => {

// });

//Error Handling
// app.use((req, res, next) => {
//     console.log("Hello");
//     const err = new Error('Oh boy, there was an error');
//     err.status = 500;
//     next(err);
// });


//3. If you hit the endpoint with an incorrect employeeID, 
// send back the correct HTTP status code and an error message stating that the employee was not found.
    // router.use((err, req, res, next) => {
        // res.locals.error = err;
        // res.status(err.status);
        // res.render('error', err );
    // });

// Best place to put 404 error handling is after all the other routes have been declared
    app.use((req, res, next) => {
        const err = new Error('Not Found');
        err.status = 404;
        next(err);
    });


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