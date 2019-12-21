const express = require('express');
const cors = require('cors');
// const session = require('express-session');
require('./db/mongoose');

const app = express();

// CORS
app.use(cors());

// JSON Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Load Route
const userRoute = require('./routes/userRoute');

// Use Route
app.use(userRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log('Server is up on port', port);
});
