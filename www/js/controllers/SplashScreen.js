;
define('controllers/SplashScreen', (function () {

    var forEach = Array.prototype.forEach;

    function onOpenSection(evt) {

        var title = this.textContent;
        var path = this.href;
        var view = path.substring(path.lastIndexOf('/') + 1);

        history.pushState({view: view}, title, path);

        var event;

        try {

            event = new CustomEvent('pushstate', {detail: {
                view: view
            },
                bubbles: true,
                cancelable: true

            });

        } catch (error) {

            console.log('Custom events not supported', error);

            event = document.createEvent("Event");
            event.initEvent("pushstate", true, true);

            event.detail = {view: view};

        }

        this.dispatchEvent(event);

        evt.preventDefault();

    }

    return {

        start: function (elements) {

            forEach.call(elements, function (link) {

                link.addEventListener('click', onOpenSection);

            });

        }

    };

}));