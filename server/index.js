require('dotenv').config();
const express = require('express');
const massive = require('massive');
const app = express();
const { CONNECTION_STRING } = process.env;
const PORT = process.env.PORT || 5000;
const { getEmployees, addEmployee, editEmployee, deleteEmployee,
    addEmployeeUpdate, editEmployeeUpdate, deleteEmployeeUpdate } = require('./controllers/employeeController');

// MIDDLEWARE
app.use(express.json());


massive({
    connectionString: process.env.DATABASE_URL || CONNECTION_STRING,
    ssl: { rejectUnauthorized: false}
}).then(db => {
    app.set('db', db);
    console.log('DB connection established!');
}).catch(err => {
    console.log(`Error connecting DB: ${err}`);
})


// EMPLOYEE ENDPOINTS

app.get('/api/employees', getEmployees);
app.post('/api/employees', addEmployee);
app.put('/api/employees/:id', editEmployee);
app.delete('/api/employees/:id', deleteEmployee);

// UPDATES ENDPOINTS

app.post('/api/employees/:id', addEmployeeUpdate);
app.put('/api/employees/updates/:id', editEmployeeUpdate);
app.delete('/api/employees/updates/:employeeId/:updateId', deleteEmployeeUpdate);


// Initialize app and set port to listen
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));