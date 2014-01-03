/**
 * Created with IntelliJ IDEA.
 * User: giorgionatili
 * Date: 11/22/12
 * Time: 5:45 PM
 * To change this template use File | Settings | File Templates.
 */

var Mediator = (function() {

    var debug = function(msg) {

        console.log(msg);

    };

    var components = {};

    var broadcast = function(event, args, source) {

        if (!event) {

            return;

        }

        args = args || [];

        debug(["Mediator received", event, args].join(' '));

        for (var c in components) {

            if (typeof components[c]["on" + event] == "function") {

                try {

                    debug("Mediator calling " + event + " on " + c);
                    source = source || components[c];
                    components[c]["on" + event].apply(source, args);

                } catch (err) {

                    throw new Error(["Mediator error.", event, args, source, err].join(' '));

                }
            }
        }
    };

    var addComponent = function(name, component, replaceDuplicate) {
        if (name in components) {
            if (replaceDuplicate) {
                removeComponent(name);
            } else {
                throw new Error('Mediator name conflict: ' + name);
            }
        }
        components[name] = component;
    };

    var removeComponent = function(name) {

        if (name in components) {

            delete components[name];

        }else{

            throw  new Error('Desired component doesn\'t exist');

        }

    };

    var getComponent = function(name) {

        return components[name]; // undefined if component has not been added

    };

    var contains = function(name) {

        return (name in components);

    };

    return {
        name      : "Mediator",
        broadcast : broadcast,
        add       : addComponent,
        remove    : removeComponent,
        get       : getComponent,
        has       : contains
    };
})();