'use strict()';

var app = angular.module('math');

app.config(['$routeProvider',
    function($routeProvider) {

        $routeProvider.when('/', {
            title: "Home",
            templateUrl: 'public/templates/controllers/mainCtrl.html',
            controller: 'mainCtrl'
        });

        $routeProvider.when('/love', {
            title: "Love you",
            templateUrl: 'public/templates/controllers/loveCtrl.html',
            controller: 'loveCtrl'
        });

        $routeProvider.otherwise({
            redirectTo: '/'
        });
    }
]);