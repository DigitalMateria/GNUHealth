var base = require('./base'),
	user = require('../model/user');

// set the model
base.model = user;

exports.read = base.read;
exports.add = base.add;
exports.update = base.update;
exports.destroy = base.destroy;