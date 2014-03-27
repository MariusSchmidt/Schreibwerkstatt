'use strict';

describe('geolocationServiceSpec', function () {
    var $scope;

    // load the service's module
    beforeEach(module('phonegapServices'));

    beforeEach(function(){
        inject(function ($rootScope){
            $scope = $rootScope.$new();
        })
    })


    it('should create a geolocation watch', inject(function ($rootScope, geolocation) {
        geolocation.watchPosition();

        setTimeout(function(){
            expect($rootScope.watchID).toBeDefined();
        }, 5000)
    }));

});
