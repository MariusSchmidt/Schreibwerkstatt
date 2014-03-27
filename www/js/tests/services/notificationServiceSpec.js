'use strict';

describe('notificationService', function () {
    var rootScope;
    var service;

    // load the service's module
    beforeEach(module('phonegapServices'));

    beforeEach(function(){
        inject(function ($rootScope){

        })
    })


    it('should call notification alert', inject(function (notification) {
        var called = false;
        notification.alert("message", function () {
            called = true;
        }, "title", "button")
        //helper.trigger(window.document, 'deviceready');
        setTimeout(function(){
            expect(called).toBe(true);
        }, 5000)
    }));

});
