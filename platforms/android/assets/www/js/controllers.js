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
    //distance = distance.calculate(50.22513, 8.57191, position.coords.latitude, position.coords.longitude);
    $scope.pos = {latitude: position.coords.latitude, longitude: position.coords.longitude, accuracy: position.coords.accuracy};
    media.play('http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3',function(media){
        $scope.media=media;
        console.log("playAudio():Audio Success");
    });
  });
});

appControllers.controller('AudioCtrl', function ($scope, media){
    $scope.stopMedia = function() {
        media.stop($scope.media);
    };
// media.play('http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3',function(){
     //   console.log("playAudio():Audio Success");
    //});
});
