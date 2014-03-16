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
appControllers.controller('PoiCtrl', function ($rootScope, $scope, notification, media, TOUR) {


    $scope.shiftPoi = function (shiftCount) {
        var index = $scope.pois.indexOf($scope.poi) + shiftCount;
        index = (index < 0) ? $scope.pois.length - 1 : (index >= $scope.pois.length) ? 0 : index;
        $scope.poi = $scope.pois[index];
    };

    $scope.positionMarkerStyle = function(position) {
        position = {
            "latitude": 50.109906,
            "longitude": 8.679641
        }
        var mapCorners = {
            topLeft: {
                latitude: 50.1142,
                longitude: 8.6702
            },
            bottomRight: {
                latitude: 50.1030,
                longitude: 8.6920
            }
        }
        var top = (mapCorners.topLeft.latitude - position.latitude) / (mapCorners.topLeft.latitude - mapCorners.bottomRight.latitude) * 991;
        var left = (position.longitude - mapCorners.topLeft.longitude) / (mapCorners.bottomRight.longitude - mapCorners.topLeft.longitude) * 1251;
        return  myPos =  {
            position: "absolute",
            top: Math.round(top - 17.5) + "px",
            left: Math.round(left - 17.5) + "px"
        }

    }

    $scope.map = {
        center: {
            latitude: 50.110290,
            longitude: 8.682265
        },
        position: {
            top: -180,
            left: -600
        },
        draggable: true,
        zoom: 15
    };

    $scope.mapStyle = function() {
        return {
            top: $scope.map.position.top + "px",
            left: $scope.map.position.left + "px"
            /*backgroundImage: "url('./img/map.png')"*/
        }
    }

    $scope.mapClicked = function(event) {
        console.log(event);
        var target = angular.element(event.target);
        var parent = target.parent();;
        if (target.prop('localName') === 'img') {
            parent = parent.parent();
        }

        console.log("img top: " + target.prop('offsetTop'));
        console.log("img left: " + target.prop('offsetLeft'));
        console.log("img width: " + target.prop('offsetWidth'));
        console.log("img height: " + target.prop('offsetHeight'));
        console.log("parent top: " + parent.prop('offsetTop'));
        console.log("parent left: " + parent.prop('offsetLeft'));
        console.log("parent width: " + parent.prop('offsetWidth'));
        console.log("parent height: " + parent.prop('offsetHeight'));
        console.log("parent marginLeft: " + parent.prop('offsetParent'));

        var viewportOffsetLeft = parent.prop('offsetLeft');
        var viewportWidth = parent.prop('offsetWidth');
        var clickX = event.clientX || event.changedTouches[0].clientX;
        var shiftX = viewportOffsetLeft + viewportWidth/2 - clickX;
        console.log(shiftX);

        var viewportOffsetTop = parent.prop('offsetTop');
        var viewportHeight = parent.prop('offsetHeight');
        var clickY = event.clientY || event.changedTouches[0].clientY;
        var shiftY = viewportOffsetTop + viewportHeight/2 - clickY;
        console.log(shiftY);

        $scope.map.position.left += shiftX;
        $scope.map.position.top += shiftY;
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
    $scope.$watch('pos', function (newValue, oldValue) {
        distance = calculateDistance($rootScope.pos.latitude, $rootScope.pos.longitude,
            $scope.poi.coords.latitude, $scope.poi.coords.longitude);
        $rootScope.pos.distance = distance;
        if (distance <= 0.050 && $scope.lastcheck !== $scope.poi) {
            notification.confirm(unescape(nearInfoAlert), function (btnNos) {
                if (btnNos [0] === 1) {
                    media.play($scope.poi.audio, function () {
                        window.alert("Ende!");
                        console.log("JA");
                    });
                }
            }, unescape("Informationen verf%FCgbar"), ["Ja", "Nein"]);
            $scope.lastcheck = $scope.poi;
        }
    });


    function extractIcons() {
        return _.chain(TOUR.pointsOfInterest)
            .filter(function(poi) {
                return poi.icon;
            })
            .map(function(poi) {
                return {
                    station: poi.title,
                    src: poi.icon.src,
                    srcActive: poi.icon.srcActive,
                    top: poi.icon.top,
                    left: poi.icon.left
                }
            })
            .value();
    }


    $scope.mapconfig =  {
        imageSource: './img/map.png',
        container: {
            width: 480,
            height: 400
        },
        bounds: {
            height: 991,
            width: 1251,
            topLeft: {
                latitude: 50.1142,
                longitude: 8.6702
            },
            bottomRight: {
                latitude: 50.1030,
                longitude: 8.6920
            }
        },
        center: {
            latitude: 50.110290,
            longitude: 8.682265
        },
        icons: extractIcons()
    }

    $scope.userposition = {
        latitude: 50.111290,
        longitude: 8.681265
    }

    $scope.getDeviceSize = function() {
        $scope.deviceSize = device.size();
    }

    $scope.goFullscreen = function() {
        
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

    $scope.getWidth = {
        "width" : device.width + 'px'
    }
    $scope.width = device.width;
    $scope.height = device.height;

    $scope.imgID = $routeParams.imgID;
});


appControllers.controller('MapCtrl', function($scope, Map) {

    /*$scope.$watch('pos', function (newValue) {
        if(!newValue) {
            $scope.userPosition = null;
        } else {
            $scope.userPosition = Map.geoToPixels(newValue);
        }
    });*/

    $scope.userPosition = {latitude: 50.110290, longitude: 8.671265};

    console.log($scope);


});


appControllers.controller('MainCtrl', function ($rootScope, geolocation, TOUR) {

    $rootScope.pois = TOUR.pointsOfInterest;
    $rootScope.poi = $rootScope.pois[3];

    geolocation.watchPosition(function (position) {
        /* Add pos to rootScope pos will be watched for changes in PoiCtrl */
        /*alert(position.coords.accuracy);*/
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
