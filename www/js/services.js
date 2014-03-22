var services = angular.module('phonegapServices', []);

/*
 *  HELPER
 */
window.device = {};
window.device.platform = {};

/*
 *  Services
 */

services.factory('deviceReadyService', function ($document, $q, $rootScope) {
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
    return function () {
        var deferred = $q.defer();

        if ($rootScope.deviceready === true) { //is deviceready already fired? -> promise complete
            deferred.resolve();
        }
        else if ($rootScope.deviceready === undefined) { // else listen for it until its fired an complete promise.
            $rootScope.deviceready = false;
            var readyHeader = function () {
                $rootScope.$apply(function () {

                    $rootScope.deviceready = true;
                    $document.off('deviceready', readyHeader);//Event was fired - unregister handler
                    deferred.resolve();
                });
            };
            $document.on('deviceready', readyHeader);
        }
        return deferred.promise;
    };
});

services.factory('notification', function (deviceReadyService, $rootScope) {
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
            deviceReadyService().then(function () {
                /* Call Phonegap API */
                navigator.notification.alert(message, function () {
                    if (callback) {
                        /* Run callback in $rootScope - because this is not 
                         * inside Angular context  */
                        $rootScope.apply(callback());
                    }
                }, title, buttonName);
            });
        },
        confirm: function (message, callback, title, buttonLabels) {
            deviceReadyService().then(function () {
                /* Call Phonegap API */
                navigator.notification.confirm(message, function () {
                    if (callback) {
                        /* Run callback in $rootScope - because this is not 
                         * inside Angular context  
                         */
                        $rootScope.apply(callback.apply(null, [].concat(arguments)));
                    }
                }, title, buttonLabels);
            });
        }
    };
});

services.factory('media', function (deviceReadyService, $rootScope, platform) {
    return {
        play: function (src, onSuccess, onError) {
            if (!$rootScope.media) {
                //var phonegapPath = getPhonegapPathPrefix();
                deviceReadyService().then(function () {
                    var that = this,
                        args = arguments;

                    var mediaTimer = null;
                    //alert(window.device.platform);
                    //alert(platform.path + src);
                    media = new Media(platform.path + src, function () {
                        var that = this,
                            args = arguments;

                        //$rootScope.media = null;

                        if (onSuccess) {
                            $rootScope.$apply(function () {
                                $rootScope.media = null;
                                onSuccess.apply(that, args);
                            });
                        }
                    }, function () {
                        var that = this,
                            args = arguments;

                        if (onError) {
                            $rootScope.$apply(function () {
                                $rootScope.media = null;
                                onError.apply(that, args);
                            });
                        }
                    });
                    if (media) {
                        /* set mediaPlaying to true */
                        /* add to $rootScope to be able to stop from everywhere */
                        $rootScope.media = media;
                        media.play();

                    }

                });
            }

        },
        stop: function () {
            if ($rootScope.media) {
                $rootScope.media.stop();
                $rootScope.media = null;
            }
        },
        pause: function(){
            if($rootScope.media){
                $rootScope.media.pause();
            }
        },
        resume: function(){
            if($rootScope.media){
                $rootScope.media.play();
            }
        }
    };
});

services.factory('geolocation', function (deviceReadyService, $rootScope) {
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
    return {
        watchPosition: function (onSuccess, onError, options) {
            deviceReadyService().then(function () {
                /* Call Phonegap API */
                $rootScope.watchID = navigator.geolocation.watchPosition(function () {

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

        },
        clearWatch: function (watchID) {
            alert(watchID);
            watchID.clearWatch();
            $rootScope.watchID = null;
        }
    };
});

services.factory('device', function ($window, Map) {
    return {
        width: Math.min($window.innerWidth, Map.size.width),
        height: Math.min($window.innerHeight, Map.size.height)
    }
})

services.factory('platform', function(){
    if (window.device.platform === "Android") {
        return {path: "file:///android_asset/www/"}
    } else {
        return {path: "" }
    }
})

services.service('Map', function (TOUR) {

    this.imageSource = TOUR.mapconfig.imageSource;

    this.size = {
        width: TOUR.mapconfig.bounds.width,
        height: TOUR.mapconfig.bounds.height
    }

    this.bounds = {
        topLeft: TOUR.mapconfig.bounds.topLeft,
        bottomRight: TOUR.mapconfig.bounds.bottomRight
    }

    this.positionMarker = TOUR.mapconfig.positionMarker;

    this.icons = _.map(TOUR.icons, function (icon) {
        return {
            src: icon.src,
            srcActive: icon.srcActive,
            top: icon.top,
            left: icon.left,
            isActive: false,
            coords: icon.coords,
            getImage: function () {
                return this.isActive ? this.srcActive : this.src;
            }
        }
    });

    this.waypoints = _.map(TOUR.pointsOfInterest, function (poi) {
        return {
            id: poi.title,
            topLeft: poi.clickarea.topLeft,
            bottomRight: poi.clickarea.bottomRight,
            isHit: function (x, y) {
                return this.topLeft.x <= x && x <= this.bottomRight.x && this.topLeft.y <= y && y <= this.bottomRight.y;
            }
        }
    });

    this.distance = function (pos1, pos2) {
        var lat1 = pos1.latitude;
        var lon1 = pos1.longitude;
        var lat2 = pos2.latitude;
        var lon2 = pos2.longitude;
        lat = (lat1 + lat2) / 2 * 0.01745;
        dx = 111.3 * Math.cos(lat) * (lon1 - lon2);
        dy = 111.3 * (lat1 - lat2);
        return Math.sqrt(dx * dx + dy * dy);
    }

    this.geoToPixels = function (position) {
        var topLeft = this.bounds.topLeft;
        var bottomRight = this.bounds.bottomRight;
        var top = (topLeft.latitude - position.latitude) / (topLeft.latitude - bottomRight.latitude) * this.size.height;
        var left = (position.longitude - topLeft.longitude) / (bottomRight.longitude - topLeft.longitude) * this.size.width;
        return {
            top: Math.floor(top),
            left: Math.floor(left)
        }
    }

});