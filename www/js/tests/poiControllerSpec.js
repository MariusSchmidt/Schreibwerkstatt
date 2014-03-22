'use strict'

describe('PoiCtrl', function(){
    var $scope;
    var routeParams;
    var geolocationMock;
    var media;
    var device;
    var $location;
    var rootScope;

    beforeEach(angular.mock.module('appControllers'));

    beforeEach(inject(function($rootScope, $controller){
        $scope = $rootScope.$new();
        rootScope = $rootScope;

        $location = {
            lastParam: null,
            path: function(path) {
                this.lastParam = path;
            }
        };

        media = {
            state : null,
            stop: function(){
                this.state = "stop";
            },
            play: function(){
                this.state = "play";
            }
        };

        $rootScope.media = {};
        $scope.pois = [{}];
        routeParams = {};
        routeParams.stationID = 1;
        device = {};
        device.width = 500;

        //locationMock = jasmine.createSpyObj('location', ['path']);

        //declaration of the controller and mock injection
        $controller('PoiCtrl', {
            $routeParams: routeParams,
            $scope: $scope,
            $rootScope: rootScope,
            $location: $location,
            geolocation: geolocationMock,
            media: media,
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
        $scope.stopAndRedirect("/path");
        expect(show).toBeFalsy();
        expect($location.lastParam).toBe("/path");
        expect(media.state).toBe("stop");
    })

    it('should call media.play service', function(){
        $scope.poi = {}
        $scope.mediaPlay();
        expect(media.state).toBe("play");
    })

    it('should call media.stop service', function(){
        $scope.poi = {}
        $scope.mediaStop();
        expect(media.state).toBe("stop");
        expect(show).toBeFalsy();
    })

    it('should return true', function(){
        expect($scope.showButton()).toBeTruthy();
    })

});


