const express = require('express');
const router = new express.Router();
const User = require('../models/user');

router.post('/info', async (req, res) => {
	const user = {
		name: req.body.name,
		email: req.body.email,
		number: req.body.number,
		course: req.body.course
	};

	let country = [];
	req.body.country.map((c) => country.push(c.value));
	user.country = country;

	if (req.body.dob) {
		user.dob = req.body.dob;
	}

	try {
		const existingUser = await User.findOne({ email: user.email });

		if (existingUser) {
			existingUser.name = user.name;
			existingUser.number = user.number;
			existingUser.course = user.course;

			if (user.dob) {
				existingUser.dob = user.dob;
			}

			await existingUser.save();
		} else {
			await new User(user).save();
		}

		res.send(user);
	} catch (e) {
		res.status(400).send(e);
	}
});

router.post('/details', async (req, res) => {
	const email = req.body.email;

	try {
		const user = await User.findOne({ email });

		if (user) {
			res.json(user);
		} else {
			res.json('Email not found!!!');
		}
	} catch (e) {
		res.status(400).send(e);
	}
});

module.exports = router;
