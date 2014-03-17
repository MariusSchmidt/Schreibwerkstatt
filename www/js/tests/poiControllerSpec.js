'use strict'

describe('PoiCtrl', function(){
    var $scope;
    var routeParams
    var geolocationMock
    var mediaMock
    var notificationMock

    beforeEach(angular.mock.module('appControllers'));

    beforeEach(angular.mock.inject(function($rootScope, $controller){
        $scope = $rootScope.$new();
        routeParams = {};

        notificationMock = jasmine.createSpyObj('notification', ['confirm']);
        mediaMock = jasmine.createSpyObj('media', ['play', 'stop']);
        geolocationMock = jasmine.createSpyObj('geolocation', ['watchPosition', 'clearWatch']);

        //declaration of the controller and mock injection
        $controller('PoiCtrl', {
            $routeParams: routeParams,
            $scope: $scope,
            $rootScope: $rootScope,
            geolocation: geolocationMock,
            media: mediaMock,
            notification: notificationMock
        });
    }));


    it('should have some scope variables', function(){
        $routeParams.stationID = 1;
        expect(true).toBeTruthy();
    })

//    it('creates spies for each requested function', function(){
//        expect(notificationMock.confirm).toBeDefined();
//        expect(mediaMock.play).toBeDefined();
//        expect(mediaMock.stop).toBeDefined();
//        expect(geolocationMock.watchPosition).toBeDefined();
//        expect(geolocationMock.clearWatch).toBeDefined();
//    });

//    it('should call phonegaps media API', function(){
//        $scope.mediaPlay();
//        expect(mediaMock.play).toHaveBeenCalled();
//    });

});


