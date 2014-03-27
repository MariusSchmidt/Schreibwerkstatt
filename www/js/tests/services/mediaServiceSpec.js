'use strict';

describe('mediaServiceSpec', function () {
    var $scope;

    // load the service's module
    beforeEach(module('phonegapServices'));

    beforeEach(function(){
        inject(function ($rootScope){
        $scope = $rootScope.$new();
        })
    })


    it('should create a media Object', inject(function ($rootScope, media) {
        media.play("media/Station01.mp3");

        setTimeout(function(){
            expect($scope.media).toBeDefined();
        }, 5000)

    }));

    it('should stop and delete a media Object', inject(function ($rootScope, media) {
        media.play("media/Station01.mp3");
        media.stop();

        setTimeout(function(){
            expect($scope.media).toBe(null);
        }, 5000)

    }));

    it('should pause a media Object', inject(function ($rootScope, media) {
        media.play("media/Station01.mp3");
        media.pause();

        setTimeout(function(){
            expect($scope.media).not.toBe(null);
        }, 5000)

    }));

});
