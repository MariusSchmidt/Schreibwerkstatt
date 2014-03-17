'use strict';

var appDirectives = angular.module('appDirectives', ['phonegapServices']);

appDirectives.directive('angularmap', function ($location, Map, device) {

    function link(scope, element, attrs) {

        /*scope.mapOffset = {top: 0, left: 0};*/
        scope.icons = Map.icons;

        element.css({
            cursor: 'pointer'
        });

        scope.canvas = {
            width: device.width,
            height: device.height
        }

        scope.mapClicked = function (event) {

            var eventX = event.clientX || event.changedTouches[0].clientX;
            var eventY = event.clientY || event.changedTouches[0].clientY;

            var wrapper = angular.element(element.children());
            var offsetLeft = wrapper.prop('offsetLeft');
            var offsetTop = wrapper.prop('offsetTop');

            var pixelCoords = {
                left: eventX - offsetLeft - scope.mapOffset.left,
                top: eventY - offsetTop - scope.mapOffset.top
            }

            this.goToPixelPosition(pixelCoords)



        }

        scope.goToPixelPosition = function(pixelCoords) {
            var newOffset = {
                left: scope.canvas.width / 2 - pixelCoords.left,
                top: scope.canvas.height / 2 - pixelCoords.top
            }
            this.setMapOffset(newOffset);
        }

        scope.setMapOffset = function(offset) {
            if (offset.left > 0) {
                scope.mapOffset.left = 0;
            } else if (Math.abs(offset.left) + scope.canvas.width > Map.size.width) {
                scope.mapOffset.left = scope.canvas.width - Map.size.width;
            } else {
                scope.mapOffset.left = offset.left;
            }

            if (offset.top > 0) {
                scope.mapOffset.top = 0;
            } else if (Math.abs(offset.top) + scope.canvas.height > Map.size.height) {
                scope.mapOffset.top = scope.canvas.height - Map.size.height;
            } else {
                scope.mapOffset.top = offset.top;
            }
        }

        scope.goToUserPosition = function(event) {
            if(!scope.userPosition) {
                return;
            }
            var pixelCoords = Map.geoToPixels(scope.userPosition);
            scope.goToPixelPosition(pixelCoords);

        }

        scope.containerStyle = function () {
            return {
                position: 'relative',
                overflow: 'hidden',
                width: scope.canvas.width + 'px',
                height: scope.canvas.height + 'px'
            }
        };

        scope.mapStyle = function () {
            return {
                position: 'relative',
                top: scope.mapOffset.top + 'px',
                left: scope.mapOffset.left + 'px',
                width: Map.size.width + 'px',
                height: Map.size.height + 'px',
                "background-image": 'url("./img/map.png")'
            }
        }

        scope.positionMarkerStyle = function () {
            if (scope.userPosition) {
                this.pixelCoords = Map.geoToPixels(scope.userPosition);
                this.pixelCoords.top -= Map.positionMarker.size / 2;
                this.pixelCoords.left -= Map.positionMarker.size / 2;
                return {
                    position: 'absolute',
                    left: this.pixelCoords.left + 'px',
                    top: this.pixelCoords.top + 'px'
                }
            } else {
                return {
                    display: 'none'
                }
            }
        }

        scope.iconStyle = function(icon) {
            return {
                position: 'absolute',
                top: icon.top + 'px',
                left: icon.left + 'px'
            }
        }

    }

    return {
        link: link,
        restrict: 'E',
        scope: {
            userPosition: '=',
            mapOffset: '='
        },
        templateUrl: './templates/angularmap.html'
    };
})