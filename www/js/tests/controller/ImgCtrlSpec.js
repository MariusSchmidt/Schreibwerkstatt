'use strict'

describe('ImgCtrl',function(){
    var device;
    var $scope;
    var routeParams

    beforeEach(angular.mock.module('appControllers'));

    beforeEach(inject(function($rootScope, $controller){
        $scope = $rootScope.$new();

        device = {};
        device.width = 100;
        routeParams = {};
        routeParams.stationID = 1;
        routeParams.imgID = 1;


        $controller('ImgCtrl', {
            $scope: $scope,
            device: device,
            $routeParams: routeParams
        })
    }))

    it('should have a stationID =1', function(){
        expect($scope.stationID).toBe(1);
    });

    it('should have an object with width = 100px', function(){
        expect($scope.getWidth.width).toBe("100px");
    });

    it('should have a imgID = 1', function(){
       expect($scope.imgID).toBe(1);
    });


})