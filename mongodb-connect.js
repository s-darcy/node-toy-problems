const {MongoClient, ObjectID} = require('mongodb'); //this is in destructuring syntax. 

MongoClient.connect('mongodb://localhost:27017/EmployeeDB', (err, db) => {
    if (err) {
        return console.log('Unable to connect to mongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Employees').insertOne({
        name: 'firstName',
        employeeID: '9999',
        salary: '0000000',
        department: 'RV'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert todo', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    db.close(); //this closes the MongoDB server
});