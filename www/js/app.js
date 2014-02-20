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
    'ngTouch',
    'appControllers',
    'phonegapServices'
]);

schreibwerkApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/splash', {
                templateUrl: 'partials/splash.html'
            }).
            when('/terms', {
                templateUrl: 'partials/terms.html'
            }).
            when('/intro', {
                templateUrl: 'partials/intro.html'
            }).
            when('/poi', {
                templateUrl: 'partials/poi.html',
                controller: 'PoiCtrl'
            }).
            when('/directive', {
                templateUrl: 'partials/directive.html',
                controller: 'MapCtrl'
            }).
            otherwise({
                redirectTo: '/directive'
            });
    }]);


//schreibwerkApp.run ( function ($document, $rootScope, deviceReadyService) {
//    /* 
//     * first things todo:
//     *  
//     */
//    $rootScope.mediaPlaying = false; //If true: dont't run media.play()
////    deviceReadyService().then( function () {
////       /* 
////        * Not sure if needed but usefull to bradcast in lower DOM-Levels later. 
////        * deviceReady Service returns a promise this function is a complete-handle
////        * that broadcasts the deviceReadyEvent to all DOM-Levels
////        */
////       console.log( $rootScope.deviceready );
////       $rootScope.$broadcast ('deviceReadyEvent', true);  
////    });
//});
