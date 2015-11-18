'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

module.exports = Backbone.Model.extend({
    initialize: function () {

    },
    defaults: {
        title: '',
        completed: false
    },
    parse: function(response, options){
        return response;
    },
    toggle: function(){
        this.save({
            completed: !this.get('completed')
        });
    }
});
