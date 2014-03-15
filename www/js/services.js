var services = angular.module('phonegapServices', []);

/*
 *  HELPER
 */

var getPhonegapPathPrefix = function () {
    if (device.platform === "Android") {
        return "file:///android_asset/www/"
    } else {
        return ""
    }
};


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

services.factory('media', function (deviceReadyService, $rootScope) {
    return {
        play: function (src, onSuccess, onError) {
            if (!$rootScope.media) {
                var phonegapPath = getPhonegapPathPrefix();
                deviceReadyService().then(function () {
                    var that = this,
                        args = arguments;

                    var mediaTimer = null;

                    media = new Media(phonegapPath + src, function () {
                        var that = this,
                            args = arguments;

                        $rootScope.media = null;

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
        stop: function (media) {
            if (media) {
                media.stop();
                $rootScope.media = null;
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

services.factory('device', function(){
    return{
        size: function(){
            return window.screen
        }
    }
})

services.service('Map', function (TOUR) {

    this.imageSource = TOUR.mapconfig.imageSource;

    var width = TOUR.mapconfig.bounds.width;
    var height = TOUR.mapconfig.bounds.height;
    var topLeft = TOUR.mapconfig.bounds.topLeft;
    var bottomRight = TOUR.mapconfig.bounds.bottomRight;

    this.icons = _.chain(TOUR.pointsOfInterest)
        .filter(function (poi) {
            return poi.icon;
        })
        .map(function (poi) {
            return {
                id: poi.title,
                src: poi.icon.src,
                srcActive: poi.icon.srcActive,
                top: poi.icon.top,
                left: poi.icon.left,
                isActive: false,
                getImage: function () {
                    return this.isActive ? this.srcActive : this.src;
                }
            }
        })
        .value();

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


    this.distance = function (lat1, lon1, lat2, lon2) {
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
        return d.toFixed(3); //Distance in m
    };

    this.euclideanDistance = function(lat1, lon1, lat2, lon2) {
        lat = (lat1 + lat2) / 2 * 0.01745;
        dx = 111.3 * Math.cos(lat) * (lon1 - lon2);
        dy = 111.3 * (lat1 - lat2);
        return Math.sqrt(dx * dx + dy * dy);
    }

    this.geoToPixels = function(position) {
        var top = (topLeft.latitude - position.latitude) / (topLeft.latitude - bottomRight.latitude) * height;
        var left = (position.longitude - topLeft.longitude) / (bottomRight.longitude - topLeft.longitude) * width;
        return {
            top: Math.floor(top),
            left: Math.floor(left)
        }
    }

});