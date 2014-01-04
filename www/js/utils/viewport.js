define('utils/viewport', (function(){

        var _viewPortWidth;
        var _viewPortHeight;

    if (typeof window.innerWidth != 'undefined') {

        _viewPortWidth = window.innerWidth,
        _viewPortHeight = window.innerHeight

    }else if (typeof document.documentElement != 'undefined' && typeof document.documentElement.clientWidth != 'undefined' && document.documentElement.clientWidth != 0) {

        _viewPortWidth = document.documentElement.clientWidth;
        _viewPortHeight = document.documentElement.clientHeight;

    }else{

        _viewPortWidth = document.getElementsByTagName('body')[0].clientWidth;
        _viewPortHeight = document.getElementsByTagName('body')[0].clientHeight;

    }

    return{

        width: _viewPortWidth,
        height: _viewPortHeight

    }

}));