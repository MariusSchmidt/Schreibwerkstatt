var appControllers = angular.module('appControllers', []);

appControllers.controller('PoiCtrl', function($scope) {
    $scope.pois = [
        {title: "01. Hauptwache", shortDesc: "Lorema "},
        {title: "02. Judengasse", shortDesc: "Iosum"},
        {title: "03. Konstablerwache", shortDesc: "Teyt"},
        {title: "04. Dom", shortDesc: "Dicosum"}
    ];

    $scope.poi = $scope.pois[1];

    $scope.shiftPoi = function(shiftCount) {
        var index = $scope.pois.indexOf($scope.poi) + shiftCount;
        index = (index < 0)? $scope.pois.length-1 : (index >= $scope.pois.length)? 0 : index;
        $scope.poi = $scope.pois[index];
    };
});


appControllers.controller('MainCtrl', function ($scope, geolocation, media) {
  geolocation.getCurrentPosition(function (position) {
    var getDistance = function (lat1,lon1,lat2,lon2) {
        var deg2rad = function(deg) {
            return deg * (Math.PI/180);
        };
        var R = 6371; // Radius of the earth in km
        var dLat = deg2rad(lat2-lat1);  // deg2rad below
        var dLon = deg2rad(lon2-lon1); 
        var a = 
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
        Math.sin(dLon/2) * Math.sin(dLon/2)
        ; 
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
        var d = R * c; // Distance in km
        return d = d.toFixed(3); //Distance in m
    };
    distance = getDistance(50.22513, 8.57191, position.coords.latitude, position.coords.longitude);
    $scope.pos = {latitude: position.coords.latitude, longitude: position.coords.longitude, accuracy: position.coords.accuracy, distance: distance}
    media.play('http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3',function(){
        console.log("playAudio():Audio Success");
    });
  });
});

appControllers.controller('AudioCtrl', function ($scope, media){
    media.play(function(){
        console.log("playAudio():Audio Success");
    });
});
