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
appControllers.controller('PoiCtrl', function ($rootScope, $scope, notification, media, geolocation) {

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
            left: $scope.map.position.left + "px",
            height: "285px"
        }
    }

    $scope.mapClicked = function(event) {
        console.log(event);
        var img = angular.element(event.target);
        var parent = img.parent();
        console.log("img: " + img);
        console.log("parent: " + parent);
        console.log("img top: " + img.prop('offsetTop'));
        console.log("img left: " + img.prop('offsetLeft'));
        console.log("img width: " + img.prop('offsetWidth'));
        console.log("img height: " + img.prop('offsetHeight'));
        console.log("parent top: " + parent.prop('offsetTop'));
        console.log("parent left: " + parent.prop('offsetLeft'));
        console.log("parent width: " + parent.prop('offsetWidth'));
        console.log("parent height: " + parent.prop('offsetHeight'));
        console.log("parent marginLeft: " + parent.prop('offsetParent'));

        var viewportOffsetLeft = parent.parent().prop('offsetLeft');
        var viewportWidth = parent.prop('offsetWidth');
        var shiftX = viewportOffsetLeft + viewportWidth/2 - event.pageX;
        console.log(shiftX);

        var viewportOffsetTop = parent.parent().prop('offsetTop');
        var viewportHeight = parent.prop('offsetHeight');
        var shiftY = viewportOffsetTop + viewportHeight/2 - event.pageY;
        console.log(shiftY);




        /*var centerX = par*/




        /*alert("event x: " + event.x);
        alert("event y: " + event.y);
        alert("event offsetX: " + event.offsetX);
        alert("event offsetY: " + event.offsetY);
        alert("event pageX: " + event.pageX);
        alert("event pageY: " + event.pageY);*/
        $scope.map.position.left += shiftX;
        $scope.map.position.top += shiftY;
    }

    /*
     * Watch position for changes.
     * If distance to poi <= 50 alert with media-information
     */

    geolocation.watchPosition(function (position) {
        /* Add pos to rootScope pos will be watched for changes in PoiCtrl */
        alert(position);
        $rootScope.pos = {latitude: position.coords.latitude, longitude: position.coords.longitude, accuracy: position.coords.accuracy};
    });

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
        $rootScope.pos = {latitude: position.coords.latitude, longitude: position.coords.longitude, accuracy: position.coords.accuracy};
    });
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
