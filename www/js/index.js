define('index', [
    'mustache',
    'alice',

    'leaflet'], (function (mustache, alice, leaflet) {

    var appData;

    var bindEvents = function () {

        if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {

            document.addEventListener("deviceready", onDeviceReady, false);

        } else {

            onDeviceReady(); // Running is the browser

        }

    };

    var onDeviceReady = function () {

        console.log('Received Event: onDeviceReady');

        // Build the main app view
        loadTemplates();

    };

    var templatesReady = function (splash) {

        //buildSplashScreen(splash);

        // navigator.splashscreen.hide();

    };

    var buildSplashScreen = function (tpl) {

        // Inject the template in the view
        var html = mustache.to_html(tpl, appData);
        document.querySelector('div.app').innerHTML = html;

    };

    var loadTemplates = function () {

        require([
            'title!../tpl/splash-tpl.html'
        ], templatesReady);


        console.log(document.paths)

    };

    var initialize = function (data) {

        appData = data;
        bindEvents();

        resizeApp();

        loadMap();

        $(window).resize(function () {
            resizeApp();
        });

    };

    var loadMap = function () {
        var map = L.map('map-canvas').setView([50.11372, 8.67909], 14);
        var southWest = new L.LatLng(50.02893, 8.525391);
        var northEast = new L.LatLng(50.169862, 8.860452);
        var restrictBounds = new L.LatLngBounds(southWest, northEast);
        L.tileLayer('img/mapTiles/{z}/{x}/{y}.png', {
            maxBounds: restrictBounds,
            minZoom: 14,
            maxZoom: 16
        }).addTo(map);
        L.marker([50.11372, 8.67909]).addTo(map)
            .bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();
        var popup = L.popup();
        function onMapClick(e) {
            popup
                .setLatLng(e.latlng)
                .setContent("You clicked the map at " + e.latlng.toString())
                .openOn(map);
        }
        map.on('click', onMapClick);
    }

    var resizeApp = function () {
        /*$("#app").height($(window).height());
        $("#app").width($(window).width());*/
        var navHeight = $("nav").outerHeight();
        var footerHeight = $("footer").outerHeight();
        $("#map-canvas").height($(window).height() - (navHeight + footerHeight));// TODO set
    }

    return {
        init: initialize,
        resizeApp: resizeApp
    };
}));
