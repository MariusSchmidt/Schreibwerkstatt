var services = angular.module('phonegapServices', []);

services.factory ( 'deviceReadyService', function ($document, $q, $rootScope) {
    /*
     * This Angular service returns a promise (a function that returns a promise).
     * If deviceready isn't True it will listen on deviceReadyEvent until its fired
     * The calling function will be informed via the promises complete callback.
     * Usage:
     * 
     * deviceReadyService().then(function())
     * 
     * Testable with Ripple: Yes
     */
    return function() {
    var deferred = $q.defer();
    
    if ( $rootScope.deviceready === true)
    { //is deviceready already fired? -> promise complete
        deferred.resolve();
    }
    else if ( $rootScope.deviceready === undefined )
    { // else listen for it until its fired an complete promise.
        $rootScope.deviceready=false;
        var readyHeader = function() {
            $rootScope.$apply (function () {
                $rootScope.deviceready= true;
                $document.off( 'deviceready', readyHeader);//Event was fired - unregister handler
                deferred.resolve();
            });
         };
        $document.on ('deviceready', readyHeader );
    }
    return deferred.promise;
    };
});

services.factory ('notification', function( deviceReadyService, $rootScope ){
    /*
     * This service provides the basic notification functions of Phonegap:
     * - alert (Testable with Ripple: Yes)
     * - confirm (Testable with Ripple: No)
     * 
     * Usage:
     * (Dont forget dependency Injection)
     * alert: 
     * notification.alert(message, callback, title, buttonName)
     * @param {string} message
     * @param {function} callback
     * @param {string} title
     * @param {string} buttonName
     * confirm: 
     * notification.confirm(message, callback, title, [buttonLabels])
     * @param {string} message
     * @param {function} callback
     * @param {string} title
     * @param {Array} buttonLabels
     * @returns {Array} btnNos (btnNos[0] contains index of klicked Button
     *  
     */
    return {
        alert: function (message, callback, title, buttonName) {
            deviceReadyService().then (function () {
                /* Call Phonegap API */
                navigator.notification.alert ( message, function(){
                    if ( callback ) {
                        /* Run callback in $rootScope - because this is not 
                         * inside Angular context  */
                        $rootScope.apply ( callback () );
                    }
                }, title, buttonName ); 
            });
        },
        confirm: function (message, callback, title, buttonLabels) {
            deviceReadyService().then (function () {
                /* Call Phonegap API */
                navigator.notification.confirm ( message, function(){
                    if ( callback ) {
                        /* Run callback in $rootScope - because this is not 
                         * inside Angular context  
                         */
                        $rootScope.apply ( callback.apply (null, [].concat(arguments)));
                    }
                }, title, buttonLabels ); 
            });
        }      
    };
});

services.factory('media', function (deviceReadyService, $rootScope){
    return {
        play: function (src, onSuccess, onError){
            deviceReadyService().then (function () {
            var that = this,
                args = arguments;
                
               
               media = new Media(src, function(){
                    var that = this,
                        args = arguments;
                   
                   
                   if(onSuccess) {
                       $rootScope.$apply(function() {
                            onSuccess.apply(that, args);
                       });
                   }
               }, function(){
                    var that = this,
                        args = arguments;

                    if (onError) {
                        $rootScope.$apply(function () {
                            onError.apply(that, args);
                        });
                    }
               });
               if (media) {
                    /* set mediaPlaying to true */
                    /* add to $rootScope to be able to stop from everywhere */
                    $rootScope.media=media; 
                    media.play();                   
               }

            });
        },
        stop: function(media){
            if (media){
                media.stop();
                $rootScope.media=null;
            }
        }
    };
});

services.factory('geolocation', function (deviceReadyService, $rootScope){
    /* This service provides Phonegaps watchPosition function.
     * It returns the devices current Position in a defined interval
     * 
     * @param {function} sucessCallback
     * @param {function} errorCallback
     * @param {string} options ({ maximumAge: 3000, timeout: 5000, enableHighAccuracy: true };)
     * @returns {position} Position
     * 
     * Testable with Ripple: Yes
     */
    return{
        watchPosition: function (onSuccess, onError, options) {
            deviceReadyService().then (function(){
            /* Call Phonegap API */
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
                {enableHighAccuracy: true, timeout: 2000}); 
            });

        }
    };
});