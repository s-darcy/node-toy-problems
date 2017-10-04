const express = require('express');
const router = express.Router();
const { data } = require('../data/employeeDB.json');
const { employees } = data; // this is the ES6 syntax for data.employees





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

// 
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
