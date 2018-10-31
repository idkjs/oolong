// Generated by BUCKLESCRIPT VERSION 4.0.5, PLEASE EDIT WITH CARE
'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Oolong = require("../src/Oolong.bs.js");
var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var Caml_format = require("bs-platform/lib/js/caml_format.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var Oolong_Internals = require("../src/Oolong_Internals.bs.js");

var component = ReasonReact.statelessComponent("StringElement");

function make(children) {
  return /* record */[
          /* debugName */component[/* debugName */0],
          /* reactClassInternal */component[/* reactClassInternal */1],
          /* handedOffState */component[/* handedOffState */2],
          /* willReceiveProps */component[/* willReceiveProps */3],
          /* didMount */component[/* didMount */4],
          /* didUpdate */component[/* didUpdate */5],
          /* willUnmount */component[/* willUnmount */6],
          /* willUpdate */component[/* willUpdate */7],
          /* shouldUpdate */component[/* shouldUpdate */8],
          /* render */(function () {
              return children.join(" ");
            }),
          /* initialState */component[/* initialState */10],
          /* retainedProps */component[/* retainedProps */11],
          /* reducer */component[/* reducer */12],
          /* jsElementWrapped */component[/* jsElementWrapped */13]
        ];
}

var S = /* module */[
  /* component */component,
  /* make */make
];

function app() {
  var serializeState = function (state) {
    var match = state[/* user */1];
    var user = typeof match === "number" ? "" : match[0];
    return Oolong_Internals.Url[/* make */0](/* :: */[
                String(state[/* counter */0]),
                /* [] */0
              ], "", user);
  };
  var program = Oolong.routerProgram(serializeState, "CounterExample");
  var $$double = function (_, self) {
    return Curry._1(self[/* send */1], /* Double */Block.__(0, [self[/* state */0][/* counter */0]]));
  };
  var login = function (self) {
    var match = self[/* state */0][/* user */1];
    if (typeof match === "number" || match.tag !== 1) {
      return /* () */0;
    } else {
      var username = match[0];
      console.log("Doing login for", username);
      setTimeout((function () {
              if (username === "phated") {
                return Curry._1(self[/* send */1], /* LoginSuccess */Block.__(2, [
                              username,
                              "Blaine"
                            ]));
              } else {
                return Curry._1(self[/* send */1], /* LoginFailure */Block.__(3, [username]));
              }
            }), 500);
      return /* () */0;
    }
  };
  var getUser = function (hash) {
    if (hash === "") {
      return /* NoUser */0;
    } else {
      return /* LoggingIn */Block.__(1, [hash]);
    }
  };
  return /* record */[
          /* debugName */program[/* debugName */0],
          /* serializeState */program[/* serializeState */1],
          /* init */(function (path, _, hash) {
              if (path && !path[1]) {
                return /* StateWithSideEffects */Block.__(1, [
                          /* record */[
                            /* counter */Caml_format.caml_int_of_string(path[0]),
                            /* user */getUser(hash)
                          ],
                          login
                        ]);
              } else {
                return /* State */Block.__(0, [/* record */[
                            /* counter */0,
                            /* user : NoUser */0
                          ]]);
              }
            }),
          /* fromRoute */(function (routeAction, _) {
              console.log("fromRoute", routeAction);
              var match = routeAction[0];
              if (match && !match[1]) {
                return /* StateWithSideEffects */Block.__(1, [
                          /* record */[
                            /* counter */Caml_format.caml_int_of_string(match[0]),
                            /* user */getUser(routeAction[2])
                          ],
                          login
                        ]);
              } else {
                return /* State */Block.__(0, [/* record */[
                            /* counter */0,
                            /* user : NoUser */0
                          ]]);
              }
            }),
          /* toRoute */(function (action, state) {
              console.log("reducer", action, state);
              if (typeof action === "number") {
                switch (action) {
                  case 0 : 
                      console.log("increment");
                      return /* Push */Block.__(0, [/* record */[
                                  /* counter */state[/* counter */0] + 1 | 0,
                                  /* user */state[/* user */1]
                                ]]);
                  case 1 : 
                      console.log("decrement");
                      return /* Push */Block.__(0, [/* record */[
                                  /* counter */state[/* counter */0] - 1 | 0,
                                  /* user */state[/* user */1]
                                ]]);
                  case 2 : 
                      console.log("nothing");
                      return /* Replace */Block.__(2, [state]);
                  
                }
              } else {
                switch (action.tag | 0) {
                  case 0 : 
                      console.log("double");
                      return /* Replace */Block.__(2, [/* record */[
                                  /* counter */(action[0] << 1),
                                  /* user */state[/* user */1]
                                ]]);
                  case 1 : 
                      return /* PushWithSideEffects */Block.__(1, [
                                /* record */[
                                  /* counter */state[/* counter */0],
                                  /* user : LoggingIn */Block.__(1, [action[0]])
                                ],
                                login
                              ]);
                  case 2 : 
                      return /* Replace */Block.__(2, [/* record */[
                                  /* counter */state[/* counter */0],
                                  /* user : LoggedIn */Block.__(2, [
                                      action[0],
                                      action[1]
                                    ])
                                ]]);
                  case 3 : 
                      return /* Replace */Block.__(2, [/* record */[
                                  /* counter */state[/* counter */0],
                                  /* user : InvalidUser */Block.__(0, [action[0]])
                                ]]);
                  
                }
              }
            }),
          /* render */(function (self) {
              console.log("render", self);
              var match = self[/* state */0][/* user */1];
              var userMessage;
              if (typeof match === "number") {
                userMessage = "Not logged in.";
              } else {
                switch (match.tag | 0) {
                  case 0 : 
                      userMessage = match[0] + " is an invalid user";
                      break;
                  case 1 : 
                      userMessage = "Logging in as: " + match[0];
                      break;
                  case 2 : 
                      userMessage = "Welcome " + (match[1] + "!");
                      break;
                  
                }
              }
              return React.createElement("div", undefined, ReasonReact.element(undefined, undefined, make(/* array */[String(self[/* state */0][/* counter */0])])), React.createElement("button", {
                              onClick: (function () {
                                  return Curry._1(self[/* send */1], /* Increment */0);
                                })
                            }, ReasonReact.element(undefined, undefined, make(/* array */["Increment"]))), React.createElement("button", {
                              onClick: (function () {
                                  return Curry._1(self[/* send */1], /* Decrement */1);
                                })
                            }, ReasonReact.element(undefined, undefined, make(/* array */["Decrement"]))), React.createElement("button", {
                              onClick: Curry._1(self[/* handle */2], $$double)
                            }, ReasonReact.element(undefined, undefined, make(/* array */["Double"]))), React.createElement("button", {
                              onClick: (function () {
                                  return Curry._1(self[/* send */1], /* Nothing */2);
                                })
                            }, ReasonReact.element(undefined, undefined, make(/* array */["Do Nothing"]))), React.createElement("button", {
                              onClick: (function () {
                                  return Curry._1(self[/* send */1], /* Login */Block.__(1, ["phated"]));
                                })
                            }, ReasonReact.element(undefined, undefined, make(/* array */["Login as phated"]))), React.createElement("div", undefined, ReasonReact.element(undefined, undefined, make(/* array */[userMessage]))));
            }),
          /* subscriptions */program[/* subscriptions */6]
        ];
}

((
  function() {
    var app = document.createElement("div");
    app.id = "app";
    document.body.appendChild(app);
  }()
));

Oolong.run(Js_primitive.some(Oolong_Internals.Router[/* hash */4](/* () */0)), app(/* () */0))((function (view) {
        return ReactDOMRe.renderToElementWithId(view, "app");
      }));

exports.S = S;
exports.app = app;
/* component Not a pure module */
