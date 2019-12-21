const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		required: true
	},
	email: {
		type: String,
		required: true,
		trim: true,
		validate: {
			validator: validator.isEmail,
			message: 'Please enter a valid email'
		}
	},
	number: {
		type: Number,
		required: true,
		min: 1000000000,
		max: 9999999999
	},
	course: {
		type: String,
		required: true
	},
	country: [
		{
			type: String,
			required: true
		}
	],
	dob: {
		type: Date
	}
});

const User = mongoose.model('User', userSchema);

module.exports = User;
