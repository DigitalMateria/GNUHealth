/*globals Ext:false */
/*jshint globalstrict:true */
'use strict';

Ext.define('Common.util.LoginManager', {	

	config: {
		model: null,
		session: null
	},

	constructor: function (config) {
		return this.initConfig(config);
	},

	/*applyModel: function (model) {
		return model && Ext.data.schema.Schema.lookupEntity(model);
	},*/

	login: function (options) {        
		var username = options.data.get('username'),
			password = options.data.get('password');			

		Ext.Ajax.request({            
			url: '/data/login',
			method: 'POST',
            params: {
                username: username, 
                password: password
            },
			scope: this,
			callback: this.onLoginReturn,
			original: options
		});
	},

	onLoginReturn: function (options, success, response) {
		options = options.original;
		var user; //session = this.getSession();

		if (success) {
			response = JSON.parse(response.responseText);
            
            if (response.success) {
                user = Ext.create(this.getModel(), { authKey: response.authKey });
                
                return Ext.callback(options.success, options.scope, [user]);
            }           
		}

		Ext.callback(options.failure, options.scope, [response]);
	}
});