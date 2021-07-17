const express = require('express');
const app = express();
const PORT = 5000;

const employees = require('./data');


// MIDDLEWARE
app.use(express.json());

// ENDPOINTS

app.get('/api/employees', (req, res) => {
    res.status(200).send(employees);
})

app.post('/api/employees', (req, res) => {
    const employee = req.body;
    const lastEmployeeIndex = employees.length - 1;
    const id = employees[lastEmployeeIndex].id + 1;
    employee.id = +id;
    employees.push(employee);
    res.status(200).send(employees);
})

app.put('/api/employees/:id', (req, res) => {
    const employee = req.body;
    const { id } = req.params;
    const index = employees.findIndex(e => e.id === +id);
    employee.id = +id;
    employee.updates = [{}];
    employees[index] = employee;
    res.status(200).send(employees);
})

app.delete('/api/employees/:id', (req, res) => {
    const { id } = req.params;
    const index = employees.findIndex(e => e.id === +id);
    employees.splice(index, 1);
    res.status(200).send(employees);
})



// Initialize app and set port to listen
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));