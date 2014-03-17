'use strict'

describe('MainCtrl',function(){
    var $scope;
    var geolocation;

    beforeEach(angular.mock.module('appControllers'));

    beforeEach(inject(function($rootScope, $controller){
        $scope = $rootScope.$new();

        geolocation = {
            watchPosition: function(onSuccess){
                var position = {
                    latitude: 1.0,
                    longitude: 1.0
                }
                onSuccess.apply(position)
            }
        };


        $controller('MainCtrl', {
            $scope: $scope,
            geolocation: geolocation,
            $routeParams: routeParams
        })
    }))


})