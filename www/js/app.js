/**
 * Created with IntelliJ IDEA.
 * User: marius
 * Date: 22.01.14
 * Time: 19:49
 * To change this template use File | Settings | File Templates.
 */
'use strict';

/* App Module */
var schreibwerkApp = angular.module('schreibwerkapp', [
    'ngRoute',
    'ngTouch',
    'appControllers',
    'phonegapServices'
]);

schreibwerkApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.
            when('/splash', {
                templateUrl: 'partials/splash.html',
                controller: 'SplashCtrl'
            }).
            when('/terms', {
                templateUrl: 'partials/terms.html',
                controller: 'SplashCtrl'
            }).
            when('/intro', {
                templateUrl: 'partials/intro.html',
                controller: 'SplashCtrl'
            }).
            when('/poi/:stationID', {
                templateUrl: 'partials/poi.html',
                controller: 'PoiCtrl'
            }).
            when('/directive', {
                templateUrl: 'partials/directive.html'
            }).
            when('/imgview/:stationID/:imgID', {
                templateUrl: 'partials/imgview.html',
                controller: 'ImgCtrl'
            }).
            otherwise({
                redirectTo: '/splash'
            });
}]);


schreibwerkApp.run(function ($document, $rootScope) {
    $rootScope.deviceReady = false;
    $document.on('deviceready', function () {
        $rootScope.deviceReady = true;
        //Listen to these events in every scope with
        //$scope.$on('eventname' , functionToHandle)
        $rootScope.$broadcast('deviceready', true);
        document.addEventListener('resume', function () {
            $rootScope.$broadcast('resume', true);
        }, false);
        document.addEventListener('pause', function () {
            $rootScope.$broadcast('pause', true);
        }, false);
        document.addEventListener('menubutton', function () {
            $rootScope.$broadcast('menubutton', true);
        }, false);
        document.addEventListener('backbutton', function () {
            $rootScope.$broadcast('backbutton', true);

        }, false);
    });
});
