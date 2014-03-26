'use strict';

describe('notificationService', function () {
    var rootScope;
    var service;

    // load the service's module
    beforeEach(module('phonegapServices'));

    beforeEach(function(){
        inject(function ($rootScope, deviceReadyService){

        })
    })

    it('should call notification alert', inject(function (notification) {
        var called = false;
        notification.alert(unescape("message"), function () {
            called = true;
        }, unescape("title"), "button");
        helper.trigger(window.document, 'deviceready');
        expect(called).toBe(true);
    }));

});
