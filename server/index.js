const express = require('express');
const app = express();
const PORT = 5000;

// MIDDLEWARE
app.use(express.json());

//
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));