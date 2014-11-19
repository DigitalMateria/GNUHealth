/*globals Ext:false */
/*jshint globalstrict:true */
'use strict';

Ext.define('GNUHeatlh.view.login.LoginModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.login',
    
    data: {
        username: null,
        password: null
    }
});