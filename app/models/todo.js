var mongoose = require('mongoose');

module.exports = mongoose.model('Todo', {
	//date : Date,
	text : String,
	done : Boolean
});