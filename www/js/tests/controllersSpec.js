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
        notificationMock.confirm.andReturn(true);
        mediaMock.play.andReturn(true);
        mediaMock.stop.andReturn(true);


        //declaration of the controller and mock injection
        $controller('PoiCtrl', {
            $scope: $scope,
            $rootScope: $rootScope,
            geolocation: geolocationMock,
            media: mediaMock,
            notification: notificationMock
        });
    }));

    it('should have variable poi[0].title = Einfuehrung', function(){
       expect($scope.poi.title).toBe('Einführung');
    });

    it('should shift the poi to Position 3', function(){
        $scope.poi = [1];
        $scope.shiftPoi(3);
        expect($scope.poi.title).toBe("Römer");
    });

    it('should call phonegaps media API', function(){
        //this test needs a media Object mock to pass
        $scope.mediaPlay();
        expect(mediaMock.play()).toHaveBeenCalled;
    });

//    it('should call phonegaps media API', function(){
//        $rootScope.media = {};
//        var show = true;
//        $scope.mediaStop();
//    });

});


