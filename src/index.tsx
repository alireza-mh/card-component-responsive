import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./containers/app";
import register from "./registerServiceWorker";
import './theme/main.less';

/* Register PWA to browser */
register();

ReactDOM.render(<AppContainer />, document.getElementById("root"));
