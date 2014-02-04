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
};

/* App Module */

var schreibwerkApp = angular.module('schreibwerkapp', [
    'ngRoute',
    'appControllers',
    'phonegapServices'
]);

schreibwerkApp.config(['$routeProvider',
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


//schreibwerkApp.run ( function ($document, $rootScope, deviceReadyService) {
//    /* 
//     * first things todo:
//     *  
//     */
//    deviceReadyService().then( function () {
//       /* 
//        * Not sure if needed but usefull to bradcast in lower DOM-Levels later. 
//        * deviceReady Service returns a promise this function is a complete-handle
//        * that broadcasts the deviceReadyEvent to all DOM-Levels
//        */
//       console.log( $rootScope.deviceready );
//       $rootScope.$broadcast ('deviceReadyEvent', true);  
//    });
//});