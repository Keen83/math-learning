'use strict';

var module = ng.module('app', [
    'ngRoute'
    'app.controllers',
    'app.directives'    
]);

module.config(['$translateProvider', '$locationProvider',
    function($translateProvider, $locationProvider) {
        $translateProvider.translations('en-US', translations);
        $translateProvider.preferredLanguage('en-US');
        $locationProvider.html5Mode(false);
    }
]);

module.run(['$location', '$rootScope',
    function($location, $rootScope) {
        $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
            $rootScope.title = current.$$route.title;
        });
    }
]);

return module;
});