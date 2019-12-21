const express = require('express');
const cors = require('cors');
require('./db/mongoose');

const app = express();

// Load Route
const userRoute = require('./routes/userRoute');

// Use Route
app.use(userRoute);

// Middlewares
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 5000;

app.listen(port, () => {
	console.log('Server is up on port', port);
});
