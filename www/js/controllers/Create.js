;
define('controllers/Create',
    ['views/create/CreateView'], (function (view) {

        var route;

        function init(data) {

            route = data;

        }

        function start() {

            view.render(route.template, route.data);

        }

        return {

            init: init,
            start: start

        }

    }));