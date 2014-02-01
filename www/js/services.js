var appServices = angular.module('appServices', []);

/*
 *      Phonegap Services
 */
appServices.factory('cordovaReady', function() {
  return function (fn) {

    var queue = [];

    var impl = function () {
      /*
      Siehe:
       http://stackoverflow.com/questions/7056925/how-does-array-prototype-slice-call-work
       https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments
       https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

       arguments ist ein array like object, dass die dem function call übergebenen parameter enthält.
       Durch Array.prototype.slice.call wird das 'this' in der slice Implementierung auf das arguments
       objejt umgesetzt, dass sich wie ein array verhält. Slice gibt dieses nun in ein echte array konvertiert
       zurück. Dieses wird per push an queue angehänt.
       */
      queue.push(Array.prototype.slice.call(arguments));
    };

    document.addEventListener('deviceready', function () {
      queue.forEach(function (args) {
        fn.apply(this, args);
      });
      impl = fn;
    }, false);

    return function () {
      return impl.apply(this, arguments);
    };
  };
});


appServices.factory('geolocation', function ($rootScope, cordovaReady) {
  return {
    getCurrentPosition: cordovaReady(function (onSuccess, onError, options) {
      navigator.geolocation.watchPosition(function () {
        var that = this,
          args = arguments;

        if (onSuccess) {
          $rootScope.$apply(function () {
            onSuccess.apply(that, args);
          });
        }
      }, function () {
        var that = this,
          args = arguments;

        if (onError) {
          $rootScope.$apply(function () {
            onError.apply(that, args);
          });
        }
      },
      {enableHighAccuracy: true});
    })
  };
});

appServices.factory('media', function(){
    return {
        play: function(src, onSuccess, onError){
            media = new Media(src, onSuccess, onError);
            
            media.play();
            if (mediaTimer == null) {
                mediaTimer = setInterval(function() {
                    // get my_media position
                    my_media.getCurrentPosition(
                        // success callback
                        function(position) {
                            if (position > -1) {
                                setAudioPosition((position) + " sec");
                            }
                        },
                        // error callback
                        function(e) {
                            console.log("Error getting pos=" + e);
                            setAudioPosition("Error: " + e);
                        }
                    );
                }, 1000);
            }
        }
    };
});


appServices.factory('distance', function(){
    /*
 * This Service calculates the distance between two points using
 * Haversine formula
 * Params:
 *      - position 1 (phonegaps gelocation object)
 *      - position 2 (phonegaps gelocation object)
 * Return:
 *      - distance (km.mmm)
 */
    return{
    calculate: function(lat1,lon1,lat2,lon2){
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
   }
    };
});
