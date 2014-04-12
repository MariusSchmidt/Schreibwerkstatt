var appControllers = angular.module('appControllers', ['appConfigurations', 'appDirectives']);

appControllers.controller('PoiCtrl', function ($rootScope, $scope, $window, $location, $routeParams, notification, AudioService, device) {

    $scope.stationID = $routeParams.stationID;
    $scope.poi = $scope.pois[$scope.stationID];
    var show = false;

    AudioService.load($scope.poi.audio);


    $scope.getMargin = function () {
        if (device.width >= 500) {
            return {margin: '50px'};
        }
    }

    $scope.getImageWidth = function () {
        if (device.width >= 500) {
            return { width: '460px'};
        }
        return { width: '230px'};
    }

    $scope.stopAndRedirect = function (path) {
        $location.path(path);
        AudioService.pause();
        show = false;
    }

    $scope.mediaPlay = function () {
        show = true;
        AudioService.play();
    }

    $scope.mediaPause = function () {
        AudioService.pause()
        show = false;
    }

    $scope.mediaRepeat = function () {
        AudioService.pause();
        AudioService.seek(0);
        AudioService.play();
        show = true;
    }

    $scope.showButton = function () {
        return show;
    }

    $scope.$on('pause', function(){
        AudioService.pause();
        show = false;
    })

});

appControllers.controller('ImgCtrl', function ($scope, $routeParams, device, AudioService) {
    $scope.stationID = $routeParams.stationID;
    $scope.imgID = $routeParams.imgID;
    $scope.getWidth = {
        "width": device.width + 'px'
    }

    $scope.$on('pause', function(){
        AudioService.stop();
        show = false;
    })
});

appControllers.controller('MainCtrl', function ($scope, $timeout, geolocation, notification, TOUR, Map) {

    $scope.gpsNeededMsgShown = false;
    $scope.gpsErrorCount = 0;

    $scope.mapOffset = {top: 0, left: 0};
    $scope.pois = TOUR.pointsOfInterest;
    $scope.poi = $scope.pois[0];
    $scope.userPosition = null;


    $scope.simulateGeopos = function() {

        $scope.userPosition = {
            "latitude": 50.110290,
            "longitude": 8.682265
        }

        angular.forEach(Map.icons, function (icon, index) {
            var distance = Map.distance(icon.coords, $scope.userPosition);
            icon.isActive = (distance <= 0.1);
        });

        $scope.arrivedNewWaypoint = false;
        $scope.activeWaypoints = [];

        angular.forEach(Map.waypoints, function (waypoint, index) {
            var distance = Map.distance(waypoint.coords, $scope.userPosition);
            if (distance <= 0.1) {
                $scope.arrivedNewWaypoint = $scope.arrivedNewWaypoint || (waypoint.isActive === false);
                $scope.activeWaypoints.push(waypoint.id + 1);
                waypoint.isActive = true;
            } else {
                waypoint.isActive = false;
            }
        });


        if ($scope.arrivedNewWaypoint) {
            if ($scope.activeWaypoints.length == 1) {
                var infotext = "Simulierte Geoposition: Sie befinden sich in unmittelbarer N%E4he zu Station " + $scope.activeWaypoints.toString();
            } else {
                var infotext = "Simulierte Geoposition: Sie befinden sich in unmittelbarer N%E4he zu folgenden Stationen%3A %0A" + $scope.activeWaypoints.toString();
            }
            alert(unescape(infotext));
        }
    }

    //$timeout($scope.simulateGeopos, 5000);

    /*$scope.startWatch = function() {
        geolocation.watchPosition(function (position) {
            *//* Add pos to rootScope pos will be watched for changes in PoiCtrl *//*
            *//*alert(position.coords.accuracy);*//*
            //$scope.pos = {latitude: position.coords.latitude, longitude: position.coords.longitude, accuracy: position.coords.accuracy};
            $scope.gpsErrorCount = 0;
            if (!position.coords) {
                $scope.userPosition = null;
                return;
            }
            $scope.userPosition = position.coords;


            angular.forEach(Map.icons, function (icon, index) {
                var distance = Map.distance(icon.coords, $scope.userPosition);
                icon.isActive = (distance <= 0.1);
            });

            $scope.arrivedNewWaypoint = false;
            $scope.activeWaypoints = [];

            angular.forEach(Map.waypoints, function (waypoint, index) {
                var distance = Map.distance(waypoint.coords, $scope.userPosition);
                if (distance <= 0.1) {
                    $scope.arrivedNewWaypoint = $scope.arrivedNewWaypoint || (waypoint.isActive === false);
                    $scope.activeWaypoints.push(waypoint.id + 1);
                    waypoint.isActive = true;
                } else {
                    waypoint.isActive = false;
                }
            });

            if ($scope.arrivedNewWaypoint) {
                if ($scope.activeWaypoints.length == 1) {
                    var infotext = "Sie befinden sich in unmittelbarer N%E4he zu Station " + $scope.activeWaypoints.toString();
                } else {
                    var infotext = "Sie befinden sich in unmittelbarer N%E4he zu folgenden Stationen%3A %0A" + $scope.activeWaypoints.toString();
                }
                notification.alert(unescape(infotext), function () {
                }, unescape("Informationen verf%FCgbar%0A"), "ok");
            }
        });
    }

    $scope.$on('pause', function(){
        geolocation.clearWatch()
    })

    $scope.$on('resume', function(){
        $scope.startWatch();
    })

    $scope.startWatch();*/

});