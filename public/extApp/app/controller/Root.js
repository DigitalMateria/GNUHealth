/*globals Ext:false */
/*jshint globalstrict:true */
'use strict';

Ext.define('GNUHealth.controller.Root', {
    extend: 'Ext.app.Controller',
    
    requires: [
        // Common deps
        'Common.util.LoginManager',
        'Common.util.AppData',
        
        // views
        'GNUHealth.view.login.Login',
        'GNUHealth.view.main.Main'
    ],
    
    getAppData: function () {
        return Ext.ClassManager.get('Common.util.AppData');  
    },
    
    onLaunch: function () {
        this.session = new Ext.data.Session({
            autoDestroy: false
        });
        
        this.showLogin();
    },
    
    showLogin: function () {
        this.login = Ext.create('GNUHealth.view.login.Login', {
            session: this.session,
            autoShow: true,
            listeners: {
                scope: this,
                login: 'onLogin'
            }
        });            
    },
    
    /**
     * Called when the login controller fires the "login" event.
     *
     * @param {GNUHealth.util.LoginController} loginController
     * @param {Common.model.User} user
     * @param {Common.util.LoginManager} loginManager
     */
    onLogin: function (loginController, user, loginManager) {
        var appData = this.getAppData();
        
        appData.setUser(user);
        
        this.login.destroy();
        
        this.loginManager = loginManager;
        
        this.showMain();
    },
    
    showMain: function () {
        this.main = Ext.create('GNUHealth.view.main.Main', {
            session: this.session,
            autoShow: true,
            listeners: {
                scope: this
                // TODO
            }
        });
    }
        
});