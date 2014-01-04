;
define('model/State', function () {

    function State(data, controller, viewPath, template) {

        this.data = data;
        this.controller = controller;
        this.viewPath = viewPath;
        this.template = template || controller.toLowerCase() + '-tpl.html';

    }

    return State;

});