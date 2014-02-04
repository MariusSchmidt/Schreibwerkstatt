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

appControllers.controller('PoiCtrl', function($scope, notification) {
    
    $scope.pois = [
        {title: "01. Hauptwache", shortDesc: "Lorema", lat: 50.11473789901214, lon: 8.6785872056261,
            media: "http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3"},
        {title: "02. Judengasse", shortDesc: "Iosum", lat: 50.22513, lon: 8.57191,
            media: "http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3"},
        {title: "03. Konstablerwache", shortDesc: "Teyt", lat: 50.11572859300329, lon: 8.688672311522033,
            media: "http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3"},
        {title: "04. Dom", shortDesc: "Dicosum", lat: 50.115893706675315, lon: 8.69356466076514,
            media: "http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3"}
    ];
 
    
    $scope.poi = $scope.pois[1];

    $scope.shiftPoi = function(shiftCount) {
        var index = $scope.pois.indexOf($scope.poi) + shiftCount;
        index = (index < 0)? $scope.pois.length-1 : (index >= $scope.pois.length)? 0 : index;
        $scope.poi = $scope.pois[index];
    };
       
    /*
     * Watch position for changes.
     * If distance to poi <= 50 alert with media-information
     */
    $scope.$watch ('pos', function() {
        distance = calculateDistance($scope.pos.latitude, $scope.pos.longitude,
            $scope.poi.lat, $scope.poi.lon);
          $scope.pos.distance = distance;
        if (distance <= 0.050) 
        {
           notification.confirm(nearInfoAlert, function(btnNos){
               if (btnNos [0] === 1)
               {
                   //ToDo: Informationen abspielen 
                   console.log("JA");
               }
               else
               {
                   //ToDo: else entfernen
                   console.log("No");
               }
           },"Informationen verfügbar", ["Ja", "Nein"]);
        }
    });
});


appControllers.controller('MainCtrl', function ($rootScope, geolocation) {
  geolocation.watchPosition(function (position) {
      /* Add pos to rootScope pos will be watched for changes in PoiCtrl */
      $rootScope.pos = {latitude: position.coords.latitude, longitude: position.coords.longitude, accuracy: position.coords.accuracy};
//    media.play('http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3',function(media){
//        $scope.media=media;
//        console.log("playAudio():Audio Success");
//    });
  });
});

//appControllers.controller('AudioCtrl', function ($scope, media){
//    $scope.stopMedia = function() {
//        media.stop($scope.media);
//    };
//// media.play('http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3',function(){
//     //   console.log("playAudio():Audio Success");
//    //});
//});
