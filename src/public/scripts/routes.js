'use strict()';

var app = angular.module('math');

app.config(['$routeProvider',
    function($routeProvider) {

        $routeProvider.when('/', {
            title: "Home",
            templateUrl: 'public/templates/controllers/mainCtrl.html',
            controller: 'mainCtrl'
        });

        $routeProvider.otherwise({
            redirectTo: '/'
        });
    }
]);