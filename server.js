const express = require('express');
const router = require('./routes.js');  // Import the router before using it
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use('/api', router);  // Use the router after importing

// Server Setup
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
