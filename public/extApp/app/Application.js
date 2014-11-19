/*globals Ext:false */
/*jshint globalstrict:true */
'use strict';

/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('GNUHealth.Application', {
    extend: 'Ext.app.Application',
    
    name: 'GNUHealth',
	
	controllers: [
        'Root@GNUHealth.controller'
    ],
      
    launch: function () {
		// TODO: Check for user localstorage object	
    }
});
