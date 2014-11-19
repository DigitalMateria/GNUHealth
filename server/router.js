/*jslint node:true */
'use strict';

exports.init = function (app/*, models*/) {
	var index = require('./controller/index'), 
		user = require('./controller/user');
	
    // TODO: move /data to conf file.
    
    // set controllers
    app.get('/data', index.index);

    // login
    app.post('/data/login', user.login);
    
    // read
    //app.get('/data/users', user.read);
    // create
    //app.post('/data/users', user.add);
    // update
    //app.put('/data/users', user.update);
    // remove
    //app.delete('/data/users', user.destroy);
};