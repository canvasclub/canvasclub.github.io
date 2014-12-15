eval("//# sourceURL=vendor/ember-cli/loader.js");

;eval("define(\"canvasclub/app\", \n  [\"ember\",\"ember/resolver\",\"ember/load-initializers\",\"canvasclub/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var Resolver = __dependency2__[\"default\"];\n    var loadInitializers = __dependency3__[\"default\"];\n    var config = __dependency4__[\"default\"];\n\n    Ember.MODEL_FACTORY_INJECTIONS = true;\n\n    var App = Ember.Application.extend({\n      modulePrefix: config.modulePrefix,\n      podModulePrefix: config.podModulePrefix,\n      Resolver: Resolver\n    });\n\n    loadInitializers(App, config.modulePrefix);\n\n    __exports__[\"default\"] = App;\n  });//# sourceURL=canvasclub/app.js");

;eval("define(\"canvasclub/controllers/front\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = Ember.Controller.extend({\n      actions: {\n        downloadPressed: function() {\n          console.log(\"downloadPressed\");\n          // new GumroadOverlay(\"https://gum.co/KdhT?wanted=true&locale=true\", \'product\');\n        }\n      }\n    });\n  });//# sourceURL=canvasclub/controllers/front.js");

;eval("define(\"canvasclub/initializers/export-application-global\", \n  [\"ember\",\"canvasclub/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var config = __dependency2__[\"default\"];\n\n    function initialize(container, application) {\n      var classifiedName = Ember.String.classify(config.modulePrefix);\n\n      if (config.exportApplicationGlobal) {\n        window[classifiedName] = application;\n      }\n    };\n    __exports__.initialize = initialize;\n    __exports__[\"default\"] = {\n      name: \'export-application-global\',\n\n      initialize: initialize\n    };\n  });//# sourceURL=canvasclub/initializers/export-application-global.js");

;eval("define(\"canvasclub/router\", \n  [\"ember\",\"canvasclub/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var config = __dependency2__[\"default\"];\n\n    var Router = Ember.Router.extend({\n      location: config.locationType\n    });\n\n    Router.map(function() {\n      this.route(\'front\', { path: \'/\' });\n    });\n\n    __exports__[\"default\"] = Router;\n  });//# sourceURL=canvasclub/router.js");

;eval("define(\"canvasclub/routes/front\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n\n    __exports__[\"default\"] = Ember.Route.extend({\n    });\n  });//# sourceURL=canvasclub/routes/front.js");

;eval("define(\"canvasclub/templates/application\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', stack1;\n\n\n      data.buffer.push(\"\\n\\n\");\n      stack1 = helpers._triageMustache.call(depth0, \"outlet\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"ID\"],data:data});\n      if(stack1 || stack1 === 0) { data.buffer.push(stack1); }\n      data.buffer.push(\"\\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=canvasclub/templates/application.js");

;eval("define(\"canvasclub/templates/front\", \n  [\"ember\",\"exports\"],\n  function(__dependency1__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    __exports__[\"default\"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {\n    this.compilerInfo = [4,\'>= 1.0.0\'];\n    helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};\n      var buffer = \'\', escapeExpression=this.escapeExpression;\n\n\n      data.buffer.push(\"<h2 class=\'title\'><div id=\\\"logo\\\"></div></h2>\\n\\n\\n\\n<div class=\\\"container sticky-bottom\\\">\\n  <div class=\\\"btn btn-download\\\" \");\n      data.buffer.push(escapeExpression(helpers.action.call(depth0, \"downloadPressed\", {hash:{},hashTypes:{},hashContexts:{},contexts:[depth0],types:[\"STRING\"],data:data})));\n      data.buffer.push(\"><a href=\\\"https://gum.co/KdhT\\\">Download \\\"Shoes\\\"</a></div>\\n</div>\\n\\n<div class=\\\"youtube-background\\\">\\n  <iframe frameborder=\\\"0\\\" height=\\\"100%\\\" width=\\\"100%\\\"\\n    src=\\\"https://youtube.com/embed/7eIJRwjBVoc?autoplay=1&controls=0&loop=1&showinfo=0&autohide=1\\\">\\n  </iframe>\\n</div>\\n\\n\\n\\n\");\n      return buffer;\n      \n    });\n  });//# sourceURL=canvasclub/templates/front.js");

;eval("define(\"canvasclub/tests/app.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - .\');\n    test(\'app.js should pass jshint\', function() { \n      ok(true, \'app.js should pass jshint.\'); \n    });\n  });//# sourceURL=canvasclub/tests/app.jshint.js");

;eval("define(\"canvasclub/tests/canvasclub/tests/helpers/resolver.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - canvasclub/tests/helpers\');\n    test(\'canvasclub/tests/helpers/resolver.js should pass jshint\', function() { \n      ok(true, \'canvasclub/tests/helpers/resolver.js should pass jshint.\'); \n    });\n  });//# sourceURL=canvasclub/tests/canvasclub/tests/helpers/resolver.jshint.js");

;eval("define(\"canvasclub/tests/canvasclub/tests/helpers/start-app.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - canvasclub/tests/helpers\');\n    test(\'canvasclub/tests/helpers/start-app.js should pass jshint\', function() { \n      ok(true, \'canvasclub/tests/helpers/start-app.js should pass jshint.\'); \n    });\n  });//# sourceURL=canvasclub/tests/canvasclub/tests/helpers/start-app.jshint.js");

;eval("define(\"canvasclub/tests/canvasclub/tests/test-helper.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - canvasclub/tests\');\n    test(\'canvasclub/tests/test-helper.js should pass jshint\', function() { \n      ok(true, \'canvasclub/tests/test-helper.js should pass jshint.\'); \n    });\n  });//# sourceURL=canvasclub/tests/canvasclub/tests/test-helper.jshint.js");

;eval("define(\"canvasclub/tests/canvasclub/tests/unit/controllers/front-test.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - canvasclub/tests/unit/controllers\');\n    test(\'canvasclub/tests/unit/controllers/front-test.js should pass jshint\', function() { \n      ok(true, \'canvasclub/tests/unit/controllers/front-test.js should pass jshint.\'); \n    });\n  });//# sourceURL=canvasclub/tests/canvasclub/tests/unit/controllers/front-test.jshint.js");

;eval("define(\"canvasclub/tests/canvasclub/tests/unit/routes/front-test.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - canvasclub/tests/unit/routes\');\n    test(\'canvasclub/tests/unit/routes/front-test.js should pass jshint\', function() { \n      ok(true, \'canvasclub/tests/unit/routes/front-test.js should pass jshint.\'); \n    });\n  });//# sourceURL=canvasclub/tests/canvasclub/tests/unit/routes/front-test.jshint.js");

;eval("define(\"canvasclub/tests/controllers/front.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - controllers\');\n    test(\'controllers/front.js should pass jshint\', function() { \n      ok(true, \'controllers/front.js should pass jshint.\'); \n    });\n  });//# sourceURL=canvasclub/tests/controllers/front.jshint.js");

;eval("define(\"canvasclub/tests/helpers/resolver\", \n  [\"ember/resolver\",\"canvasclub/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __exports__) {\n    \"use strict\";\n    var Resolver = __dependency1__[\"default\"];\n    var config = __dependency2__[\"default\"];\n\n    var resolver = Resolver.create();\n\n    resolver.namespace = {\n      modulePrefix: config.modulePrefix,\n      podModulePrefix: config.podModulePrefix\n    };\n\n    __exports__[\"default\"] = resolver;\n  });//# sourceURL=canvasclub/tests/helpers/resolver.js");

;eval("define(\"canvasclub/tests/helpers/start-app\", \n  [\"ember\",\"canvasclub/app\",\"canvasclub/router\",\"canvasclub/config/environment\",\"exports\"],\n  function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __exports__) {\n    \"use strict\";\n    var Ember = __dependency1__[\"default\"];\n    var Application = __dependency2__[\"default\"];\n    var Router = __dependency3__[\"default\"];\n    var config = __dependency4__[\"default\"];\n\n    __exports__[\"default\"] = function startApp(attrs) {\n      var App;\n\n      var attributes = Ember.merge({}, config.APP);\n      attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;\n\n      Ember.run(function() {\n        App = Application.create(attributes);\n        App.setupForTesting();\n        App.injectTestHelpers();\n      });\n\n      return App;\n    }\n  });//# sourceURL=canvasclub/tests/helpers/start-app.js");

;eval("define(\"canvasclub/tests/router.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - .\');\n    test(\'router.js should pass jshint\', function() { \n      ok(true, \'router.js should pass jshint.\'); \n    });\n  });//# sourceURL=canvasclub/tests/router.jshint.js");

;eval("define(\"canvasclub/tests/routes/front.jshint\", \n  [],\n  function() {\n    \"use strict\";\n    module(\'JSHint - routes\');\n    test(\'routes/front.js should pass jshint\', function() { \n      ok(true, \'routes/front.js should pass jshint.\'); \n    });\n  });//# sourceURL=canvasclub/tests/routes/front.jshint.js");

;eval("define(\"canvasclub/tests/test-helper\", \n  [\"canvasclub/tests/helpers/resolver\",\"ember-qunit\"],\n  function(__dependency1__, __dependency2__) {\n    \"use strict\";\n    var resolver = __dependency1__[\"default\"];\n    var setResolver = __dependency2__.setResolver;\n\n    setResolver(resolver);\n\n    document.write(\'<div id=\"ember-testing-container\"><div id=\"ember-testing\"></div></div>\');\n\n    QUnit.config.urlConfig.push({ id: \'nocontainer\', label: \'Hide container\'});\n    var containerVisibility = QUnit.urlParams.nocontainer ? \'hidden\' : \'visible\';\n    document.getElementById(\'ember-testing-container\').style.visibility = containerVisibility;\n  });//# sourceURL=canvasclub/tests/test-helper.js");

;eval("define(\"canvasclub/tests/unit/controllers/front-test\", \n  [\"ember-qunit\"],\n  function(__dependency1__) {\n    \"use strict\";\n    var moduleFor = __dependency1__.moduleFor;\n    var test = __dependency1__.test;\n\n    moduleFor(\'controller:front\', \'FrontController\', {\n      // Specify the other units that are required for this test.\n      // needs: [\'controller:foo\']\n    });\n\n    // Replace this with your real tests.\n    test(\'it exists\', function() {\n      var controller = this.subject();\n      ok(controller);\n    });\n  });//# sourceURL=canvasclub/tests/unit/controllers/front-test.js");

;eval("define(\"canvasclub/tests/unit/routes/front-test\", \n  [\"ember-qunit\"],\n  function(__dependency1__) {\n    \"use strict\";\n    var moduleFor = __dependency1__.moduleFor;\n    var test = __dependency1__.test;\n\n    moduleFor(\'route:front\', \'FrontRoute\', {\n      // Specify the other units that are required for this test.\n      // needs: [\'controller:foo\']\n    });\n\n    test(\'it exists\', function() {\n      var route = this.subject();\n      ok(route);\n    });\n  });//# sourceURL=canvasclub/tests/unit/routes/front-test.js");

/* jshint ignore:start */

define('canvasclub/config/environment', ['ember'], function(Ember) {
  var prefix = 'canvasclub';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */



});

if (runningTests) {
  require("canvasclub/tests/test-helper");
} else {
  require("canvasclub/app")["default"].create({"LOG_ACTIVE_GENERATION":true,"LOG_VIEW_LOOKUPS":true});
}



/* jshint ignore:end */