var appControllers = angular.module('appControllers', ['appProviders', 'appDirectives']);

/*
 *  HELPER
 */
var nearInfoAlert = "Ihr Ziel ist in unmittelbarer N%E4he%2C m%F6chten sie nun Informationen dazu erhalten%3F";

var calculateDistance = function (lat1, lon1, lat2, lon2) {
    var deg2rad = function (deg) {
        return deg * (Math.PI / 180);
    };
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1); // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
                    Math.sin(dLon / 2) * Math.sin(dLon / 2)
        ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d = d.toFixed(3); //Distance in m
};


/*
 *  CONTROLLER
 */
appControllers.controller('PoiCtrl', function ($rootScope, $scope, $location, $routeParams, notification, media) {

    $rootScope.poi = $rootScope.pois[$routeParams.stationID];
    $rootScope.stationID = $routeParams.stationID


    $scope.stopAndRedirect = function(path){
        $location.path(path);
        media.stop($scope.media);
        show = false;
    }

    $scope.mediaPlay = function() {
        media.play($rootScope.poi.audio)
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

appControllers.controller('ImgCtrl', function($scope, $rootScope, $routeParams, device){

    $scope.getImageHeight = function(){
        if(device.width >= 500){
            return { "width": "460px"}
        }
        return { "width": "230px"}
    }

    $scope.getWidth = {
        "width" : device.width + 'px'
    }

    $scope.imgID = $routeParams.imgID;
});


appControllers.controller('MapCtrl', function($scope, Map) {
    $scope.$watch('pos', function (newValue) {
        $scope.userPosition = (!newValue)?  Map.icons[0].coords : newValue;
        angular.forEach(Map.icons, function(icon, index) {
            var distance = Map.euclideanDistance(icon.coords, $scope.userPosition);
            icon.isActive = (distance <= 0.1);
        });
    });
    console.log($scope);
});


appControllers.controller('MainCtrl', function ($rootScope, geolocation, TOUR) {
    $rootScope.pois = TOUR.pointsOfInterest;
    $rootScope.poi = $rootScope.pois[0];

    geolocation.watchPosition(function (position) {
        /* Add pos to rootScope pos will be watched for changes in PoiCtrl */
        /*alert(position.coords.accuracy);*/
        $rootScope.pos = {latitude: position.coords.latitude, longitude: position.coords.longitude, accuracy: position.coords.accuracy};
    });
});