'use strict'

describe('PoiCtrl', function(){
    var $scope;
    var routeParams;
    var geolocationMock;
    var mediaMock;
    var notificationMock;
    var locationMock;
    var device;
    var $location

    beforeEach(angular.mock.module('appControllers'));

    beforeEach(angular.mock.inject(function($rootScope, $controller){
        $scope = $rootScope.$new();

        $location = {};
        $location.path = function(path){
            return path;
        }

        $scope.pois = [];
        routeParams = {};
        routeParams.stationID = 1;
        device = {};
        device.width = 500;

        notificationMock = jasmine.createSpyObj('notification', ['confirm']);
        mediaMock = jasmine.createSpyObj('media', ['play', 'stop']);
        geolocationMock = jasmine.createSpyObj('geolocation', ['watchPosition', 'clearWatch']);
        //locationMock = jasmine.createSpyObj('location', ['path']);

        //declaration of the controller and mock injection
        $controller('PoiCtrl', {
            $routeParams: routeParams,
            $scope: $scope,
            $rootScope: $rootScope,
            $location: $location,
            geolocation: geolocationMock,
            media: mediaMock,
            notification: notificationMock,
            device: device
        });
    }));


    it('should have some scope variables', function(){
        expect($scope.stationID).toBe(1);
        expect($scope.poi).toBe($scope.pois[1]);
    });

    it('should return a Style Object or nothing', function(){
        device.width = 500;
        expect($scope.getMargin().margin).toBe('50px');
    });

    it('should return width = 460(tablets) or width = 230(smartphones)', function(){
        device.width = 500;
        expect($scope.getImageWidth().width).toBe('460px');
    });

    it('should set redirect and stop the running Media', function(){
        $location.path("/path");
        $scope.stopAndRedirect("/path");
        expect(show).toBeFalsy();
        //expect($location.path("test")).toHaveBeenCalled();
    })

    it('should call media.play service', function(){

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


