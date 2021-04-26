const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		subject: {
			type: String,
			required: true,
		},
		message: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = Contact = mongoose.model('contact', ContactSchema);
