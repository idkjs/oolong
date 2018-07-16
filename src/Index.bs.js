// Generated by BUCKLESCRIPT VERSION 4.0.0, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Belt_Debug = require("bs-platform/lib/js/belt_Debug.js");
var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var Caml_format = require("bs-platform/lib/js/caml_format.js");
var Program$ReasonTea = require("./Program.bs.js");

Belt_Debug.setupChromeDebugger(/* () */0);

function app() {
  var program = Program$ReasonTea.routerProgram("CounterApp");
  return /* record */[
          /* debug */program[/* debug */0],
          /* fromRoute */(function (routeAction, route) {
              console.log(routeAction, route);
              if (routeAction !== 0) {
                var match = route[/* path */0];
                if (match && match[0] === "") {
                  var match$1 = match[1];
                  if (match$1 && !match$1[1]) {
                    return /* Update */[/* record */[/* counter */Caml_format.caml_int_of_string(match$1[0])]];
                  } else {
                    return /* NoUpdate */0;
                  }
                } else {
                  return /* NoUpdate */0;
                }
              } else {
                var match$2 = route[/* path */0];
                if (match$2 && match$2[0] === "") {
                  var match$3 = match$2[1];
                  if (match$3 && !match$3[1]) {
                    return /* Update */[/* record */[/* counter */Caml_format.caml_int_of_string(match$3[0])]];
                  } else {
                    return /* Update */[/* record */[/* counter */0]];
                  }
                } else {
                  return /* Update */[/* record */[/* counter */0]];
                }
              }
            }),
          /* toRoute */(function (param) {
              var next = param[/* next */1];
              var previous = param[/* previous */0];
              console.log(previous, next);
              if (Caml_obj.caml_equal(previous, next)) {
                return /* NoTransition */1;
              } else {
                return /* Push */Block.__(0, [Program$ReasonTea.makeRoute(/* :: */[
                                "",
                                /* :: */[
                                  String(next[/* counter */0]),
                                  /* [] */0
                                ]
                              ], "", "")]);
              }
            }),
          /* update */(function (action, state) {
              switch (action) {
                case 0 : 
                    return /* Update */[/* record */[/* counter */state[/* counter */0] + 1 | 0]];
                case 1 : 
                    return /* Update */[/* record */[/* counter */state[/* counter */0] - 1 | 0]];
                case 2 : 
                    return /* NoUpdate */0;
                
              }
            }),
          /* view */(function (self) {
              return React.createElement("div", undefined, String(self[/* state */0][/* counter */0]), React.createElement("button", {
                              onClick: (function () {
                                  return Curry._1(self[/* send */1], /* Increment */0);
                                })
                            }, "Increment"), React.createElement("button", {
                              onClick: (function () {
                                  return Curry._1(self[/* send */1], /* Decrement */1);
                                })
                            }, "Decrement"), React.createElement("button", {
                              onClick: (function () {
                                  return Curry._1(self[/* send */1], /* Nothing */2);
                                })
                            }, "Do Nothing"));
            })
        ];
}

((
  function() {
    var app = document.createElement("div");
    app.id = "app";
    document.body.appendChild(app);
  }()
));

Program$ReasonTea.startup(app(/* () */0), (function (view) {
        return ReactDOMRe.renderToElementWithId(view, "app");
      }));

console.log("started");

exports.app = app;
/*  Not a pure module */
