require.config({
    paths: {
        mustache: 'libs/mustache',
        alice: 'libs/alice.min',
        title: 'libs/require/plugins/title',
        leaflet: 'libs/leaflet/leaflet',
        jquery: 'libs/jquery-2.0.3',
        templates: 'tpl'
    },
    waitSeconds: 10
});

require([
    // Load our app module and pass it to our definition function
    'index'
], function(app){

    var appData = {

        appName:        'urTrip',
        appSlogan:      'Plan.Report.Share',
        create:         'create your trip',
        open:           'open an existing trip',
        share:          'share your trip',
        year:           '2012',
        rights:         'All rights reserved',
        developer:      'Giorgio Natili',
        developerSite:  'webplatform.io'

    };

    // The "app" dependency is passed in as "App"
    app.init(appData);
});