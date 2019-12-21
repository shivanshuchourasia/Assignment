const mongoose = require('mongoose');

require('dotenv').config();

mongoose
	.connect(process.env.ATLAS_URI, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
		useUnifiedTopology: true
	})
	.then(() => {
		console.log('MongoDB Connected...');
	});
