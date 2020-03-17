const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//Create booking schema
const BookingSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: "users"
	},

	location: {
		type: String,
		required: true
	},
	selected_plan: {
		type: String,
		required: true
	},
	selected_room: {
		type: String,
		required: true
	},
	selected_duration: {
		type: String,
		required: true
	},
	amount:{
		type: Number,
		required: true,
	},
	email:{
		type: String ,
		required: true,
	},
	book_date: {
		type: Date,
		required: true
	},
	time: {
		type: String,
		required: true
	},
	phone: {
		type: String,
		required: true
	},
	instruction: {
		type: String,
		required: true
	},
	reference: {
		type: String,
		required: true
	},
	status: {
		type: Number,
		required: true,
		default: 0
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = Booking = mongoose.model("bookings", BookingSchema);
