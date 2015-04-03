/*jslint node: true */
'use strict';

var module = angular.module('math',[
    'ngRoute',
    'math.controllers',
    'math.directives'
]);

module.run(['$location', '$rootScope',
    function($location, $rootScope) {
        $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
            $rootScope.title = current.$$route.title;
        });
    }
]);