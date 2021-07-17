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




// Initialize app and set port to listen
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));