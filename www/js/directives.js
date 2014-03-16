'use strict';

var appDirectives = angular.module('appDirectives', ['phonegapServices']);

appDirectives.directive('angularmap', function (Map, device) {

    function link(scope, element, attrs) {

        scope.offset = {top: 0, left: 0};
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

            console.log('offsetLeft: ' + this.offsetLeft);
            console.log('offsetTop: ' + this.offsetTop);
            console.log('clickX: ' + this.clickX);
            console.log('clickY: ' + this.clickY);
            console.log('relativeX: ' + this.relativeX);
            console.log('relativeY: ' + this.relativeY);
            console.log('shiftX: ' + this.shiftX);
            console.log('shiftY: ' + this.shiftY);

            if (scope.offset.left + this.shiftX > 0) {
                scope.offset.left = 0;
            } else if (Math.abs(scope.offset.left + this.shiftX) + scope.canvas.width > Map.size.width) {
                scope.offset.left = scope.canvas.width - Map.size.width;
            } else {
                scope.offset.left += this.shiftX;
            }

            if (scope.offset.top + this.shiftY > 0) {
                scope.offset.top = 0;
            } else if (Math.abs(scope.offset.top + this.shiftY) + scope.canvas.height > Map.size.height) {
                scope.offset.top = scope.canvas.height - Map.size.height;
            } else {
                scope.offset.top += this.shiftY;
            }

            console.log('map.offset.left: ' + scope.offset.left);
            console.log('map.offset.top: ' + scope.offset.top);

        }

        scope.containerStyle = function () {
            console.log(scope);
            console.log(scope.canvas.width);
            console.log(scope.canvas.height);
            return {
                overflow: 'hidden',
                width: scope.canvas.width + 'px',
                height: scope.canvas.height + 'px'
            }
        };

        scope.mapStyle = function () {
            return {
                position: 'relative',
                top: scope.offset.top + 'px',
                left: scope.offset.left + 'px',
                width: Map.size.width + 'px',
                height: Map.size.height + 'px',
                "background-image": 'url("./img/map.png")'
            }
        }

        scope.positionMarkerStyle = function () {
            if (scope.userPosition) {
                this.pixelCoords = Map.geoToPixels(scope.userPosition);
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
            userPosition: '='
        },
        template: '<div ng-style="containerStyle()" ng-click="mapClicked($event)">' +
            '<div ng-style="mapStyle()">' +
            '<img ng-repeat="icon in icons" ng-click="icon.toggleActive(); $event.stopPropagation();" ng-src="{{icon.getImage()}}" ng-style="iconStyle(icon)"  />' +
            '<img src="./img/positionmarker.png" ng-style="positionMarkerStyle()" />' +
            '<img ng-click="goToPosition()" src="img/position.png" style="">' +
            '<a ng-href="#/poi" ><img src="img/info.png" style="float: right"></a>' +
            '</div>' +
            '</div>'
    };
})