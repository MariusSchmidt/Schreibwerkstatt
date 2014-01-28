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

appControllers.controller('MainCtrl', function ($scope, geolocation) {
  geolocation.getCurrentPosition(function (position) {
    $scope.pos = {latitude: position.coords.latitude, longitude: position.coords.longitude}
    alert('Latitude: '              + position.coords.latitude          + '\n' +
          'Longitude: '             + position.coords.longitude         + '\n' +
          'Altitude: '              + position.coords.altitude          + '\n' +
          'Accuracy: '              + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: '     + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '               + position.coords.heading           + '\n' +
          'Speed: '                 + position.coords.speed             + '\n' +
          'Timestamp: '             + position.timestamp                + '\n');
  });
});
