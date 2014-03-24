'use strict';

describe('deviceReadyService', function () {
    var rootScope;
    var service;

    // load the service's module
    beforeEach(module('phonegapServices'));

    beforeEach(function(){
        inject(function ($rootScope, deviceReadyService){
            rootScope = $rootScope
            service = deviceReadyService;
        })
    })

    it('should resolve the promise after "deviceready" was triggered', inject(function ($rootScope) {
        var prom = "unresolved";
        helper.trigger(window.document, 'deviceready');
        service().then(function (){
            prom = "resolved";
        })
        expect(prom).toBe("unresolved");
    }));

});
