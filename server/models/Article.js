var mongoose = require('mongoose');

var ArticleSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	author: {
		type: String,
		required: true
	},
	image: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	longtext: {
		type: String,
		required: true
	}
});

// Export the model.
module.exports = mongoose.model('article', ArticleSchema);