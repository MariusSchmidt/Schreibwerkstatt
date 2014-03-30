'use strict'

describe('platform', function() {

    beforeEach(module('phonegapServices'));
    beforeEach(module('appConfigurations'));


    window.device.platform = "Android";

    it('should be ', inject(function(platform) {
        if (window.device.platform === "Android"){
            expect(platform.path).toBe("file:///android_asset/www/");
        } else {
            expect(platform.path).toBe("");
        }
    }));

})