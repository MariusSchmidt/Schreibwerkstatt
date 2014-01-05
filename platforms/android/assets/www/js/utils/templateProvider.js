;define('utils/templateProvider',
        ['mustache'],(function(mustache){

    var html, currentData;

    function templatesReady(tpl){

        html = mustache.to_html(tpl, currentData);

        var event;

        try{

            event = new CustomEvent('templateready', {detail: {
                html: html
            },
                bubbles: true,
                cancelable: true
            });

        }catch (error){

            event = document.createEvent("Event");
            event.initEvent("templateready", true, true);

            event.detail = {html: html};

        }

        this.dispatchEvent(event);

    }

    return{

        loadTemplate: function(file, data){

            html = null;
            currentData = data;

            require([
                'text!../tpl/' + file
            ], templatesReady);

        },

        renderedTemplate: html

    }

}));