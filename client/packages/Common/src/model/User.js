Ext.define('GNUHealth.model.User', {
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
		}],
		
		localProxy: {
			type: 'websql', // TODO: possibly change this to indexeddb
			id: 'offline-store'
		},

		serverProxy: {
			type: 'rest',
			url: '/users',
			reader: {
				type: 'json',
				root: 'User'
			}
		}
	}
});