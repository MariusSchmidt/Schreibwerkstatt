/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();

        app.resizeApp();

        var map = L.map('map-canvas').setView([50.111778, 8.70115], 14);

        //this works, but is online:
/*

         L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
         maxZoom: 18
         }).addTo(map);

*/

        //TODO build something to fall back to web if not found.

        var southWest = new L.LatLng(50.02893, 8.525391);
        var northEast = new L.LatLng(50.169862, 8.860452);
        var restrictBounds = new L.LatLngBounds(southWest, northEast);

        L.tileLayer('img/mapTiles/{z}/{x}/{y}.png', {
            maxBounds: restrictBounds,
            minZoom: 14,
            maxZoom: 16
        }).addTo(map);


        L.marker([50.111778, 8.70115]).addTo(map)
            .bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();

        var popup = L.popup();

        function onMapClick(e) {
            popup
                .setLatLng(e.latlng)
                .setContent("You clicked the map at " + e.latlng.toString())
                .openOn(map);
        }

        map.on('click', onMapClick);

    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function () {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },

    resizeApp: function () {
        $("#app").height($(window).height());
        $("#app").width($(window).width());
        var navHeight = $("#nav").outerHeight();
        $("#map-canvas").height($(window).height() - navHeight);// TODO set
    }
};

$(window).resize(function () {
    app.resizeApp();
});

/*
 var LeafIcon = L.Icon.extend({
 options: {
 shadowUrl: 'leaf-shadow.png',
 iconSize:     [38, 95],
 shadowSize:   [50, 64],
 iconAnchor:   [22, 94],
 shadowAnchor: [4, 62],
 popupAnchor:  [-3, -76]
 }
 });

 var greenIcon = new LeafIcon({iconUrl: 'leaf-green.png'}),
 redIcon = new LeafIcon({iconUrl: 'leaf-red.png'}),
 orangeIcon = new LeafIcon({iconUrl: 'leaf-orange.png'});

 var appConfig = {
 "tour": {
 "name": "Passionsspiel in Frankfurt",
 "desc": "Bilder mit Übersichtskarten oder alten Stadtteilansichten sind mit einem (?)-Symbol, interessante Orte mit einem (i)-Symbol markiert. Auch Linien und Flächensignaturen und andere Signaturen enthalten Informationen und Bilder.",
 "pointsOfInterest": [
 {"title": "", "desc": "", "iconType": greenIcon, }
 {"title": "", "desc": "", "iconType": redIcon, }
 {"title": "", "desc": "", "iconType": orangeIcon, }
 {"title": "", "desc": "", "iconType": greenIcon, }
 {"title": "", "desc": "", "iconType": redIcon, }
 {"title": "", "desc": "", "iconType": orangeIcon, }
 ]
 }
 "legalNotice": {
 "authors": [
 {"name": "Marius Schmidt", "email": "info@denktmit.de"}
 ],
 },
 }
 */
