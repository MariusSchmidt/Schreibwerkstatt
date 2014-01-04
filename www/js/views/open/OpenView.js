;define('views/open/OpenView',
    ['utils/templateProvider', 'utils/viewport'],(function(tplProvider, viewport){

        var rendered;

        addEventListener('resetView', onResetView);

        function onResetView(event) {

            showView(true);
            event.stopImmediatePropagation();

        }

        function onTemplateReady(event) {

            document.querySelector('div.app').innerHTML += event.detail.html;
            setTimeout(showView(false), 350);

        }

        function showView(reverse){

            var move;

            if(reverse == false){

                move = {direction: 'right', start: '0px', end: '-' + viewport.width + 'px'};

            }else{

                move = {direction: 'right', start: '-' + viewport.width + 'px', end: '0px'};

            }

            alice.plugins.cheshire({elems: ['splashScreen', 'open'],
                delay: {value: '0ms', randomness: '0%'},
                duration: {value: '800ms', randomness: '0%'},
                timing: 'ease',
                iteration: '1',
                direction: 'false',
                playstate: 'running',
                move: move,
                rotate: '0%',
                flip: '',
                turns: '1',
                fade: '',
                scale: {from: '100%',to: '100%'},
                shadow: 'false',
                perspective: '1000',
                perspectiveOrigin: 'center',
                overshoot: '2%',
                backfaceVisibility: 'visible'});

        }

        function render(file, data){

            if(!rendered){

                tplProvider.loadTemplate(file, data);
                addEventListener('templateready', onTemplateReady);

            }else{

                showView(false);

            }

        }

        return{

            render: render

        }

    }));