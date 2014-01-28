/**
 * Created with IntelliJ IDEA.
 * User: marius
 * Date: 22.01.14
 * Time: 19:49
 * To change this template use File | Settings | File Templates.
 */
'use strict';

Number.prototype.mod = function(n) {
    return ((this%n)+n)%n;
}

/* App Module */

var phonecatApp = angular.module('schreibwerkapp', [
    'ngRoute',
    'appControllers',
    'appServices'
]);

phonecatApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/splash', {
                templateUrl: 'partials/splash.html',
                controller: 'PoiCtrl'
            }).
            when('/terms', {
                templateUrl: 'partials/terms.html',
                controller: 'PoiCtrl'
            }).
            otherwise({
                redirectTo: '/terms'
            });
    }]);
