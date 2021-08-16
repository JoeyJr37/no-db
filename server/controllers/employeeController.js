const employees = require('../data');
const db = (req) = req.app.get('db');

getEmployees = (req, res) => {
    db(req).get_employees().then(employees => {
        res.status(200).send(employees);
    }).catch(err => {
        console.log(`Error fetching data: ${err}`);
        res.status(400).send(err);
    })
};

addEmployee = (req, res) => {
    const employee = req.body;
    const lastEmployeeIndex = employees.length - 1;
    const id = employees[lastEmployeeIndex].id + 1;
    employee.id = +id;
    employees.push(employee);
    res.status(200).send(employees);
};

addEmployeeUpdate = (req, res) => {
    const { id } = req.params;
    const update = req.body;
    const index = employees.findIndex(e => e.id === +id);
    employees[index].updates.push(update);
    res.status(200).send(employees);
};

editEmployeeUpdate = (req, res) => {
    const { id } = req.params;
    const update = req.body;
    const index = employees.findIndex(e => e.id === +id);
    const employee = employees[index];
    const updateIndex = employee.updates.findIndex(u => u.id === update.id);
    employees[index].updates[updateIndex] = update;
    res.status(200).send(employees);
};


editEmployee = (req, res) => {
    const employee = req.body;
    const { id } = req.params;
    const index = employees.findIndex(e => e.id === +id);
    employee.id = +id;
    employees[index] = employee;
    res.status(200).send(employees);
};

deleteEmployee = (req, res) => {
    const { id } = req.params;
    const index = employees.findIndex(e => e.id === +id);
    employees.splice(index, 1);
    res.status(200).send(employees);
};

deleteEmployeeUpdate = (req, res) => {
    const { employeeId, updateId } = req.params;
    const index = employees.findIndex(e => e.id === +employeeId);
    const updateIndex = employees[index].updates.findIndex(u => u.id === +updateId);
    employees[index].updates.splice([updateIndex], 1);
    res.status(200).send(employees);
}

module.exports = { getEmployees, 
    addEmployee, addEmployeeUpdate, 
    editEmployee, editEmployeeUpdate, 
    deleteEmployee, deleteEmployeeUpdate };