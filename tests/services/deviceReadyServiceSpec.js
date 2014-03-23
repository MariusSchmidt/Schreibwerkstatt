'use strict';

describe('deviceReadyService', function () {
    var rootScope;
    var service;

    var helper = {
        trigger: function(obj, name){
            var e = document.createEvent('Event');
            e.initEvent(name, true, true);
            obj.dispatchEvent(e);
        }
    }

    // load the service's module
    beforeEach(module('phonegapServices'));

    beforeEach(function(){
        inject(function ($rootScope, deviceReadyService){
            rootScope = $rootScope
            service = deviceReadyService;
        })
    })

    it('should resolve the promise after "deviceready" was triggered', function () {
        var prom = 0;
        service().then(function (){
            prom = "resolved";
        })
        helper.trigger(window.document, 'deviceready');
        expect(prom).toBe("resolved");
    });

});
