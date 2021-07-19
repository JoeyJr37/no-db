const express = require('express');
const app = express();
const PORT = 5000;
const { getEmployees, addEmployee, editEmployee, deleteEmployee,
    addEmployeeUpdate, editEmployeeUpdate, deleteEmployeeUpdate } = require('./controllers/employeeController');

// MIDDLEWARE
app.use(express.json());

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