
'use strict'

describe('MapCtrl', function(){

    var $scope;

    beforeEach(angular.mock.module('appControllers'));

    beforeEach(angular.mock.inject(function($rootScope, $controller){
        $scope = $rootScope.$new();

        //declaration of the controller and mock injection
        $controller('PoiCtrl', {
            $scope: $scope
        });
    }));

    /*it('should call phonegaps media API', function(){
        //this test needs a media Object mock to pass
        //$scope.mediaPlay();
        //expect(mediaMock.play).toHaveBeenCalled();
    });*/

});