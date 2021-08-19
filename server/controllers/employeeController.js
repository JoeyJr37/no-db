const employees = require('../data');
const db = (req) => req.app.get('db');

getEmployees = (req, res) => {
    db(req).get_employees().then(employees => {
        res.status(200).send(employees);
    }).catch(err => {
        console.log(`Error fetching employees: ${err}`);
        res.status(400).send(err);
    })
};

getUpdates = (req, res) => {
    db(req).get_updates().then(updates => {
        res.status(200).send(updates);
    }).catch(err => {
        console.log(`Error fetching updates: ${err}`);
    })
}

addEmployee = (req, res) => {
    const employee = req.body; 
    const { picture, first_name, last_name, birth_date, phone_number, 
        email_address, city, country, mentor, position } = employee;
    db(req).add_employee(first_name, last_name, position, country, city, email_address, 
        phone_number, mentor, birth_date, picture )
        .then(employees => {
            res.status(200).send(employees);
        }).catch(err => {
            console.log(`Error adding new employee: ${err}`);
            res.status(400).send(err);
        })
};

addEmployeeUpdate = (req, res) => {
    const { id: employeeId } = req.params;
    const update = req.body;
    const { messageText, updatedBy, updatedOn, concernLevel } = update;
    db(req).add_update([employeeId, messageText, updatedBy, updatedOn, concernLevel])
        .then(employees => {
            res.status(200).send(employees);
        }).catch(err => {
            console.log(`Error adding update: ${err}`);
        })
};

editEmployeeUpdate = (req, res) => {
    const { id: employeeId } = req.params;
    const update = req.body;
    const { id, messageText, updatedBy, updatedOn, concernLevel } = update;
    db(req).edit_update([id, messageText, updatedBy, updatedOn, concernLevel])
        .then(employees => {
            res.status(200).send(employees);
        }).catch(err => {
            console.log(`Error editting update: ${err}`);
        })
};


editEmployee = (req, res) => {
    const employee = req.body;
    const { id } = req.params;
    const { picture, first_name, last_name, birth_date, phone_number, email_address, city, country, mentor, position} = employee;
    db(req).edit_employee([id, first_name, last_name, position, country, city, email_address, phone_number, mentor, birth_date, picture])
        .then(employees => {
            res.status(200).send(employees);
        }).catch(err => {
            console.log(`Error editting employee: ${err}`);
        })
};

deleteEmployee = (req, res) => {
    const { id } = req.params;
    db(req).delete_employee(id)
        .then(employees => {
            res.status(200).send(employees);
        }).catch(err => {
            console.log(`Error deleting employee: ${err}`);
        })
};

deleteEmployeeUpdate = (req, res) => {
    const { employeeId, updateId } = req.params;
    db(req).delete_update([employeeId, updateId])
        .then(employees => {
            res.status(200).send(employees);
        }).catch(err => {
            console.log(`Error deleting update from employee: ${err}`);
        })
}

module.exports = { getEmployees, getUpdates, 
    addEmployee, addEmployeeUpdate, 
    editEmployee, editEmployeeUpdate, 
    deleteEmployee, deleteEmployeeUpdate };