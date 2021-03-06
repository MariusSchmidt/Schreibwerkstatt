'use strict'

describe('Map', function() {

    beforeEach(module('phonegapServices'));
    beforeEach(module('appConfigurations'));


    it('should be defined', inject(function(Map) {
        expect(Map).toBeDefined();
    }));

    it('should calculate distance', inject(function(Map) {
        var pos1 = {
            latitude: 50.1142,
            longitude: 8.6702
        }
        var pos2 = {
            latitude: 50.1030,
            longitude: 8.6920
        }
        expect(Map.distance(pos1, pos2)).toBeCloseTo(1.99, 2);
    }));

    it('should calculate offset 0,0 for topLeft Position', inject(function(Map) {
        expect(Map.geoToPixels({
            latitude: 50.1142,
            longitude: 8.6702
        })).toEqual({
                top: 0,
                left: 0
            });
    }));

    it('should calculate offset 991, 1251 for topLeft Position', inject(function(Map) {
        expect(Map.geoToPixels({
            latitude: 50.1030,
            longitude: 8.6920
        })).toEqual({
                top: 991,
                left: 1251
            });
    }));

    it('should calculate offset 371, 562 for topLeft Position', inject(function(Map) {
        expect(Map.geoToPixels({
            latitude: 50.11,
            longitude: 8.68
        })).toEqual({
                top: 371,
                left: 562
            });
    }));

    it('should contain 12 waypoints', inject(function(Map) {
        expect(Map.waypoints.length).toBe(12);
    }));

    it('should contain 13 icons', inject(function(Map) {
        expect(Map.icons.length).toBe(13);
    }));

    it('should have first icon return default image src', inject(function(Map) {
        expect(Map.icons[0].getImage()).toBe('./img/02-nikolaikirche1.png');
    }));

    it('should have first icon return active image src after being activated', inject(function(Map) {
        Map.icons[0].isActive = true;
        expect(Map.icons[0].getImage()).toBe('./img/02-nikolaikirche2.png');
    }));

    it('should have twelfth icon be equal to alte bruecke', inject(function(Map) {
        var actual = Map.icons[12];
        expect(actual.src).toBe('./img/alte-bruecke1.png');
        expect(actual.srcActive).toBe('./img/alte-bruecke2.png');
        expect(actual.top).toBe(455);
        expect(actual.left).toBe(1014);
        expect(actual.isActive).toBeFalsy();
    }));

    it('should have third waypoint with defined clickarea', inject(function(Map) {
        var actual = Map.waypoints[2];
        expect(actual.id).toBe(2);
        expect(actual.topLeft).toEqual({"x": 753, "y": 313});
        expect(actual.bottomRight).toEqual({x: 773, y: 333});
    }));

    it('should have third waypoint hit at 25, 25', inject(function(Map) {
        var actual = Map.waypoints[2];
        expect(actual.isHit(763, 323)).toBeTruthy();
    }));

    it('should have third waypoint not hit at 55, 25', inject(function(Map) {
        var actual = Map.waypoints[2];
        expect(actual.isHit(55, 25)).toBeFalsy();
    }));

    it('should have third waypoint not hit at 25, 55', inject(function(Map) {
        var actual = Map.waypoints[2];
        expect(actual.isHit(25, 55)).toBeFalsy();
    }));

    it('should have twelfth waypoint be equal to Galgentor', inject(function(Map) {
        var actual = Map.waypoints[11];
        expect(actual.id).toBe(11);
        expect(actual.topLeft).toEqual({"x": 148, "y": 240});
        expect(actual.bottomRight).toEqual({"x": 168, "y": 260});
        expect(actual.isVisited).toBeFalsy();
        expect(actual.isActive).toBeFalsy();
        expect(actual.coords).toEqual({"latitude": 50.109870, "longitude": 8.670244});
    }));

});