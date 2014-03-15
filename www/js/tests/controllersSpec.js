'use strict'

describe('PoiCtrl', function(){
    var $scope;
    var geolocationMock
    var mediaMock
    var notificationMock

    beforeEach(angular.mock.module('appControllers'));

    beforeEach(angular.mock.inject(function($rootScope, $controller){
        $scope = $rootScope.$new();

        notificationMock = jasmine.createSpyObj('notification', ['confirm']);
        mediaMock = jasmine.createSpyObj('media', ['play', 'stop']);
        geolocationMock = jasmine.createSpyObj('geolocation', ['watchPosition', 'clearWatch']);

        //declaration of the controller and mock injection
        $controller('PoiCtrl', {
            $scope: $scope,
            $rootScope: $rootScope,
            geolocation: geolocationMock,
            media: mediaMock,
            notification: notificationMock
        });
    }));

    it('creates spies for each requested function', function(){
        expect(notificationMock.confirm).toBeDefined();
        expect(mediaMock.play).toBeDefined();
        expect(mediaMock.stop).toBeDefined();
        expect(geolocationMock.watchPosition).toBeDefined();
        expect(geolocationMock.clearWatch).toBeDefined();
    });

    it('should have variable poi[0].title = Einfuehrung', function(){
       expect($scope.pois[0].title).toBe('Einführung');
    });

    it('should shift the poi to Position 3', function(){
        $scope.poi = [1];
        $scope.shiftPoi(3);
        expect($scope.poi.title).toBe("Römer");
    });

    it('should call phonegaps media API', function(){
        $scope.mediaPlay();
        expect(mediaMock.play).toHaveBeenCalled();
    });

});


