'use strict';

var appProviders = angular.module('appProviders', []);

appProviders.constant('TOUR', {
    "legalNotice": {

    },
    "mapconfig": {
        imageSource: './img/map.png',
        bounds: {
            height: 991,
            width: 1251,
            topLeft: {
                latitude: 50.1142,
                longitude: 8.6702
            },
            bottomRight: {
                latitude: 50.1030,
                longitude: 8.6920
            }
        }
    },
    "pointsOfInterest": [
        {
            "id": 1,
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
            "audio": "media/Station01.mp3",
            "clickarea": {
                "topLeft": {"x": 0, "y": 0},
                "bottomRight": {"x": 50, "y": 50}
            },
            "coords": {
                "latitude": 50.110290,
                "longitude": 8.682265
            }
        },
        {
            "id": 2,
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
            "audio": "media/Station02.mp3",
            "icon": {
                "src": "./img/02-nikolaikirche1.png",
                "srcActive": "./img/02-nikolaikirche2.png",
                "top": 255,
                "left": 770
            },
            "clickarea": {
                "topLeft": {"x": 0, "y": 0},
                "bottomRight": {"x": 50, "y": 50}
            },
            "coords": {
                "latitude": 50.110290,
                "longitude": 8.682265
            }
        },
        {
            "id": 3,
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
            "audio": "media/Station03.mp3",
            "icon": {
                "src": "./img/03-roemer1.png",
                "srcActive": "./img/03-roemer2.png",
                "top": 218,
                "left": 692
            },
            "clickarea": {
                "topLeft": {"x": 0, "y": 0},
                "bottomRight": {"x": 50, "y": 50}
            },
            "coords": {
                "latitude": 50.110290,
                "longitude": 8.682265
            }
        },
        {
            "id": 4,
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
            "audio": "media/Station04.mp3",
            "icon": {
                "src": "./img/04-karmeliterkloster1.png",
                "srcActive": "./img/04-karmeliterkloster2.png",
                "top": 252,
                "left": 487
            },
            "clickarea": {
                "topLeft": {"x": 0, "y": 0},
                "bottomRight": {"x": 50, "y": 50}
            },
            "coords": {
                "latitude": 50.109618,
                "longitude": 8.677803
            }
        },
        {
            "id": 5,
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
            "audio": "media/Station05.mp3",
            "icon": {
                "src": "./img/05-weissfrauenkloster1.png",
                "srcActive": "./img/05-weissfrauenkloster2.png",
                "top": 303,
                "left": 287
            },
            "clickarea": {
                "topLeft": {"x": 0, "y": 0},
                "bottomRight": {"x": 50, "y": 50}
            },
            "coords": {
                "latitude": 50.109510,
                "longitude": 8.6770
            }
        },
        {
            "id": 6,
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
            "audio": "media/Station06.mp3",
            "clickarea": {
                "topLeft": {"x": 0, "y": 0},
                "bottomRight": {"x": 50, "y": 50}
            },
            "coords": {
                "latitude": 50.113542,
                "longitude": 8.686668
            }
        },
        {
            "id": 7,
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
            "audio": "media/Station06.mp3",
            "icon": {
                "src": "./img/05-weissfrauenkloster1.png",
                "srcActive": "./img/05-weissfrauenkloster2.png",
                "top": 186,
                "left": 838
            },
            "clickarea": {
                "topLeft": {"x": 0, "y": 0},
                "bottomRight": {"x": 50, "y": 50}
            },
            "coords": {
                "latitude": 50.113542,
                "longitude": 8.686668
            }
        },
        {
            "id": 8,
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
            "audio": "media/Station06.mp3",
            "icon": {
                "src": "./img/05-weissfrauenkloster1.png",
                "srcActive": "./img/05-weissfrauenkloster2.png",
                "top": 349,
                "left": 874
            },
            "clickarea": {
                "topLeft": {"x": 0, "y": 0},
                "bottomRight": {"x": 50, "y": 50}
            },
            "coords": {
                "latitude": 50.113542,
                "longitude": 8.686668
            }
        },
        {
            "id": 9,
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
            "audio": "media/Station06.mp3",
            "icon": {
                "src": "./img/05-weissfrauenkloster1.png",
                "srcActive": "./img/05-weissfrauenkloster2.png",
                "top": 327,
                "left": 1007
            },
            "clickarea": {
                "topLeft": {"x": 0, "y": 0},
                "bottomRight": {"x": 50, "y": 50}
            },
            "coords": {
                "latitude": 50.113542,
                "longitude": 8.686668
            }
        },
        {
            "id": 10,
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
            "audio": "media/Station06.mp3",
            "icon": {
                "src": "./img/05-weissfrauenkloster1.png",
                "srcActive": "./img/05-weissfrauenkloster2.png",
                "top": 512,
                "left": 1026
            },
            "clickarea": {
                "topLeft": {"x": 0, "y": 0},
                "bottomRight": {"x": 50, "y": 50}
            },
            "coords": {
                "latitude": 50.113542,
                "longitude": 8.686668
            }
        },
        {
            "id": 11,
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
            "audio": "media/Station06.mp3",
            "icon": {
                "src": "./img/05-weissfrauenkloster1.png",
                "srcActive": "./img/05-weissfrauenkloster2.png",
                "top": 678,
                "left": 1130
            },
            "clickarea": {
                "topLeft": {"x": 0, "y": 0},
                "bottomRight": {"x": 50, "y": 50}
            },
            "coords": {
                "latitude": 50.113542,
                "longitude": 8.686668
            }
        },
        {
            "id": 12,
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
            "audio": "media/Station06.mp3",
            "icon": {
                "src": "./img/05-weissfrauenkloster1.png",
                "srcActive": "./img/05-weissfrauenkloster2.png",
                "top": 132,
                "left": 134
            },
            "clickarea": {
                "topLeft": {"x": 0, "y": 0},
                "bottomRight": {"x": 50, "y": 50}
            },
            "coords": {
                "latitude": 50.113542,
                "longitude": 8.686668
            }
        }
    ],
    "icons": [
        {
            "src": "./img/02-nikolaikirche1.png",
            "srcActive": "./img/02-nikolaikirche2.png",
            "top": 255,
            "left": 770,
            "coords": {
                "latitude": 50.110290,
                "longitude": 8.682265
            }
        },


        {
            "src": "./img/03-roemer1.png",
            "srcActive": "./img/03-roemer2.png",
            "top": 210,
            "left": 700,
            "coords": {
                "latitude": 50.110290,
                "longitude": 8.682265
            }
        },

        {
            "src": "./img/04-karmeliterkloster1.png",
            "srcActive": "./img/04-karmeliterkloster2.png",
            "top": 252,
            "left": 487,
            "coords": {
                "latitude": 50.109618,
                "longitude": 8.677803
            }
        },


        {
            "src": "./img/05-weissfrauenkloster1.png",
            "srcActive": "./img/05-weissfrauenkloster2.png",
            "top": 303,
            "left": 287,
            "coords": {
                "latitude": 50.109510,
                "longitude": 8.6770
            }
        },

        {
            "src": "./img/07-dom1.png",
            "srcActive": "./img/07-dom2.png",
            "top": 186,
            "left": 838,
            "coords": {
                "latitude": 50.110843,
                "longitude": 8.684892
            }
        },

        {
            "src": "./img/08-alte-synagoge1.png",
            "srcActive": "./img/08-alte-synagoge2.png",
            "top": 349,
            "left": 874,
            "coords": {
                "latitude": 50.110405,
                "longitude": 8.685357
            }
        },

        {
            "src": "./img/09-briggegiggel1.png",
            "srcActive": "./img/09-briggegiggel2.png",
            "top": 327,
            "left": 1007,
            "coords": {
                "latitude": 50.109340,
                "longitude": 8.687811
            }
        },

        {
            "src": "./img/10-brueckenturm1.png",
            "srcActive": "./img/10-brueckenturm2.png",
            "top": 512,
            "left": 1026,
            "coords": {
                "latitude": 50.109340,
                "longitude": 8.687811
            }
        },

        {
            "src": "./img/11-affentor1.png",
            "srcActive": "./img/11-affentor2.png",
            "top": 678,
            "left": 1130,
            "coords": {
                "latitude": 50.104778,
                "longitude": 8.690161
            }
        },

        {
            "src": "./img/12-galgentor1.png",
            "srcActive": "./img/12-galgentor2.png",
            "top": 132,
            "left": 134,
            "coords": {
                "latitude": 50.109870,
                "longitude": 8.670244
            }
        },

        {
            "src": "./img/m-jued-museum1.png",
            "srcActive": "./img/m-jued-museum2.png",
            "top": 162,
            "left": 1042,
            "coords": {
                "latitude": 50.107396,
                "longitude": 8.674520
            }
        },

        {
            "src": "./img/m-staedelmusem1.png",
            "srcActive": "./img/m-staedelmusem2.png",
            "top": 860,
            "left": 160,
            "coords": {
                "latitude": 50.102903,
                "longitude": 8.673608
            }
        },

        {
            "src": "./img/alte-bruecke1.png",
            "srcActive": "./img/alte-bruecke2.png",
            "top": 455,
            "left": 1014,
            "coords": {
                "latitude": 50.108483,
                "longitude": 8.687759
            }
        }
    ]
});
