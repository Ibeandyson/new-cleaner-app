const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const mongoose = require("mongoose");


const passport = require("passport");

// Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

// Load User model
const User = require("../../models/User");

// create Registre endpoint
router.post("/register", (req, res) => {
	// Form validation
	const { errors, isValid } = validateRegisterInput(req.body);
	// Check validation
	if (!isValid) {
		return res.status(400).json(errors);
	}
	User.findOne({ email: req.body.email }).then((user) => {
		if (user) {
			return res.status(400).json({ email: "Email already exists" });
		} else {
			const newUser = new User({
				username: req.body.username,
				email: req.body.email,
				phone: req.body.phone,
				address: req.body.address,
				password: req.body.password,
				files: req.body.files
			});

			// Hash password before saving in database
			bcrypt.genSalt(10, (err, salt) => {
				bcrypt.hash(newUser.password, salt, (err, hash) => {
					if (err) throw err;
					newUser.password = hash;
					newUser
						.save()
						.then((user) => res.json(user))
						.catch((err) => console.log(err));
				});
			});
		}
	});
});

//create login endpoint
router.post("/login", (req, res, next) => {
	// Form validation
	const { errors, isValid } = validateLoginInput(req.body);
	// Check validation
	if (!isValid) {
		return res.status(400).json(errors);
	}

	const email = req.body.email;
	const password = req.body.password;
	// Find user by email
	User.findOne({ email }).then((user) => {
		// Check if user exists
		if (!user) {
			return res.status(404).json({ emailnotfound: "Email not found" });
		}
		// Check password
		bcrypt.compare(password, user.password).then((isMatch) => {
			if (isMatch) {
				// User matched
				// Create JWT Payload
				const payload = {
					id: user.id,
					username: user.username
				};
				// Sign token
				jwt.sign(
					payload,
					keys.secretOrKey,
					{
						expiresIn: 3600 // 1 hour in seconds
					},
					(err, token) => {
						res.json({
							id: user.id,
							username: user.username,
							success: true,
							token: "Bearer " + token
						});
					}
				);
			} else {
				return res
					.status(400)
					.json({ passwordincorrect: "Password incorrect" });
			}
		});
	});
});

//Get api/user/curent
router.get(
	"/user_list",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		res.json({
			id: req.user.id,
			username: req.user.username
		});
	}
);

// get all users
router.get("/user", (req, res) => {
	User.find({})
		.then((users) => {
			res.json(users);
		})
		.catch((err) => {
			console.log(err);
		});
});

// delete users
router.delete("/userdelete/:id", (req, res) => {
	User.findByIdAndDelete(req.params.id)
		.then(() => {
			res.json(" user deleted");
		})
		.catch((err) => {
			console.log(err);
		});
});

module.exports = router;
