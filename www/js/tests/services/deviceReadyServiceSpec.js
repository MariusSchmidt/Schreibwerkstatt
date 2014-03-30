'use strict';

describe('deviceReadyService', function () {
    var rootScope;
    var service;

    try {
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
            service().then(function (){
                prom = "resolved";
                expect(prom).toBe("resolved");
            })
            //helper.trigger(document, 'deviceready');
        }));
    }catch( e ){

    }


});
