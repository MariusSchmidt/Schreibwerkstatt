'use strict'

describe('device', function() {

    beforeEach(module('phonegapServices'));
    beforeEach(module('appConfigurations'));

    it('should return width and height', inject(function(device) {
        expect(device.width).toBeDefined();
        expect(device.height).toBeDefined();
    }));

})
