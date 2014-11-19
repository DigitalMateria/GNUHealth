/*jslint node:true */
'use strict';

exports.init = function (/* req, res */) {
	console.log('test');
};

exports.index = function (req, res) {
	res.render('index', { title: 'GNUHealth - data' });
};