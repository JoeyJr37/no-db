const express = require('express');
const app = express();
const PORT = 5000;
const { getEmployees, addEmployee, editEmployee, deleteEmployee } = require('./controllers/employeeController');

// MIDDLEWARE
app.use(express.json());

// ENDPOINTS

app.get('/api/employees', getEmployees)

app.post('/api/employees', addEmployee)

app.put('/api/employees/:id', editEmployee )

app.delete('/api/employees/:id', deleteEmployee )



// Initialize app and set port to listen
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));