/*globals Ext:false */
/*jshint globalstrict:true */
'use strict';

Ext.define('Common.model.User', {
	extend: 'Ext.data.Model',
	
	config: {
		fields: [{
			name: '_id',
			defaultValue: null
		}, {
			name: 'username',
			type: 'string'
		}, {
			name: 'password',
			type: 'string'
		}, {
            name: 'authKey',
            type: 'string'
        }],
		
		proxy: {
			type: 'websql', // TODO: possibly change this to indexeddb
			id: 'offline-store'
		}

		/*serverProxy: {
			type: 'rest',
			url: '/users',
			reader: {
				type: 'json',
				root: 'User'
			}
		}*/
	}
});