const employees = require('../data');
const db = (req) => req.app.get('db');

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
    console.log(employee);
    const { picture, first_name, last_name, birth_date, phone, email, city, country, mentor, position } = employee;
    const { updates } = employee;
    const { text, updatedBy, updatedOn } = updates;
    db(req).add_employee(first_name, last_name, position, country, city, email, 
        phone, mentor, birth_date, picture )
        .then(employeeId => {
            db(req).add_update(employeeId, text, updatedBy, updatedOn)
                .then(employees => {
                    res.status(200).send(employees);
                }).catch(err => {
                    console.log(`Error adding update to new employee: ${err}`);
                })
        }).catch(err => {
            console.log(`Error adding new data: ${err}`);
            res.status(400).send(err);
        })
};

addEmployeeUpdate = (req, res) => {
    const { id: employeeId } = req.params;
    const update = req.body;
    const { text, updatedBy, updatedOn, concernLevel } = update;
    db(req).add_update(employeeId, text, updatedBy, updatedOn, concernLevel)
        .then(employees => {
            res.status(200).send(employees);
        }).catch(err => {
            console.log(`Error adding update: ${err}`);
        })
};

editEmployeeUpdate = (req, res) => {
    const { id: employeeId } = req.params;
    const update = req.body;
    const { id, text, updatedBy, updatedOn, concernLevel } = update;
    console.log(update);
    db(req).edit_update(id, text, updatedBy, updatedOn, concernLevel)
        .then(employees => {
            res.status(200).send(employees);
        }).catch(err => {
            console.log(`Error editting update: ${err}`);
        })
};


editEmployee = (req, res) => {
    const employee = req.body;
    const { id } = req.params;
    console.log(employee);
    const { picture, first_name, last_name, birth_date, phone, email, city, country, mentor, position} = employee;
    db(req).edit_employee(id, first_name, last_name, position, country, city, email, phone, mentor, birth_date, picture)
        .then(employees => {
            res.status(200).send(employess);
        }).catch(err => {
            console.log(`Error editting employee: ${err}`);
        })
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