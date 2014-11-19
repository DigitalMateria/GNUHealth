/*globals Ext:false */
/*jshint globalstrict:true */
'use strict';

Ext.define('Common.util.AppData', {
    singleton: true,
    
    config: {
        user: null
    },
    
    constructor: function (config) {
        this.initConfig(config);
    },
    
    clearAll: function () {
        this.setUser(null);    
    }
});