// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Antd from "antd";
import * as React from "react";

function ResButton(Props) {
  var name = Props.name;
  return React.createElement(Antd.Button, {
              type: "primary",
              children: "Hello " + name + "!"
            });
}

var make = ResButton;

export {
  make ,
  
}
/* antd Not a pure module */