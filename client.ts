import * as React from "react";
import * as ReactDOM from "react-dom";

import * as Shared from "./shared";

let message: string = Shared.makeSharedMessage();
ReactDOM.render(React.createElement("div", {}, [message]), document.getElementById("react-container"));