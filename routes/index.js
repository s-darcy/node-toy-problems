const express = require('express');
const router = express.Router();
const { data } = require('../data/employeeDB.json');
const { employees } = data; // this is the ES6 syntax for data.employees

console.log(data.employees);
//1. When you hit the endpoint with a GET request we want the api to respond with all data on the employees. 
router.get('/', (req, res) => {
    console.dir(req.body);
    res.send(data.employees);
    // res.render('index', {});
    // res.send('<p>employees[]</p>')
    // res.status(404).send('Sorry, we cannot find that!');
});

// router.get('/employees', (req, res) => {
//     res.locals.name = "Jason";
//     res.render('employeeInfo');
// });

/*
router.get('/:id', (req, res) => {
// DEPRICATED // res.send('employeeDB', req.body);

    const name = employees[req.params.id].name;
    const id = employees[req.params.id].id;
    const salary = employees[req.params.id].salary;
    const department = employees[req.params.id].department; 
    res.send('employeeInfo', {
        '<h2>name</h2>',
        '<p>id</p>''
    });
});
*/

// //2. If you hit the endpoint with their employeeID, we want to hand up only the information on that one employee.
// router.get('employees/:id', (req, res) => {
//   var id = req.params.id;
  
//   employees.findById(id).then((employees) => {
//         if (!employees){
//             return res.status(404).send();
//         }
//         res.send({employees});
//     }).catch((e) => {
//         res.status(400).send();
//     });
// });

module.exports = router;
