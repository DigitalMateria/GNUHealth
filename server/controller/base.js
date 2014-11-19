/*jslint node:true */
'use strict';

/**
 * Reads records
 *
 * @param name Name of model
 * @param req
 * @param res
 */
exports.read =  function (req, res) {
	//var params = req.body;

	exports.model.find({}, function (err, records) {
		res.send({ success: true, User: records });
	});
};

/**
 * Create Record
 *
 * @param name Name of model
 * @param req
 * @param res
 */
exports.add = function (name, req, res) {
	var params = res.body,
		item;

	item = new exports.model[name](params);

	item.save(function (err) {
		if (!err) {
			res.send({ success: true, object: item });
		} else {
			res.send({ success: true, object: item });
		}
	});
};

/**
 * Update Record
 *
 * @param name Name of model
 * @param req
 * @param res
 */
exports.update = function (name, req, res) {
	var params = req.body, 
		id = params._id;

	// remove id from values to update
	delete params._id;

	exports.model[name].update({'_id': id }, { $set: params }, { upsert: false }, function (err) {
		if (!err) {
			res.send({ success: true });
		} else {
			res.send({ success: true });
		}
	});
};

/**
 * Remove Record
 *
 * @param name Name of model 
 * @param req
 * @param res
 */
exports.destroy = function (name, req, res) {
	var params = req.body;

	exports.model[name].remove({'_id': params._id}, function (err) {
		if (!err) {
			res.send({ success: true });
		} else {
			res.send({ success: false });
		}
	});
};