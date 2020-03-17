const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//create message schema
const MessageSchema = new Schema({
	user: {
		type: Schema.Types.ObjectId,
		ref: "users"
    },
  
  
	tittle: String,

	message: String,

	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = Message = mongoose.model("messages", MessageSchema);
