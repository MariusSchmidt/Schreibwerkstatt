;
define('controllers/Share',
    ['views/share/ShareView'], (function (view) {

        var route, connectionStatus;

        function init(data) {

            route = data;
            connectionStatus = checkConnection();

        }

        function start() {

            connectionStatus == 0 ? view.abort('No Internet Connection!') : null;
            connectionStatus == 1 ? view.warning('It\'s not possible to determine the internet connection status') : null;

            view.render(route.template, route.data);

        }

        function checkConnection() {

            var networkState, status;

            try {

                networkState = navigator.connection.type;

            } catch (error) {

                console.log('Connection API error', error);
                networkState = Connection.UNKNOWN;

            }

            if (networkState == Connection.NONE) {

                status = 0;

            } else if (networkState == Connection.UNKNOWN) {

                status = 1;

            } else {

                status = 2;

            }

            return status;

        }

        return {

            init: init,
            start: start

        }

    }));