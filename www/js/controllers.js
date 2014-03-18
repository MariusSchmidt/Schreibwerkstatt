var appControllers = angular.module('appControllers', ['appConfigurations', 'appDirectives']);

appControllers.controller('PoiCtrl', function ($rootScope, $scope, $location, $routeParams, notification, media, device) {

    $scope.stationID = $routeParams.stationID;
    $scope.poi = $scope.pois[$scope.stationID];


    $scope.getMargin = function(){
        if(device.width >= 500){
            return {margin: '50px'};
        }
    }

    $scope.getImageWidth = function(){
        if(device.width >= 500){
            return { width: '460px'};
        }
        return { width: '230px'};
    }

    $scope.stopAndRedirect = function(path){
        $location.path(path);
        media.stop($scope.media);
        show = false;
    }

    $scope.mediaPlay = function() {
        media.play($scope.poi.audio)
    }

    $scope.mediaStop = function() {
        media.stop($scope.media)
        show = false;
    }

    $scope.showButton = function(){
        if ($rootScope.media) {
            return true;
        }
    }

    /*
     * Watch position for changes.
     * If distance to poi <= 50 alert with media-information
     */
//    $scope.$watch('pos', function (newValue, oldValue) {
//        distance = calculateDistance($rootScope.pos.latitude, $rootScope.pos.longitude,
//            $scope.poi.coords.latitude, $scope.poi.coords.longitude);
//        $rootScope.pos.distance = distance;
//        if (distance <= 0.050 && $scope.lastcheck !== $scope.poi) {
//            notification.confirm(unescape(nearInfoAlert), function (btnNos) {
//                if (btnNos [0] === 1) {
//                    media.play($scope.poi.audio, function () {
//                        window.alert("Ende!");
//                        console.log("JA");
//                    });
//                }
//            }, unescape("Informationen verf%FCgbar"), ["Ja", "Nein"]);
//            $scope.lastcheck = $scope.poi;
//        }
//    });



  /*  $scope.$watch('pos', function (newValue) {
    $scope.getDeviceSize = function() {
        $scope.deviceSize = device.size();
    }


  /*  $scope.$watch('pos', function (newValue) {

        if(!newValue) {
            $scope.userposition = null;
            return;
        }

        $scope.userposition = {
            latitude: $scope.pos.latitude,
            longitude: $scope.pos.longitude
        };

    });*/

});

appControllers.controller('ImgCtrl', function($scope, $routeParams, device){
    $scope.stationID = $routeParams.stationID;
    $scope.imgID = $routeParams.imgID;
    $scope.getWidth = {
        "width" : device.width + 'px'
    }
});


appControllers.controller('MainCtrl', function ($scope, geolocation, TOUR, Map) {

    $scope.mapOffset = {top: 0, left: 0};
    $scope.pois = TOUR.pointsOfInterest;
    $scope.poi = $scope.pois[0];

    geolocation.watchPosition(function (position) {
        /* Add pos to rootScope pos will be watched for changes in PoiCtrl */
        /*alert(position.coords.accuracy);*/
        $scope.pos = {latitude: position.coords.latitude, longitude: position.coords.longitude, accuracy: position.coords.accuracy};
    });

    $scope.$watch('pos', function (newValue) {
        $scope.userPosition = (!newValue)?  Map.icons[0].coords : newValue;
        angular.forEach(Map.icons, function(icon, index) {
            var distance = Map.distance(icon.coords, $scope.userPosition);
            icon.isActive = (distance <= 0.1);
        });
    });

    /*console.log($scope);*/
});