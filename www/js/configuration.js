'use strict';

var appConfigurations = angular.module('appConfigurations', []);

appConfigurations.value('NEAR_INFO_ALERT', 'Ihr Ziel ist in unmittelbarer N%E4he%2C m%F6chten sie nun Informationen dazu erhalten%3F');

appConfigurations.constant('TOUR', {
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
        },
        "positionMarker": {
            "size": 43,
            "src": './img/positionmarker.png'
        }
    },
    "pointsOfInterest": [
        {
            "id": 0,
            "title": "Einführung",
            "heading": "1. Einführung: Passionsspiele im mittelalterlichen Frankfurt",
            "teaser": "Frankfurt war im späten Mittelalter nicht nur bedeutende Messestadt, sondern auch Schauplatz für die Aufführung von Passionsspielen. Fast die ganze Stadt war an diesen religiösen Massenveranstaltungen beteiligt.",
            "poiimage": "",
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
                "topLeft": {"x": 725, "y": 325},
                "bottomRight": {"x": 745, "y": 345}
            },
            "coords": {
                "latitude": 50.110290,
                "longitude": 8.682265
            }
        },
        {
            "id": 1,
            "title": "Nikolaikirche",
            "heading": "2. Nikolaikirche: Die Ratsherren und das letzte Abendmahl",
            "teaser": "Der Römerberg ist heute ein Touristenmagnet. Bereits im Mittelalter fanden hier wichtige öffentliche Ereignisse statt. Pfingsten 1492 wurde mitten im Herzen der Messestadt ein Passionsspiel aufgeführt. Selbst die Ratsherren nahmen an diesem Spektakel teil und sicherten sich die besten Plätze.",
            "poiimage": "poi-02-nikolaikirche-01.png",
            "images": [
                {
                    "name": "02_Start_Nikolaikirche_Merian.jpg",
                    "caption": "Matthäus Merian d.Ä.: Nikolaikirche (1628)"
                },
                {
                    "name": "02_abendmahl_holbein.jpg",
                    "caption": "Hans Holbein d.Ä.: Abendmahl (1501)"
                }
            ],
            "audio": "media/Station02.mp3",
            "clickarea": {
                "topLeft": {"x":745, "y": 351},
                "bottomRight": {"x": 765, "y": 371}
            },
            "coords": {
                "latitude": 50.110290,
                "longitude": 8.682265
            }
        },
        {
            "id": 2,
            "title": "Römer",
            "heading": "3. Römer: Verrat des Judas",
            "teaser": "Der Judaskuss gilt als größter Vertrauensbruch der christlichen Geschichte und ist ein wichtiges Motiv im Frankfurter Passionsspiel. Was geschieht im Mittelalter, wenn Judas’ Verrat öffentlich aufgeführt wird? Die emotionale Anteilnahme der Zuschauer ist so groß, dass der Frankfurter Rat Ausschreitungen befürchtet.",
            "poiimage": "poi-03-roemer-01.png",
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
            "clickarea": {
                "topLeft": {"x": 753, "y": 313},
                "bottomRight": {"x": 773, "y": 333}
            },
            "coords": {
                "latitude": 50.110290,
                "longitude": 8.682265
            }
        },
        {
            "id": 3,
            "title": "Karmeliterkloster",
            "heading": "4. Karmeliterkloster: Die Geißelung Jesu",
            "teaser": "Das Karmeliterkloster ist die einzige mittelalterliche Klosteranlage, die heute noch in Frankfurt erhalten ist. Im Kreuzgang des Klosters wird die Leidensgeschichte Jesu anschaulich dargestellt. Mehrere Jahre arbeitete der Maler Jörg Ratgeb an dem beeindruckenden Wandfresko.",
            "poiimage": "poi-04-karmeliterkloster-01.png",
            "images": [
                {
                    "name": "04_start_karmeliterkloster_merian.jpg",
                    "caption": "Matthäus Merian d.Ä.: Karmeliterkloster (1628)"
                },
                {
                    "name": "04_karmeliterkloster_geisselung_ratgeb.jpg",
                    "caption": "Jörg Ratgeb: Geißelung Jesu (1515-1521)"
                }
            ],
            "audio": "media/Station04.mp3",
            "clickarea": {
                "topLeft": {"x": 476, "y": 388},
                "bottomRight": {"x": 496, "y": 408}
            },
            "coords": {
                "latitude": 50.109618,
                "longitude": 8.677803
            }
        },
        {
            "id": 4,
            "title": "Weißfrauenkloster",
            "heading": "5. Weißfrauenkloster: Der Tanz Maria Magdalenas und der Nonnen",
            "teaser": "Das Weißfrauenkloster war der Frankfurter Stadtpatronin Maria Magdalena geweiht und diente früheren Prostituierten als neues Heim. Im Passionsspiel vergnügt sich Maria Magdalena mit ihrem Verehrer beim Tanz, und auch die Nonnen erhielten im 15. Jahrhundert männlichen Besuch.",
            "poiimage": "poi-05-weissfrauenkloster-01.png",
            "images": [
                {
                    "name": "05_start_weissfrauenkloster_merian_1628.jpg",
                    "caption": "Matthäus Merian d.Ä.: Weißfrauenkloster  (1628)"
                },
                {
                    "name": "05_Backoffen_Kreuzigungsgruppe_Maria Magdalena.jpg",
                    "caption": "Hans Backoffen: Maria Magdalena (1509)"
                }
            ],
            "audio": "media/Station05.mp3",
            "clickarea": {
                "topLeft": {"x": 393, "y": 423},
                "bottomRight": {"x": 413, "y": 443}
            },
            "coords": {
                "latitude": 50.109510,
                "longitude": 8.6770
            }
        },
        {
            "id": 5,
            "title": "Judengasse",
            "heading": "6. Judengasse: Juden im Ghetto und im Passionsspiel",
            "teaser": "Juden durften nicht an den Passionsspielen teilnehmen, sondern mussten während der Aufführung in ihren Häusern bleiben. Auf der Bühne allerdings schienen die Frankfurter Juden weiterhin präsent zu  sein; die Gegenspieler Jesu wurden nach den jüdischen Bewohnern Frankfurts benannt.",
            "poiimage": "",
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
                "topLeft": {"x": 903, "y": 57},
                "bottomRight": {"x": 923, "y": 77}
            },
            "coords": {
                "latitude": 50.113542,
                "longitude": 8.686668
            }
        },
        {
            "id": 6,
            "title": "Dom",
            "heading": "7. Dom: Der Lanzenstich des Longinus",
            "teaser": "Selbst beim Tod Jesu geschahen der Überlieferung nach noch Wunder: Der römische Hauptmann Longinus wurde von seiner Blindheit geheilt und bekannte sich zu Christus. Mitsamt seiner Lanze gehört Longinus zur überlebensgroßen Kreuzigungsgruppe im Dom, die wie ein zu Stein gewordenes Passionsspiel wirkt.",
            "poiimage": "poi-07-dom-01.png",
            "images": [
                {
                    "name": "07_start_dom_merian.jpg",
                    "caption": "Matthäus Merian d.Ä.: Frankfurter Dom (1617)"
                },
                {
                    "name": "07_Backoffen_Kreuzigungsgruppe_Longinus.jpg",
                    "caption": "Hans Backoffen: Longinus (1509)"
                }
            ],
            "audio": "media/Station07.mp3",
            "clickarea": {
                "topLeft": {"x": 829, "y": 292},
                "bottomRight": {"x": 849, "y": 312}
            },
            "coords": {
                "latitude": 50.110843,
                "longitude": 8.684892
            }
        },
        {
            "id": 7,
            "title": "Synagoge",
            "heading": "8. Alte Synagoge: Josef mit dem Judenhut",
            "teaser": "Die alte jüdische Synagoge und der Dom standen sich im Mittelalter unmittelbar gegenüber. Auch an diesem Ort wurde das Passionsspiel einst aufgeführt. Der rechtgläubige Josef über dem Südportal des Doms sollte den Frankfurter Juden im Alltag zur Mahnung dienen.",
            "poiimage": "poi-08-alte-synagoge-01.png",
            "images": [
                {
                    "name": "08_start_alte_synagoge_merian.jpg",
                    "caption": "Matthäus Merian d.Ä.: Frankfurter Dom (1628)"
                },
                {
                    "name": "08_joseph_dom_suedportal.jpg",
                    "caption": "Meister Antze: Josef (1350)"
                }
            ],
            "audio": "media/Station08.mp3",
            "clickarea": {
                "topLeft": {"x": 856, "y": 346},
                "bottomRight": {"x": 876, "y": 366}
            },
            "coords": {
                "latitude": 50.110405,
                "longitude": 8.685357
            }
        },
        {
            "id": 8,
            "title": "Briggegiggel",
            "heading": "9. Briggegiggel: Die Verleugnung des Petrus",
            "teaser": "Der Briggegiggel ist das Wahrzeichen der Alten Brücke. Der Hahn auf dem Kreuz erinnert daran, dass Petrus Jesus dreimal verleugnete und sein Handeln später bitter bereute. An seinem ursprünglichen Standort, in der Mitte der Brücke, wurden im späten Mittelalter Todesurteile vollstreckt.",
            "poiimage": "poi-09-briggegiggel-01.png",
            "images": [
                {
                    "name": "09_start_alte_bruecke.jpg",
                    "caption": "Matthäus Merian d.Ä.: Alte Brücke (1628)"
                },
                {
                    "name": "09_alte_bruecke_bedebuch.jpg",
                    "caption": "Bedebuch: Briggegiggel (1405)"
                }
            ],
            "audio": "media/Station09.mp3",
            "clickarea": {
                "topLeft": {"x": 1013, "y": 424},
                "bottomRight": {"x": 1033, "y": 444}
            },
            "coords": {
                "latitude": 50.109340,
                "longitude": 8.687811
            }
        },
        {
            "id": 9,
            "title": "Judenschandbild",
            "heading": "10. Alte Brücke: Judenschandbild",
            "teaser": "Der Antijudaismus im späten Mittelalter zeigte sich nicht nur im Passionsspiel, sondern auch im Frankfurter Stadtbild. An einem der beiden Türme der Alten Brücke befand sich lange Zeit ein Schandbild, das die Juden verunglimpfte und ihnen schreckliche Verbrechen unterstellte.",
            "poiimage": "poi-10-brueckenturm-01.png",
            "images": [
                {
                    "name": "10_start_alte_bruecke_brueckenturm.jpg",
                    "caption": "Matthäus Merian d.Ä.: Brückenturm der Alten Brücke (1628)"
                },
                {
                    "name": "10_alte_bruecke_judenschandbild.jpg",
                    "caption": "Johann Jakob Schudt: Jüdische Merckwürdigkeiten (1714-1717)"
                }
            ],
            "audio": "media/Station10.mp3",
            "clickarea": {
                "topLeft": {"x": 1005, "y": 611},
                "bottomRight": {"x": 1025, "y": 631}
            },
            "coords": {
                "latitude": 50.109340,
                "longitude": 8.687811
            }
        },
        {
            "id": 10,
            "title": "Affentor",
            "heading": "11. Affentor: Das Glaubensbekenntnis eines Muslim",
            "teaser": "Das Affentor markierte die alte Stadtgrenze. Auch im Frankfurter Passionsspiel wurden Grenzen gezogen und es wurde über die Zugehörigkeit zur Stadtgemeinschaft diskutiert. In der Zeit der Türkenkriege trat der muslimische Bote Machmet auf und wendete sich gegen die Juden.",
            "poiimage": "poi-11-affentor-01.png",
            "images": [
                {
                    "name": "11_start_affentor_merian.jpg",
                    "caption": "Matthäus Merian d.Ä.: Das Affentor (1628)"
                },
                {
                    "name": "11_kreuzigung_mittelrheinischer_meister_reiter_mit_turban.jpg",
                    "caption": "Mittelrheinischer Meister: Kreuzigungsaltar (um 1420)"
                }
            ],
            "audio": "media/Station11.mp3",
            "clickarea": {
                "topLeft": {"x": 1142, "y": 812},
                "bottomRight": {"x": 1162, "y": 832}
            },
            "coords": {
                "latitude": 50.104778,
                "longitude": 8.690161
            }
        },
        {
            "id": 11,
            "title": "Galgentor",
            "heading": "12. Galgentor: Der gewaltsame Tod Jesu",
            "teaser": "Auf dem Galgenfeld, wo im Mittelalter öffentliche Hinrichtungen stattfanden, wurden die Kreuze des Passionsspiels aufgestellt. Gewalt gehörte zum Alltag der Menschen, doch bestand nach Ansicht der Zuschauer ein Unterschied zwischen der Kreuzigung Christi und der Hinrichtung von Verbrechern: Jesus war unschuldig.",
            "poiimage": "poi-12-galgentor-01.png",
            "images": [
                {
                    "name": "12_start_galgentor_merian.jpg",
                    "caption": "Matthäus Merian d.Ä.: Das Galgentor (1628)"
                },
                {
                    "name": "12_galgentor_schrotblatt_ub.jpg",
                    "caption": "Schrotblatt mit der Annagelung ans Kreuz (um 1470/80)"
                }
            ],
            "audio": "media/Station12.mp3",
            "clickarea": {
                "topLeft": {"x": 148, "y": 240},
                "bottomRight": {"x": 168, "y": 260}
            },
            "coords": {
                "latitude": 50.109870,
                "longitude": 8.670244
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
                "latitude": 50.107203,
                "longitude": 8.687787
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
