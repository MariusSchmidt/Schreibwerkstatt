;
define('routers/approuter', ['../model/State'], (function (State) {

    var routes = {
            create: new State({sectionName: 'Create'}, 'Create', '/create'),
            open: new State({sectionName: 'Open'}, 'Open', '/open'),
            share: new State({sectionName: 'Share'}, 'Share', '/share')
        },
        _currentRoute,
        _routes = [];

    function init() {

        window.addEventListener('pushstate', onPushState);
        window.addEventListener('popstate', onPopState);
        document.addEventListener("backbutton", onBackButton, false);

    }

    function dispose() {

        window.removeEventListener('pushstate', onPushState);
        window.removeEventListener('popstate', onPopState);
        document.removeEventListener("backbutton", onBackButton, false);

        _currentRoute = null;
        _routes = [];

    }

    function onPushState(event) {

        if (event.detail.view) {

            updateContent(routes[event.detail.view]);

        }

        console.log('pushstate fired!');
        event.preventDefault();

    }

    function onBackButton(event) {

        if (_currentRoute) {

            var evt = document.createEvent("Event");
            evt.initEvent("resetView", true, true);

            this.dispatchEvent(evt);

            event.preventDefault();

        }

    }

    function onPopState(event) {

        if (event && event.state && event.state.view != '') {

            console.dir(event);
            _routes.pop();
            updateContent(routes[event.state.view]);

        } else {

            _currentRoute = null;

            var evt = document.createEvent("Event");
            evt.initEvent("resetView", true, true);

            this.dispatchEvent(evt);

        }

        console.log('popstate fired!');
        event.preventDefault();

    }

    function updateContent(route) {

        _currentRoute = route;
        _routes.push(_currentRoute);
        console.log('---', route, _routes.length);

        require(['controllers/' + route.controller], function (controller) {

            controller.init(route, _routes.length);
            controller.start();

        });

    }

    return {

        dispose: dispose,
        init: init,
        currentRoute: _currentRoute

    }

}));