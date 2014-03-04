
describe('controllers', function(){
    var poiCtrl, $scope;

    var notificationMock;
    var mediaMock;

    beforeEach(function(){
        //load Module
        module('appControllers');
        //Service Mocks
        mediaMock = jasmine.createSpyObj('media', ['play', 'stop']);
        notificationMock = jasmine.createSpyObj('notification', ['confirm']);
        inject(function ($controller, $rootScope){
            var btnNos = new Array();
            var mediaObj = {};
            //Scope
            $scope = $rootScope.$new();
            notificationMock.confirm.andReturn(btnNos[0] = 1);
            mediaMock.play.andReturn(mediaObj);
            mediaMock.stop.andCallFake(function(){
                console.log('media Stop!')
            });
            //Controller
            poiCtrl = $controller("PoiCtrl", {
                $scope: $scope,
                notification: notificationMock});
        })
    })

    describe("PoiCtrl", function (){
        it("should be defined", function(){
            expect(poiCtrl.message).toBe("test")
        })
    })


})




