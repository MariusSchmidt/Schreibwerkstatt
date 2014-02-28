
describe('controllers', function(){
    var poiCtrl;

    var notificationMock;
    var mediaMock;

    beforeEach(function(){
        //load Module
        module('appControllers');
        //Service Mocks
        notificationMock = jasmine.createSpyObj('notification', ['confirm']);
        inject(function ($controller, $rootScope){
            //Scope
            scope = $rootScope.$new();
            //Controller
            poiCtrl = $controller("PoiCtrl",$rootScope, {$scope: scope});
        })
    })

    describe("PoiCtrl", function (){
        it("should be defined", function(){
            expect(poiCtrl.message).toBe("test")
        })
    })


})




