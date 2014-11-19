/*jslint node:true */
'use strict';

var btoa = require('btoa'),
    base = require('./base'),    
	user = require('../model/user');

// set the model
base.model = user;

// log the user in.
exports.login = function (req, res) {
    var params = req.body,
        user;
    
    console.log(params);
    
    base.model.find({}, function (err, records) {
        for (var i = 0, len = records.length; i < len; i++) {
            if (records[i].username === params.username) {
                user = records[i];    
            }
        }

        if (user && user.password === params.password) {
            return res.send({ success: true, 
                authKey: btoa(user.username + ':' + user.password)    
            });   
        }
    
        res.send({ success: false, authKey: null });
    });
};

exports.read = base.read;
exports.add = base.add;
exports.update = base.update;
exports.destroy = base.destroy;