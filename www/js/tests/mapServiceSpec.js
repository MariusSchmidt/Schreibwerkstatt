'use strict'

describe('Map', function() {

    beforeEach(module('phonegapServices'));
    beforeEach(module('appProviders'));


    it('should be defined', inject(function(Map) {
        expect(Map).toBeDefined();
    }));

    it('should calculate distance', inject(function(Map) {
        expect(Map.distance(50.1142, 8.6702, 50.1030, 8.6920)).toBeCloseTo(1.99, 2);
    }));

    it('should calculate euclidean distance', inject(function(Map) {
        expect(Map.euclideanDistance(50.1142, 8.6702, 50.1030, 8.6920)).toBeCloseTo(1.99, 2);
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

    it('should contain six waypoints', inject(function(Map) {
        expect(Map.waypoints.length).toBe(6);
    }));

    it('should contain four markers', inject(function(Map) {
        expect(Map.icons.length).toBe(4);
    }));
});