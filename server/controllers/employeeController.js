const employees = require('../data');

getEmployees = (req, res) => {
    res.status(200).send(employees);
};

addEmployee = (req, res) => {
    const employee = req.body;
    const lastEmployeeIndex = employees.length - 1;
    const id = employees[lastEmployeeIndex].id + 1;
    employee.id = +id;
    employees.push(employee);
    res.status(200).send(employees);
};

editEmployee = (req, res) => {
    const employee = req.body;
    const { id } = req.params;
    const index = employees.findIndex(e => e.id === +id);
    employee.id = +id;
    employee.updates = [{}];
    employees[index] = employee;
    res.status(200).send(employees);
};

deleteEmployee = (req, res) => {
    const { id } = req.params;
    const index = employees.findIndex(e => e.id === +id);
    employees.splice(index, 1);
    res.status(200).send(employees);
};

module.exports = { getEmployees, addEmployee, editEmployee, deleteEmployee };