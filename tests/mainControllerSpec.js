'use strict'

describe('MainCtrl',function(){
    var $scope;
    var geolocation;
    var position;

    beforeEach(angular.mock.module('appControllers'));

    beforeEach(inject(function($rootScope, $controller){
        $scope = $rootScope.$new();

        position = {};

        position.coords = {
            longitude: 1.0,
            latitude: 1.0
        }

        geolocation = {
            watchPosition: function(onSuccess){
                onSuccess(position);
            }
        };


        $controller('MainCtrl', {
            $scope: $scope,
            geolocation: geolocation,
            position: position
        })
    }))

    it('should have some variable defined in scope', function() {
        expect($scope.mapOffset.top).toBe(0);
        expect($scope.pois[0].title).toBe("Einführung");
        expect($scope.poi.title).toBe("Einführung");
    })

    it('should watch position and save it in $scope.pos', function(){
        expect($scope.pos.latitude).toBe(1.0);
    })




})