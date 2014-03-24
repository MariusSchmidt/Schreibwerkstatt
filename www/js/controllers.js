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

    var positionCallback = function(position) {
        $scope.$apply(function() {
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

    var errorCallback = function(error) {
        $scope.$apply(function() {
            $scope.gpsErrorCount++;
            $scope.userPosition = null;
            angular.forEach(Map.icons, function (icon, index) {
                icon.isActive = false;
            });
            angular.forEach(Map.waypoints, function (waypoint, index) {
                waypoint.isActive = false;
            });
            if (!$scope.gpsNeededMsgShown && $scope.gpsErrorCount >= 3) {
                var msg = 'Die Schreibwerkapp erfordert GPS und mobile Daten. Bitte stellen Sie Ihr Gerät entsprechend ein, um den vollen Funktionsumfang zu nutzen. Diese Meldung wird nicht erneut angezeigt.';
                notification.alert(msg, function () {}, 'Keine Geokoordinaten verfügbar');
                $scope.gpsNeededMsgShown = true;
            }
        });
    }

    $interval(function() {
        if ($scope.deviceReady) {
            navigator.geolocation.getCurrentPosition(positionCallback, errorCallback, {enableHighAccuracy: true, timeout: 30000, maximumAge: 90000});
        }
    }, 10000);

});