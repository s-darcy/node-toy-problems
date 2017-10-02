//EASY: Create a node application that will read all of the planets 
//in the solar system from a text file and print them to the console.
//Text file: mercury,venus,earth,mars,jupiter,saturn,uranus,neptune,pluto 
//(I still believe in you pluto)
const express = require('express');

const planets = require('/planets');

planets.


  
// MEDIUM: Create an express API that will have 10 employees in it, their employeeID, 
// their name, their salary and department name. When you hit the endpoint with a GET request 
// we want the api to respond with all data on the employees. If you hit 
// the endpoint with their employeeID, we want to hand up only the information 
// on that one employee. If you hit the endpoint with an incorrect employeeID, 
// send back the correct HTTP status code and an error message stating that the employee was not found.
// GET::myendpointname.com/employees = Json with information from all 10 employees.
// GET::myendpointname.com/employees/<employeeID> = Json with the information from that specific employee.




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