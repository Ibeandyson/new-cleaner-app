const express = require("express");
const router = express.Router();
const passport = require("passport");
const mongoose = require('mongoose');

// load message model
const Message = require("../../models/Message");



//send user crurrent messages

router.post(
	"/message",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
		const messagesFields = {};
		messagesFields.user = req.user.id;
		if (req.body.tittle) messagesFields.tittle = req.body.tittle;
		if (req.body.message) messagesFields.message = req.body.message;

		// update
		Message.findOne({ user: req.user.id }).then((messages) => {
			if (messages) {
				Message.findOneAndUpdate(
					{ user: req.user.id },
					{ $set: messagesFields },
					{ new: true }
				).then((messages) => res.json(messages));
			}
			// save message
			new Message(messagesFields)
				.save()
				.then((messages) => res.json(messages))
				.catch((err) => console.log(err));
		});
	}
);

// getting all messages
router.get("/message", (req, res) => {
	Message.find({})
		.then((messages) => {
			res.json(messages);
		})
		.catch((err) => {
			console.log(err);
		});
});

//get all messages
router.get("/message", (req, res) => {
	Message.find({})
		.then((messages) => {
			res.json(messages);
		})
		.catch((err) => {
			console.log(err);
		});
});

// delete message
router.delete(
	"/message/:id",
	passport.authenticate("jwt", { session: false }),
	(req, res) => {
       Message.findByIdAndRemove(req.params.id)
       .then(() => 
           res.json('message deleted')
       ).catch(err => 
           res.status(400).json("Error:" + err) 
       )
	}
);
module.exports = router;
