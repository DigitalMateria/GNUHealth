/*globals Ext:false */
/*jshint globalstrict:true */
'use strict';

Ext.define('GNUHealth.view.login.LoginController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.login',
	
	requires: [
        'Common.util.LoginManager',        
        'Common.model.User'
    ],
    
    loginText: 'Logging in...',

    loginFailedHeader: 'Login Unsuccessful',

    loginFailedMessage: 'Please check your username and password.',
	
    init: function () {
        this.loginManager = Ext.create('Common.util.LoginManager', {
            model: 'Common.model.User'    
        });
    },
    
    getDataModel: function () {
        return Ext.create('Ext.data.Model', this.getViewModel().getData());  
    },

    onSpecialKey: function(sender, e) {        
        if (e.getKey() === e.ENTER) {
            this.login();
        }
    },
    
	onLoginClick: function () {
        this.login();
	},
    
    login: function () {
        var form = this.lookupReference('form');

        if (form.isValid()) {
			
            Ext.getBody().mask(this.loginText);

            this.loginManager.login({
                //this.getViewModel() is truncating last character of username
                data: this.getDataModel(), 
                scope: this,
                success: 'onLoginSuccess',
                failure: 'onLoginFailure'
            });
        }        	
    },
    
    onLoginFailure: function () {
        Ext.getBody().unmask();

        Ext.Msg.alert(this.loginFailedHeader, this.loginFailedMessage);
    },

    onLoginSuccess: function (user) {
        Ext.getBody().unmask();
        
        var login = this.getDataModel();
        user.set('username', login.get('username'));
        user.set('password', login.get('password'));

        // Fire the login event for the root controller
        this.fireViewEvent('login', this.getView(), user, this.loginManager);        
    }
});