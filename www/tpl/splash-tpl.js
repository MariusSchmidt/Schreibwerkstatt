var splashTpl = (function(data) {function each(a,f) { var i,m=[]; for(i=0;i<a.length;i+=1) { m.push(f(a[i],i,a)) } return m }function esc(t) { t=t+""; return t.split("&").join("&amp;").split("<").join("&lt;").split(">").join("&gt;").split('"').join("&quot;") }var memo={}, root=data;return (function(_lambda_) {return (function(_lambda_) {var root=_lambda_?null:(this);root=(("undefined" === typeof root) || (root===false) || (!_lambda_ && (root===null)))?[]:root;root=Array.isArray(root)?root:[root];return (_lambda_?("{{#!root}}"):"")+each(root, function(root,_index_) {return (function(_lambda_) {return '<section id=\'splashScreen\'>\n\n    <header>\n\n        <small>\n            '+(function(_lambda_){var e='rights';return _lambda_?e:(esc(this[e])||"")}.call(this,_lambda_))+' | Copyright &copy; '+(function(_lambda_){var e='year';return _lambda_?e:(esc(this[e])||"")}.call(this,_lambda_))+' &nbsp;&nbsp;-&nbsp;&nbsp; <a href="'+(function(_lambda_){var e='developerSite';return _lambda_?e:(esc(this[e])||"")}.call(this,_lambda_))+'">Credits</a>\n        </small>\n\n    </header>\n\n    <hgroup>\n        <h1 class=\'appName\'>'+(function(_lambda_){var e='appName';return _lambda_?e:(esc(this[e])||"")}.call(this,_lambda_))+'</h1>\n        <h2 class=\'appSlogan blink\'>'+(function(_lambda_){var e='appSlogan';return _lambda_?e:(esc(this[e])||"")}.call(this,_lambda_))+'</h2>\n    </hgroup>\n\n    <nav>\n        <ul class=\'sectionNav\'>\n            <li id=\'createBtn\'><a href=\'create.html\'>'+(function(_lambda_){var e='create';return _lambda_?e:(esc(this[e])||"")}.call(this,_lambda_))+'</a></li>\n            <li id=\'openBtn\'><a href=\'open.html\'>'+(function(_lambda_){var e='open';return _lambda_?e:(esc(this[e])||"")}.call(this,_lambda_))+'</a></li>\n            <li id=\'shareBtn\'><a href=\'share.html\'>'+(function(_lambda_){var e='share';return _lambda_?e:(esc(this[e])||"")}.call(this,_lambda_))+'</a></li>\n        </ul>\n    </nav>\n\n</section>\n'}.call(root,_lambda_));}).join("")+(_lambda_?("{{/root}}"):"");}.call(this, _lambda_))}.call(data, false))});