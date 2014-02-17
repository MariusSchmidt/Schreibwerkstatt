var appControllers = angular.module('appControllers', []);

/*
 *  HELPER
 */
var nearInfoAlert = "Ihr Ziel ist in unmittelbarer Nähe,\n\
                    möchten sie nun Informationen dazu erhalten?";

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
appControllers.controller('PoiCtrl', function ($rootScope, $scope, notification, media) {

    $scope.pois = $rootScope.tour.pointsOfInterest;
    $scope.poi = $scope.pois[0];

    $scope.shiftPoi = function (shiftCount) {
        var index = $scope.pois.indexOf($scope.poi) + shiftCount;
        index = (index < 0) ? $scope.pois.length - 1 : (index >= $scope.pois.length) ? 0 : index;
        $scope.poi = $scope.pois[index];
    };

    $scope.map = {
        center: {
            latitude: 50.110290,
            longitude: 8.682265
        },
        position: {
            top: -500,
            left: -1500
        },
        draggable: true,
        zoom: 15
    };

    $scope.mapStyle = function() {
        return {
            top: $scope.map.position.top + "px",
            left: $scope.map.position.left + "px"
        }
    }

    $scope.mapClicked = function() {
        $scope.map.position.top += 15;
        $scope.map.position.left += 20;
    }

    /*
     * Watch position for changes.
     * If distance to poi <= 50 alert with media-information
     */
    $scope.$watch('pos', function () {
        distance = calculateDistance($rootScope.pos.latitude, $rootScope.pos.longitude,
            $scope.poi.lat, $scope.poi.lon);
        $rootScope.pos.distance = distance;
        if (distance <= 0.050 && lastcheck !== $scope.poi) {
            notification.confirm(nearInfoAlert, function (btnNos) {
                if (btnNos [0] === 1) {
                    media.play($scope.poi.media, function () {
                        console.log("JA");
                    });
                }
            }, "Informationen verfügbar", ["Ja", "Nein"]);
        }
        var lastcheck = $scope.poi;
    });
});


appControllers.controller('MainCtrl', function ($rootScope, geolocation) {

    geolocation.watchPosition(function (position) {
        /* Add pos to rootScope pos will be watched for changes in PoiCtrl */
        alert("done");
        $rootScope.pos = {latitude: position.coords.latitude, longitude: position.coords.longitude, accuracy: position.coords.accuracy};
    }, $rootScope);
});

/* This is just a test controller - DELETE THIS! */
appControllers.controller('AudioCtrl', function ($rootScope, $scope, media) {
    $scope.stopMedia = function () {
        media.stop($rootScope.media);
    };
    $scope.playMedia = function () {
        media.play('http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3', function () {
            console.log("Success");
        });
    };

// media.play('http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3',function(){
    //   console.log("playAudio():Audio Success");
    //});
});
