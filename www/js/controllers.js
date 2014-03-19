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

appControllers.controller('SplashCtrl', function($scope, device){

    $scope.roemer = (device.width > 420)? './img/roemer_big.png' : './img/roemer_small.png';

});


appControllers.controller('MainCtrl', function ($scope, geolocation, notification, TOUR, Map) {

    $scope.mapOffset = {top: 0, left: 0};
    $scope.pois = TOUR.pointsOfInterest;
    $scope.poi = $scope.pois[0];
    $scope.checked = [];

    geolocation.watchPosition(function (position) {
        /* Add pos to rootScope pos will be watched for changes in PoiCtrl */
        /*alert(position.coords.accuracy);*/
        $scope.pos = {latitude: position.coords.latitude, longitude: position.coords.longitude, accuracy: position.coords.accuracy};
    });


    $scope.$watch('pos', function (newValue) {
        $scope.nearPois = [];
        $scope.userPosition = (!newValue)?  Map.icons[0].coords : newValue;

        angular.forEach(Map.icons, function(icon, index) {
            var distance = Map.distance(icon.coords, $scope.userPosition);
            icon.isActive = (distance <= 0.1);

        });

        angular.forEach($scope.pois, function(poi, index){
            var distance = Map.distance($scope.pos, poi.coords);
            if(distance <= 0.1){
                //alert("poiID " + poi.title);
                if ($scope.checked.indexOf(poi) == -1){
                    $scope.checked.push(poi);
                    $scope.nearPois.push(poi.id + 1);
                }
            }
        });

        if($scope.nearPois.length > 0){
            if($scope.nearPois.length == 1){
                var infotext = "Sie befinden sich in unmittelbarer N%E4he zu Station "+$scope.nearPois.toString();
            } else {
                var infotext = "Sie befinden sich in unmittelbarer N%E4he zu folgenden Stationen%3A %0A"+$scope.nearPois. toString();
            }

            notification.alert(unescape(infotext), function(){
                }, unescape("Informationen verf%FCgbar%0A"), "ok"
            );
        }

//        if($scope.nearPois.length > 0){
//            notification.confirm(unescape("nearInfoAlert"), function (btnNos) {
//                if (btnNos [0] === 1) {
//                    console.log("ja");
//                }
//            }, unescape("Sie befinden sich in unmittelbarer N%E4he zu " ), ["Ja", "Nein"]);
//        }
    });

    /*console.log($scope);*/
});