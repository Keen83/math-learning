/*jslint node: true */
'use strict';

var module = ng.module('app',[
    'ngRoute',
    'app.controllers',
    'app.directives'
]);

module.run(['$location', '$rootScope',
    function($location, $rootScope) {
        $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
            $rootScope.title = current.$$route.title;
        });
    }
]);