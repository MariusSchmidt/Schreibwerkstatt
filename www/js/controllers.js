var appControllers = angular.module('appControllers', ['appConfigurations', 'appDirectives']);

appControllers.controller('PoiCtrl', function ($rootScope, $scope, $window, $location, $routeParams, notification, media, device) {

    $scope.stationID = $routeParams.stationID;
    $scope.poi = $scope.pois[$scope.stationID];
    var show = false;


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
        media.stop();
        show = false;
    }

    $scope.mediaPlay = function () {
        show = true;
        if (!$rootScope.media) {
            media.play($scope.poi.audio)
        } else {
            media.resume()
        }
    }

    $scope.mediaPause = function () {
        media.pause()
        show = false;
    }

    $scope.mediaRepeat = function () {
        if ($rootScope.media) {
            media.stop()
        }
        media.play($scope.poi.audio)
        show = true;
    }

    $scope.showButton = function () {
        return show;
    }

    $scope.$on('pause', function(){
        media.stop();
        show = false;
    })

});

appControllers.controller('ImgCtrl', function ($scope, $routeParams, device) {
    $scope.stationID = $routeParams.stationID;
    $scope.imgID = $routeParams.imgID;
    $scope.getWidth = {
        "width": device.width + 'px'
    }
});

appControllers.controller('SplashCtrl', function ($scope, device) {
    $scope.roemer = (device.width > 420) ? './img/roemer_big.png' : './img/roemer_small.png';
});

appControllers.controller('MainCtrl', function ($scope, $interval, geolocation, notification, TOUR, Map) {

    $scope.gpsNeededMsgShown = false;
    $scope.gpsErrorCount = 0;

    $scope.mapOffset = {top: 0, left: 0};
    $scope.pois = TOUR.pointsOfInterest;
    $scope.poi = $scope.pois[0];
    $scope.userPosition = null;

    geolocation.watchPosition(function (position) {
        /* Add pos to rootScope pos will be watched for changes in PoiCtrl */
        /*alert(position.coords.accuracy);*/
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

});