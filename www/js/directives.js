'use strict';

var appDirectives = angular.module('appDirectives', []);

appDirectives.directive('angularmap', function () {

    function link(scope, element, attrs) {

        element.css({
            cursor: 'pointer'
        });

        scope.containerStyle = function () {
            return {
                overflow: 'hidden',
                width: scope.containerWidth + 'px',
                height: scope.containerHeight + 'px'
            }
        };

        scope.mapStyle = function () {
            return {
                position: 'relative',
                top: scope.mapOffsetTop + 'px',
                left: scope.mapOffsetLeft + 'px',
                width: scope.mapWidth + 'px',
                height: scope.mapHeight + 'px',
                "background-image": 'url("./img/map.png")'
            }
        }

        scope.positionMarkerStyle = function () {
            if (scope.userposition) {
                var offset = positionToPixel(scope.userposition);
                return {
                    position: 'absolute',
                    left: offset.left + 'px',
                    top: offset.top + 'px'
                }
            } else {
                return {
                    display: 'none'
                }
            }
        }

        return {
            link: link,
            restrict: 'E',
            scope: {
                state: '='
            },
            template: '<div ng-style="containerStyle()">' +
                '<div ng-style="mapStyle()">' +
                '<img ng-repeat="icon in scope.icons" ng-src="icon.getImage()" style="position: absolute; left:{{icon.left}}px; top:{{icon.top}}px;"  />' +
                '<img src="./img/positionmarker.png" ng-style="positionMarkerStyle()" />' +
                '</div>' +
                '</div>'
        };

    }
})

/*
appDirectives.directive('angularmap', function () {

    function link(scope, element, attrs) {

        element.css({
            cursor: 'pointer'
        });

        init();

        function init() {
            console.log(scope);
            scope.mapImageSource = scope.mapconfig.imageSource;
            scope.mapBounds = scope.mapconfig.bounds;
            scope.mapWidth = scope.mapconfig.bounds.width;
            scope.mapHeight = scope.mapconfig.bounds.height;
            scope.containerWidth = scope.mapconfig.container.width;
            scope.containerHeight = scope.mapconfig.container.height;
            var initialOffset = positionToPixel(scope.mapconfig.center);
            scope.mapOffsetTop = -Math.floor(initialOffset.top - scope.containerHeight / 2.0);
            scope.mapOffsetLeft = -Math.floor(initialOffset.left - scope.containerWidth / 2.0);
            scope.markers = scope.mapconfig.icons;
        };

        function positionToPixel(position) {
            var bounds = scope.mapBounds;
            var top = (bounds.topLeft.latitude - position.latitude) / (bounds.topLeft.latitude - bounds.bottomRight.latitude) * bounds.height;
            var left = (position.longitude - bounds.topLeft.longitude) / (bounds.bottomRight.longitude - bounds.topLeft.longitude) * bounds.width;
            return {
                top: top,
                left: left
            }
        };

        scope.mapClicked = function (event) {
            var wrapper = angular.element(element.children());
            var offsetLeft = wrapper.prop('offsetLeft');
            var offsetTop = wrapper.prop('offsetTop');
            var clickX = event.clientX || event.changedTouches[0].clientX;
            var clickY = event.clientY || event.changedTouches[0].clientY;
            var relativeX = clickX - offsetLeft;
            var relativeY = clickY - offsetTop;
            var shiftX = scope.containerWidth / 2.0 - relativeX;
            var shiftY = scope.containerHeight / 2.0 - relativeY;

            console.log(offsetLeft);
            console.log(offsetTop);
            console.log(clickX);
            console.log(clickY);
            console.log(relativeX);
            console.log(relativeY);
            console.log(shiftX);
            console.log(shiftY);


            console.log(scope.mapOffsetLeft);
            console.log(scope.mapOffsetTop);
            scope.mapOffsetLeft += shiftX;
            scope.mapOffsetTop += shiftY;

        }

        scope.containerStyle = function () {
            return {
                overflow: 'hidden',
                width: scope.containerWidth + 'px',
                height: scope.containerHeight + 'px'
            }
        };

        scope.mapStyle = function () {
            return {
                position: 'relative',
                top: scope.mapOffsetTop + 'px',
                left: scope.mapOffsetLeft + 'px',
                width: scope.mapWidth + 'px',
                height: scope.mapHeight + 'px',
                "background-image": 'url("./img/map.png")'
            }
        }

        scope.positionMarkerStyle = function () {
            if (scope.userposition) {
                var offset = positionToPixel(scope.userposition);
                return {
                    position: 'absolute',
                    left: offset.left + 'px',
                    top: offset.top + 'px'
                }
            } else {
                return {
                    display: 'none'
                }
            }
        }

    }

    return {
        link: link,
        restrict: 'E',
        scope: {
            mapconfig: '=',
            userposition: '='
        },
        template: '<div ng-style="containerStyle()" ng-click="mapClicked($event)">' +
            '<div ng-style="mapStyle()">' +
            '<img ng-repeat="marker in markers" ng-src="{{marker.src}}" style="position: absolute; left:{{marker.left}}px; top:{{marker.top}}px;"  />' +
            '<img src="./img/positionmarker.png" ng-style="positionMarkerStyle()" />' +
            '</div>' +
            '</div>'
    };
});
*/