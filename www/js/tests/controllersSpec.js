'use strict'

describe('PoiCtrl', function(){
    var $scope;
    var geolocationMock
    var mediaMock
    var notificationMock

    beforeEach(angular.mock.module('appControllers'));

    beforeEach(angular.mock.inject(function($rootScope, $controller){
        $scope = $rootScope.$new();
        $rootScope = $rootScope.$new();

        //Mock all Services
        notificationMock = jasmine.createSpyObj('notification', ['confirm']);
        mediaMock = jasmine.createSpyObj('media', ['play', 'stop']);
        geolocationMock = jasmine.createSpyObj('geolocation', ['watchPosition', 'clearWatch']);

        //setup returns for Mocks
        notificationMock.confirm.andReturn('notification');

        $controller('PoiCtrl', {
            $scope: $scope,
            $rootScope: $rootScope,
            geolocation: geolocationMock,
            media: mediaMock,
            notification: notificationMock
        });
    }));
    it('should have a variable message = test', function(){
        expect($scope.message).toBe('test');
    })

    it('should have variable poi of type = array', function(){
       expect($scope.poi).toBeDefined();
    });

});


