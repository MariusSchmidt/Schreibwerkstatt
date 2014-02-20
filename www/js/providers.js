'use strict';

var appProviders = angular.module('appProviders', []);

appProviders.constant('TOUR', {
    "legalNotice": {

    },
    "pointsOfInterest": [
        {
            "title": "Einführung",
            "heading": "Passionsspiele im mittelalterlichen Frankfurt",
            "teaser": "Frankfurt war im späten Mittelalter nicht nur bedeutende Messestadt, sondern auch Schauplatz für die Aufführung von Passionsspielen. Fast die ganze Stadt war an diesen religiösen Massenveranstaltungen beteiligt.",
            "images": [
                {
                    "name": "01_start_gesamtansicht_frankfurt_faber.jpg",
                    "caption": "Conrad Faber: Stadt Frankfurt (1552)"
                },
                {
                    "name": "01_dirigierrolle_ub.jpg",
                    "caption": "Dirigierrolle des Passionsspiels (Anfang 14. Jh.)"
                },
                {
                    "name": "01_passionsspiel.jpg",
                    "caption": "Handschrift des Frankfurter Passionsspiels (1493)"
                }
            ],
            "audio": "http://audio.ibeat.org/content/p1rj1s/p1rj1s_-_rockGuitar.mp3",
            "coords": {
                "latitude": 50.110290,
                "longitude": 8.682265
            }
        },
        {
            "title": "Nikolaikirche",
            "heading": "Die Ratsherren und das letzte Abendmahl",
            "teaser": "Der Römerberg ist heute ein Touristenmagnet. Bereits im Mittelalter fanden hier wichtige öffentliche Ereignisse statt. Pfingsten 1492 wurde mitten im Herzen der Messestadt ein Passionsspiel aufgeführt. Selbst die Ratsherren nahmen an diesem Spektakel teil und sicherten sich die besten Plätze.",
            "images": [
                {
                    "name": "02_start_nikolaikirche.jpg",
                    "caption": "Matthäus Merian d.Ä.: Nikolaikirche (1628)"
                },
                {
                    "name": "02_abendmahl_holbein.jpg",
                    "caption": "Hans Holbein d.Ä.: Abendmahl (1501)"
                }
            ],
            "audio": "./media/02_nikolaikirche.mp3",
            "icon": {
                "src": "./img/nikolaikirche-01.png",
                "srcActive": "./img/nikolaikirche-01-pink.png",
                "top": 764,
                "left": 260
            },
            "coords": {
                "latitude": 50.110290,
                "longitude": 8.682265
            }
        },
        {
            "title": "Römer",
            "heading": "Verrat des Juden",
            "teaser": "Der Judaskuss gilt als größter Vertrauensbruch der christlichen Geschichte und ist ein wichtiges Motiv im Frankfurter Passionsspiel. Was geschieht im Mittelalter, wenn Judas’ Verrat öffentlich aufgeführt wird? Die emotionale Anteilnahme der Zuschauer ist so groß, dass der Frankfurter Rat Ausschreitungen befürchtet.",
            "images": [
                {
                    "name": "03_start_ruemerberg_und_nikolaikirche_merian_1628.jpg",
                    "caption": "Matthäus Merian d.Ä.: Römerberg (1628)"
                },
                {
                    "name": "03_judaskuss_holbein.jpg",
                    "caption": "Hans Holbein d.Ä.: Gefangennahme (1501) "
                }
            ],
            "audio": "./media/03_roemer.mp3",
            "icon": {
                "src": "./img/roemer-01.png",
                "srcActive": "./img/roemer-01-pink.png",
                "top": 697,
                "left":218
            },
            "coords": {
                "latitude": 50.110290,
                "longitude": 8.682265
            }
        },
        {
            "title": "Karmeliterkloster",
            "heading": "Die Geißelung Jesu",
            "teaser": "Das Karmeliterkloster ist die einzige mittelalterliche Klosteranlage, die heute noch in Frankfurt erhalten ist. Im Kreuzgang des Klosters wird die Leidensgeschichte Jesu anschaulich dargestellt. Mehrere Jahre arbeitete der Maler Jörg Ratgeb an dem beeindruckenden Wandfresko.",
            "images": [
                {
                    "name": "04_start_karmeliterkloster_merian.jpg",
                    "caption": "Matthäus Merian d.Ä.: Karmeliterkloster (1628)"
                },
                {
                    "name": "05_backoffen_kreuzigungsgruppe_maria_magdalena.jpg",
                    "caption": "Jörg Ratgeb: Geißelung Jesu (1515-1521)"
                }
            ],
            "audio": "04_karmeliterkloster.mp3",
            "icon": {
                "top": 500,
                "left": 394
            },
            "coords": {
                "latitude": 50.109618,
                "longitude": 8.677803
            }
        },
        {
            "title": "Weißfrauenkloster",
            "heading": "Der Tanz Maria Magdalenas und der Nonnen",
            "teaser": "Das Weißfrauenkloster war der Frankfurter Stadtpatronin Maria Magdalena geweiht und diente früheren Prostituierten als neues Heim. Im Passionsspiel vergnügt sich Maria Magdalena mit ihrem Verehrer beim Tanz, und auch die Nonnen erhielten im 15. Jahrhundert männlichen Besuch.",
            "images": [
                {
                    "name": "05_start_weissfrauenkloster_merian_1628.jpg",
                    "caption": "Matthäus Merian d.Ä.: Weißfrauenkloster  (1628)"
                },
                {
                    "name": "04_karmeliterkloster_geisselung_ratgeb.jpg",
                    "caption": "Hans Backoffen: Maria Magdalena (1509)"
                }
            ],
            "audio": "05_weissfrauenkloster.mp3",
            "icon": {
                "top": 323,
                "left": 300
            },
            "coords": {
                "latitude": 50.109510,
                "longitude": 8.6770
            }
        },
        {
            "title": "Judengasse",
            "heading": "Juden im Ghetto und im Passionsspiel",
            "teaser": "Juden durften nicht an den Passionsspielen teilnehmen, sondern mussten während der Aufführung in ihren Häusern bleiben. Auf der Bühne allerdings schienen die Frankfurter Juden weiterhin präsent zu  sein; die Gegenspieler Jesu wurden nach den jüdischen Bewohnern Frankfurts benannt.",
            "images": [
                {
                    "name": "06_start_frankfurt_judengasse_merian_1628.jpg",
                    "caption": "Matthäus Merian d.Ä.: Judengasse (1628)"
                },
                {
                    "name": "06_fettmilchaufstand_merian_1628.jpg",
                    "caption": "Matthäus Merian d.Ä.: Fettmilch-Aufstand (1628)"
                }
            ],
            "audio": "06_judengasse.mp3",
            "coords": {
                "latitude": 50.113542,
                "longitude": 8.686668
            }
        }
    ]
});
