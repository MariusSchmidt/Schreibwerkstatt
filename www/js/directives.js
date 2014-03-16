'use strict';

var appDirectives = angular.module('appDirectives', ['phonegapServices']);

appDirectives.directive('angularmap', function (Map, device) {

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

            this.clickX = event.clientX || event.changedTouches[0].clientX;
            this.clickY = event.clientY || event.changedTouches[0].clientY;

            this.wrapper = angular.element(element.children());
            this.offsetLeft = this.wrapper.prop('offsetLeft');
            this.offsetTop = this.wrapper.prop('offsetTop');
            this.relativeX = this.clickX - this.offsetLeft;
            this.relativeY = this.clickY - this.offsetTop;
            this.shiftX = scope.canvas.width / 2.0 - this.relativeX;
            this.shiftY = scope.canvas.height / 2.0 - this.relativeY;

            var newOffset = {
                left: scope.mapOffset.left + this.shiftX,
                top: scope.mapOffset.top + this.shiftY
            }
            this.setMapOffset(newOffset);

            console.log('offsetLeft: ' + this.offsetLeft);
            console.log('offsetTop: ' + this.offsetTop);
            console.log('clickX: ' + this.clickX);
            console.log('clickY: ' + this.clickY);
            console.log('relativeX: ' + this.relativeX);
            console.log('relativeY: ' + this.relativeY);
            console.log('shiftX: ' + this.shiftX);
            console.log('shiftY: ' + this.shiftY);
            console.log('map.offset.left: ' + scope.mapOffset.left);
            console.log('map.offset.top: ' + scope.mapOffset.top);

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
            var newOffset = {
                left: scope.canvas.width / 2 - pixelCoords.left,
                top: scope.canvas.height / 2 - pixelCoords.top
            }
            this.setMapOffset(newOffset);
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