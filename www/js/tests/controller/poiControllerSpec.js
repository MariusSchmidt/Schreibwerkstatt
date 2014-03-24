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

    beforeEach(inject(function($rootScope, $controller, $injector){
        $scope = $rootScope.$new();

        rootScope = {};

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
            },
            resume: function(){
                this.state = "resumed";
            },
            pause: function(){
                this.state = "paused";
            }
        };

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

    var show;

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
        $scope.mediaPause();
        expect(media.state).toBe("paused");
        expect(show).toBeFalsy();
    })

    it('should return true', function(){
        $scope.poi = {}
        expect($scope.showButton()).toBeFalsy();
        $scope.mediaPlay();
        expect($scope.showButton()).toBeTruthy();
    })

});


