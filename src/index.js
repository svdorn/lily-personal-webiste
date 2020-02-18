import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import App from "./App";
import HttpsRedirect from "react-https-redirect";

ReactDOM.render(
    <HttpsRedirect>
        <App />
    </HttpsRedirect>,
    document.getElementById("app")
);
registerServiceWorker();
