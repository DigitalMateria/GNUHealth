/*globals Ext:false */
/*jshint globalstrict:true */
'use strict';

Ext.define('GNUHealth.view.login.Login', {
	extend: 'Ext.window.Window',
	xtype: 'login',
	
	requires: [
		'GNUHealth.view.login.LoginController',
        'GNUHeatlh.view.login.LoginModel',
		'Ext.form.Panel'
	],
	
	controller: 'login',
    viewModel: {
        type: 'login'
    },
	bodyPadding: 10,
	title: 'Login Window',
	closable: false,
	autoShow: true,
	
	items: {
		xtype: 'form',
		reference: 'form',
		items: [{
			xtype: 'textfield',
			name: 'username',
            bind: '{username}',            
			fieldLabel: 'Username',
			allowBlank: false
		}, {
			xtype: 'textfield',            
			name: 'password',
            bind: '{password}',            
			inputType: 'password',
			fieldLabel: 'Password',
			allowBlank: false
		}, {
			xtype: 'displayfield',
			hideEmptyLabel: false,
			value: 'Please enter your credentials.'
		}],
		buttons: [{
			text: 'Login',
			formBind: true,
			listeners: {
				click: 'onLoginClick'
			}
		}]
	}
});