/*jslint node:true */
'use strict';

var mongoose = require('mongoose'),
	UserSchema = new mongoose.Schema({
	   email: { type: String, unique: true },
	   password: { type: String },
	   firstName: { type: String },
	   lastName: { type: String },
	   username: { type: String, unique: true }
    });

module.exports = mongoose.model('User', UserSchema);

