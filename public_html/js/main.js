require.config({
    baseUrl: "js/",
    paths: {
        jquery: '//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min',
        socketio: '//cdnjs.cloudflare.com/ajax/libs/socket.io/0.9.16/socket.io.min',
    },
    shim: {
        'jquery': {
            exports: '$'
        },
        'socketio': {
            exports: 'io'
        }
    }
});

require(['app'], function(App) {
    'use strict';
    App.initialize();
});