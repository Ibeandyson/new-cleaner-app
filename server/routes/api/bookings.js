const express = require("express");
const router = express.Router();
const passport = require("passport");
const _ = require("lodash");
const request = require("request");
const bodyParser = require("body-parser");
const cors = require("cors");
//load booking model
const Booking = require("../../models/Booking");
//load user model
const User = require("../../models/User");
// Load input validation
const validateBookingInput = require("../../validation/booking");

//====load pay stack key===//
const { initializePayment, verifyPayment } = require("../../config/paystack")(
	request
);

// create user  bookings
router.post(
	"/booking",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		// booking validation
		const { errors, isValid } = validateBookingInput(req.body);
		// Check validation
		if (!isValid) {
			return res.status(400).json(errors);
		}
		//======paystack======//
		const form = _.pick(req.body, [
			"selected_plan",
			"email",
			"selected_room",
			"selected_duration",
			"amount",
			"location",
			"book_date",
			"time",
			"phone",
			"instruction"
		]);



		// const bookingsFields = {};
		// bookingsFields.user = req.user.id;
		// if (req.body.location) bookingsFields.location = req.body.location;
		// if (req.body.selected_room)
		// 	bookingsFields.selected_room = req.body.selected_room;
		// if (req.body.selected_plan)
		// 	bookingsFields.selected_plan = req.body.selected_plan;
		// if (req.body.amount) bookingsFields.amount = req.body.amount;
		// if (req.body.book_date) bookingsFields.book_date = req.body.book_date;
		// if (req.body.time) bookingsFields.time = req.body.time;
		// if (req.body.selected_duration)
		// 	bookingsFields.selected_duration = req.body.selected_duration;
		// if (req.body.phone) bookingsFields.phone = req.body.phone;
		// if (req.body.instruction) bookingsFields.instruction = req.body.instruction;

		//======paystack======//

		form.metadata = {
			selected_plan: form.selected_plan,
			email: form.email,
			selected_room: form.selected_room,
			selected_duration: form.selected_duration,
			amount: form.amount,
			location: form.location,
			book_date: form.book_date,
			time: form.time,
			phone: form.phone,
			instruction: form.instruction
		};
		initializePayment(form, (error, body)=>{
			if(error){
				//handle errors
				console.log(error);
				return;
		   }
		   response = JSON.parse(body);
		   res.redirect(response.data.authorization_url)
		});
		

		// update
		// Booking.findOne({
		// 	user: req.user.id
		// }).then((bookings) => {
		// 	if (bookings) {
		// 		Booking.findOneAndUpdate(
		// 			{ user: req.user.id },
		// 			{ $set: bookingsFields },
		// 			{ new: true }
		// 		).then((bookings) => res.json(bookings));
		// 	}
		// 	//save booking
		// 	new Booking(bookingsFields)
		// 		.save()
		// 		.then((bookings) => res.json(bookings))
		// 		.catch((err) => console.log(err));
		// });
	}
);

router.get(
	"/callback",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		const ref = req.query.reference;
		verifyPayment(ref, (error, body) => {
			if (error) {
				//handle errors appropriately
				console.log(error);
				return res.redirect("/error");
			}
			response = JSON.parse(body);
			const data = _.at(response.data, [
				"selected_plan",
				"selected_room",
				"selected_duration",
				"amount:",
				"location",
				"book_date",
				"time",
				"email",
				"phone",
				"instruction"
			]);
			[
				selected_plan,
				selected_room,
				selected_duration,
				amount,
				location,
				book_date,
				time,
				phone,
				instruction,
				email
			] = data;
			newBooking = {
				selected_plan,
				selected_room,
				selected_duration,
				amount,
				location,
				book_date,
				time,
				phone,
				instruction,
				email
			};
			const booking = new Booking(newBooking);
			booking
				.save()
				.then((bookings) => {
					if (bookings) {
						res.redirect("http://localhost:3000/Register_success" + user._id);
					}
				})
				.catch((e) => {
					res.redirect("/error");
				});
		});
	}
);

// getting all bookings
router.get("/booking", (req, res) => {
	Booking.find({})
		.then((bookings) => {
			res.json(bookings);
		})
		.catch((err) => {
			console.log(err);
		});
});

// getting all bookings for users
router.get(
	"/current",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		Booking.find({ user: req.user.id })
			.then((bookings) => {
				res.json(bookings);
			})
			.catch((err) => {
				console.log(err);
			});
	}
);

///count all bookings
router.get(
	"/bookingcount",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		Booking.find({ user: req.user.id })
			.countDocuments()
			.then((bookings) => {
				res.json({ all: bookings });
				console.log(bookings);
			})
			.catch((err) => {
				console.log(err);
			});
	}
);

//pending booking & count
router.get(
	"/pending",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		Booking.find({ user: req.user.id, status: { $nin: [1] } })
			.countDocuments()
			.then((result) => {
				res.json({ pending: result });
			})
			.catch((err) => {
				console.log(err);
			});
	}
);

// get all pending booking to the admin dashboard
router.get("/adminpending", (req, res) => {
	Booking.find({ status: { $nin: [1] } })

		.then((result) => {
			res.json(result);
		})
		.catch((err) => {
			console.log(err);
		});
});

//updating booking to become completed booking
router.put("/mark/:id", (req, res) => {
	Booking.findByIdAndUpdate(req.params.id, { $inc: { status: 1 } })
		.then((result) => {
			res.json(result);
		})
		.catch((err) => {
			console.log(err);
		});
});

//completed booking count
router.get(
	"/completed",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		Booking.find({ user: req.user.id, status: { $nin: [0] } })
			.count()
			.then((result) => {
				res.json({ completed: result });
			})
			.catch((err) => {
				console.log(err);
			});
	}
);

//deleting all pending bookings in admin dashboard
router.delete("/adminpending/:id", (req, res) => {
	Booking.findByIdAndDelete(req.params.id, { status: { $nin: [1] } })

		.then(() => {
			res.json("pending  booking deleted");
		})
		.catch((err) => {
			console.log(err);
		});
});

module.exports = router;
